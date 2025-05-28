"use client";

import type React from "react";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Session, User, AuthError } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

type AuthContextType = {
	user: User | null;
	session: Session | null;
	isLoading: boolean;
	signUp: (
		email: string,
		password: string
	) => Promise<{
		error: Error | null;
		data: { session: Session | null; user: User | null } | null;
	}>;
	signIn: (
		email: string,
		password: string
	) => Promise<{
		error: AuthError | null;
		data: { session: Session | null; user: User | null } | null;
	}>;
	signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [session, setSession] = useState<Session | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		// Get session from Supabase
		const getSession = async () => {
			setIsLoading(true);
			const {
				data: { session },
				error,
			} = await supabase.auth.getSession();

			if (error) {
				console.error("Error getting session:", error);
			}

			setSession(session);
			setUser(session?.user ?? null);
			setIsLoading(false);
		};

		getSession();

		// Listen for auth changes
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
			setUser(session?.user ?? null);
			setIsLoading(false);
		});

		return () => {
			subscription.unsubscribe();
		};
	}, []);

	const signUp = async (email: string, password: string) => {
		setIsLoading(true);
		const response = await supabase.auth.signUp({
			email,
			password,
		});
		setIsLoading(false);
		return response;
	};

	const signIn = async (email: string, password: string) => {
		setIsLoading(true);
		const response = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		setIsLoading(false);
		return response;
	};

	const signOut = async () => {
		await supabase.auth.signOut();
		router.push("/");
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
