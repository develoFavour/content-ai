"use client";

import type React from "react";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Session, User, AuthError } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

type SignUpResponse = {
	error: AuthError | null;
	data: {
		user: User | null;
		session: Session | null;
	};
};

type SignInResponse = {
	error: AuthError | null;
	data: {
		user: User | null;
		session: Session | null;
	};
};

type AuthContextType = {
	user: User | null;
	session: Session | null;
	isLoading: boolean;
	signUp: (
		email: string,
		password: string,
		name: string
	) => Promise<SignUpResponse>;
	signIn: (email: string, password: string) => Promise<SignInResponse>;
	signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [session, setSession] = useState<Session | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		let mounted = true;

		// Get session from Supabase
		const getSession = async () => {
			try {
				console.log("AuthProvider - Getting initial session...");
				const {
					data: { session },
					error,
				} = await supabase.auth.getSession();

				if (!mounted) return;

				if (error) {
					console.error("Error getting session:", error);
					toast.error("Session error: " + error.message);
				}

				console.log(
					"AuthProvider - Initial session:",
					!!session,
					session?.user?.email
				);
				setSession(session);
				setUser(session?.user ?? null);
			} catch (error) {
				if (!mounted) return;
				console.error("Unexpected error getting session:", error);
				toast.error("Failed to load session");
			} finally {
				if (mounted) {
					setIsLoading(false);
				}
			}
		};

		getSession();

		// Listen for auth changes
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(async (event, session) => {
			if (!mounted) return;

			console.log(
				"AuthProvider - Auth state changed:",
				event,
				!!session,
				session?.user?.email
			);

			setSession(session);
			setUser(session?.user ?? null);
			setIsLoading(false);

			// Handle redirects and toasts based on auth state and current path
			if (event === "SIGNED_IN" && session && !user) {
				// Only show the toast if the user was not already signed in
				toast.success("Successfully signed in!");
				// Redirect if we're on an auth page
				if (
					pathname === "/signin" ||
					pathname === "/signup" ||
					pathname === "/verify-email"
				) {
					router.push("/dashboard");
				}
			} else if (event === "SIGNED_OUT") {
				toast.success("Successfully signed out!");
				// Redirect if we're on a protected page
				if (pathname?.startsWith("/dashboard")) {
					router.push("/");
				}
			} else if (event === "TOKEN_REFRESHED") {
				console.log("AuthProvider - Token refreshed");
			}
		});

		return () => {
			mounted = false;
			subscription.unsubscribe();
		};
	}, [router, pathname]);
	const signUp = async (
		email: string,
		password: string,
		name: string
	): Promise<SignUpResponse> => {
		setIsLoading(true);
		try {
			console.log("AuthProvider - Signing up user:", email);
			const response = await supabase.auth.signUp({
				email,
				password,
				options: {
					data: {
						name: name,
					},
				},
			});

			console.log(
				"AuthProvider - Signup response:",
				!!response.data.user,
				!!response.data.session,
				response.error?.message
			);

			if (response.error) {
				toast.error(response.error.message);
			} else if (response.data.user && !response.data.session) {
				// User created but needs email verification
				toast.success(
					"Account created! Please check your email to verify your account."
				);
			} else if (response.data.session) {
				// User created and automatically signed in
				toast.success("Account created successfully!");
			}

			return {
				error: response.error,
				data: {
					user: response.data.user,
					session: response.data.session,
				},
			};
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : "Unknown error occurred";
			console.error("AuthProvider - Signup error:", error);
			toast.error("Signup failed: " + errorMessage);
			return {
				error: error as AuthError,
				data: {
					user: null,
					session: null,
				},
			};
		} finally {
			setIsLoading(false);
		}
	};

	const signIn = async (
		email: string,
		password: string
	): Promise<SignInResponse> => {
		setIsLoading(true);
		try {
			console.log("AuthProvider - Signing in user:", email);
			const response = await supabase.auth.signInWithPassword({
				email,
				password,
			});

			console.log(
				"AuthProvider - Signin response:",
				!!response.data.user,
				!!response.data.session,
				response.error?.message
			);

			if (response.error) {
				if (response.error.message === "Email not confirmed") {
					toast.error(
						"Please check your email and click the verification link before signing in."
					);
				} else if (response.error.message === "Invalid login credentials") {
					toast.error(
						"Invalid email or password. Please check your credentials."
					);
				} else {
					toast.error(response.error.message);
				}
			} else if (response.data.session) {
				// Don't show success toast here, let the auth state change handler do it
				console.log("AuthProvider - Signin successful, session created");
			}

			return {
				error: response.error,
				data: {
					user: response.data.user,
					session: response.data.session,
				},
			};
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : "Unknown error occurred";
			console.error("AuthProvider - Signin error:", error);
			toast.error("Signin failed: " + errorMessage);
			return {
				error: error as AuthError,
				data: {
					user: null,
					session: null,
				},
			};
		} finally {
			setIsLoading(false);
		}
	};

	const signOut = async (): Promise<void> => {
		setIsLoading(true);
		try {
			console.log("AuthProvider - Signing out user");
			const { error } = await supabase.auth.signOut();
			if (error) {
				toast.error("Error signing out: " + error.message);
			}
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : "Unknown error occurred";
			console.error("AuthProvider - Signout error:", error);
			toast.error("Error signing out: " + errorMessage);
		} finally {
			setIsLoading(false);
		}
	};

	const value = {
		user,
		session,
		isLoading,
		signUp,
		signIn,
		signOut,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
