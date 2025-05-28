"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Brain, Mail, Lock, User, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [step, setStep] = useState(1); // 1: form, 2: verification
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setStep(2);
			}
		} catch (error) {
			console.error("Signup error:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleVerification = () => {
		// Simulate email verification
		router.push("/dashboard");
	};

	return (
		<div className="min-h-screen bg-black text-white relative overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
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

					{step === 1 ? (
						<Card className="bg-white/5 border-white/10 backdrop-blur-xl">
							<CardHeader className="text-center pb-8">
								<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
									<Brain className="w-6 h-6 text-white" />
								</div>
								<CardTitle className="text-2xl text-gray-600 font-bold">
									Create Your Account
								</CardTitle>
								<p className="text-gray-400">
									Join thousands of creators using ContentAI
								</p>
							</CardHeader>

							<CardContent className="space-y-6">
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
										className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 py-6"
										disabled={isLoading}
									>
										{isLoading ? "Creating Account..." : "Create Account"}
									</Button>
								</form>

								<div className="relative">
									<Separator className="bg-white/20" />
									<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2 text-gray-400 text-sm">
										or
									</span>
								</div>

								<Button
									variant="outline"
									className="w-full border-white/20 text-white hover:bg-white/10 py-6"
								>
									Continue with Google
								</Button>

								<p className="text-center text-gray-400 text-sm">
									Already have an account?{" "}
									<Link
										href="/signin"
										className="text-purple-400 hover:text-purple-300"
									>
										Sign in
									</Link>
								</p>
							</CardContent>
						</Card>
					) : (
						<Card className="bg-white/5 border-white/10 backdrop-blur-xl">
							<CardContent className="p-8 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
									<CheckCircle className="w-8 h-8 text-white" />
								</div>
								<h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
								<p className="text-gray-400 mb-6">
									We&apos;ve sent a verification link to{" "}
									<strong>{formData.email}</strong>
								</p>
								<p className="text-sm text-gray-500 mb-8">
									Click the link in your email to verify your account and get
									started.
								</p>
								<Button
									onClick={handleVerification}
									className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 py-6"
								>
									I&apos;ve Verified My Email
								</Button>
								<p className="text-center text-gray-400 text-sm mt-4">
									Didn&apos;t receive the email?{" "}
									<button className="text-purple-400 hover:text-purple-300">
										Resend verification
									</button>
								</p>
							</CardContent>
						</Card>
					)}
				</div>
			</div>
		</div>
	);
}
