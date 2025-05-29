"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, CheckCircle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
// import { FloatingParticles } from "@/components/floating-particles";

export default function VerifyEmailPage() {
	const [email, setEmail] = useState("");
	const [isResending, setIsResending] = useState(false);
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const emailParam = searchParams.get("email");
		if (emailParam) {
			setEmail(emailParam);
		}
	}, [searchParams]);

	const resendVerification = async () => {
		if (!email) {
			toast.error("Email address is required");
			return;
		}

		setIsResending(true);
		try {
			const { error } = await supabase.auth.resend({
				type: "signup",
				email: email,
			});

			if (error) {
				toast.error(error.message);
			} else {
				toast.success("Verification email sent! Please check your inbox.");
			}
		} catch (error: unknown) {
			console.error("Error resending verification email:", error);
			toast.error("Failed to resend verification email");
		} finally {
			setIsResending(false);
		}
	};

	const checkVerificationStatus = async () => {
		try {
			const { data, error } = await supabase.auth.getSession();

			if (error) {
				toast.error("Error checking verification status");
				return;
			}

			if (data.session) {
				toast.success("Email verified successfully!");
				router.push("/dashboard");
			} else {
				toast.info("Email not yet verified. Please check your email.");
			}
		} catch (error) {
			console.error("Error checking verification status:", error);
			toast.error("Error checking verification status");
		}
	};

	return (
		<div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
			{/* <FloatingParticles /> */}

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
							<div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<Mail className="w-8 h-8 text-white" />
							</div>
							<CardTitle className="text-2xl font-bold">
								Check Your Email
							</CardTitle>
							<p className="text-gray-400">
								We&apos;ve sent a verification link to your email
							</p>
						</CardHeader>

						<CardContent className="space-y-6">
							<div className="text-center">
								<p className="text-gray-300 mb-2">
									We sent a verification link to:
								</p>
								<p className="text-emerald-400 font-semibold text-lg">
									{email || "your email address"}
								</p>
							</div>

							<div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
								<div className="flex items-start space-x-3">
									<CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
									<div className="text-sm text-emerald-300">
										<p className="font-semibold mb-1">Next Steps:</p>
										<ol className="list-decimal list-inside space-y-1 text-emerald-200">
											<li>Check your email inbox (and spam folder)</li>
											<li>Click the verification link in the email</li>
											<li>
												Return here and click &quot;I&apos;ve Verified My
												Email&quot;
											</li>
										</ol>
									</div>
								</div>
							</div>

							<div className="space-y-3">
								<Button
									onClick={checkVerificationStatus}
									className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white border-0 py-6"
								>
									I&apos;ve Verified My Email
								</Button>

								<Button
									variant="outline"
									onClick={resendVerification}
									disabled={isResending || !email}
									className="w-full border-white/20 text-white hover:bg-white/10 py-6"
								>
									{isResending ? (
										<>
											<RefreshCw className="w-4 h-4 mr-2 animate-spin" />
											Resending...
										</>
									) : (
										<>
											<Mail className="w-4 h-4 mr-2" />
											Resend Verification Email
										</>
									)}
								</Button>
							</div>

							<div className="text-center">
								<p className="text-gray-400 text-sm">
									Didn&apos;t receive the email? Check your spam folder or{" "}
									<button
										onClick={resendVerification}
										disabled={isResending || !email}
										className="text-emerald-400 hover:text-emerald-300 underline"
									>
										resend verification
									</button>
								</p>
							</div>

							<div className="text-center pt-4 border-t border-white/10">
								<p className="text-gray-400 text-sm">
									Already verified?{" "}
									<Link
										href="/signin"
										className="text-emerald-400 hover:text-emerald-300"
									>
										Sign in here
									</Link>
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
