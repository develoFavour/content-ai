"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Brain, Mail, Lock, User, ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/auth-context";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function SignUpPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();
	const { signUp, isLoading } = useAuth();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		// Basic validation
		if (formData.password !== formData.confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		if (formData.password.length < 6) {
			setError("Password must be at least 6 characters");
			return;
		}

		try {
			const { error } = await signUp(formData.email, formData.password);

			if (error) {
				setError(error.message);
				return;
			}

			// Store user profile data in Supabase
			// This will be implemented later when we set up the database

			// Redirect to verification page or dashboard
			router.push("/dashboard");
		} catch (err) {
			console.error("Signup error:", err);
			setError("An unexpected error occurred");
		}
	};

	return (
		<div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
			<div className="absolute inset-0">
				{[...Array(30)].map((_, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 3}s`,
						}}
					/>
				))}
			</div>

			<div className="relative z-10 min-h-screen flex items-center justify-center p-6">
				<div className="w-full max-w-md">
					{/* Back Button */}
					<Link
						href="/"
						className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Back to Home
					</Link>

					<Card className="bg-white/5 border-white/10 backdrop-blur-xl">
						<CardHeader className="text-center pb-8">
							<div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
								<Brain className="w-6 h-6 text-white" />
							</div>
							<CardTitle className="text-2xl font-bold">
								Create Your Account
							</CardTitle>
							<p className="text-gray-400">
								Join thousands of creators using ContentAI
							</p>
						</CardHeader>

						<CardContent className="space-y-6">
							{error && (
								<Alert
									variant="destructive"
									className="bg-red-900/20 border-red-900 text-red-300"
								>
									<AlertCircle className="h-4 w-4" />
									<AlertDescription>{error}</AlertDescription>
								</Alert>
							)}

							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="name" className="text-white">
										Full Name
									</Label>
									<div className="relative">
										<User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
										<Input
											id="name"
											type="text"
											placeholder="Enter your full name"
											value={formData.name}
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
											className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400"
											required
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="email" className="text-white">
										Email Address
									</Label>
									<div className="relative">
										<Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
										<Input
											id="email"
											type="email"
											placeholder="Enter your email"
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400"
											required
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="password" className="text-white">
										Password
									</Label>
									<div className="relative">
										<Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
										<Input
											id="password"
											type="password"
											placeholder="Create a password"
											value={formData.password}
											onChange={(e) =>
												setFormData({ ...formData, password: e.target.value })
											}
											className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400"
											required
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="confirmPassword" className="text-white">
										Confirm Password
									</Label>
									<div className="relative">
										<Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
										<Input
											id="confirmPassword"
											type="password"
											placeholder="Confirm your password"
											value={formData.confirmPassword}
											onChange={(e) =>
												setFormData({
													...formData,
													confirmPassword: e.target.value,
												})
											}
											className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400"
											required
										/>
									</div>
								</div>

								<Button
									type="submit"
									className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white border-0 py-6"
									disabled={isLoading}
								>
									{isLoading ? "Creating Account..." : "Create Account"}
								</Button>
							</form>

							<div className="relative">
								<Separator className="bg-white/20" />
								<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-950 px-2 text-gray-400 text-sm">
									or
								</span>
							</div>

							<Button
								variant="outline"
								className="w-full border-white/20 text-white hover:bg-white/10 py-6"
								onClick={() => {
									// We'll implement social login later
									setError("Google login will be implemented soon");
								}}
							>
								Continue with Google
							</Button>

							<p className="text-center text-gray-400 text-sm">
								Already have an account?{" "}
								<Link
									href="/signin"
									className="text-emerald-400 hover:text-emerald-300"
								>
									Sign in
								</Link>
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
