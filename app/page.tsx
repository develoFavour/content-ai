"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
	Sparkles,
	Zap,
	Brain,
	Rocket,
	ArrowRight,
	CheckCircle,
	Users,
	TrendingUp,
	Shield,
} from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/pages/Navigation";
import { useDataContext } from "@/app/context/data-context";

export default function LandingPage() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const { setActiveCard, setIsVisible } = useDataContext();

	useEffect(() => {
		setIsVisible(true);
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", handleMouseMove);

		// Auto-rotate cards
		const interval = setInterval(() => {
			setActiveCard((prev) => (prev + 1) % 6);
		}, 3000);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
			{/* Enhanced Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />

			{/* Animated Grid Background */}
			<div className="absolute inset-0 opacity-20">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
						backgroundSize: "50px 50px",
						animation: "grid-move 20s linear infinite",
					}}
				/>
			</div>

			{/* Dynamic Mouse Follower */}
			<div
				className="absolute w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-violet-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-500"
				style={{
					left: mousePosition.x - 300,
					top: mousePosition.y - 300,
				}}
			/>

			{/* Enhanced Floating Elements */}
			<div className="absolute inset-0">
				{[...Array(100)].map((_, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-white/30 rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
							animationDelay: `${Math.random() * 5}s`,
						}}
					/>
				))}
			</div>

			{/* Navigation */}
			<Navigation />
			{/* Enhanced Hero Section */}

			{/* Enhanced Features Section */}
			<section className="relative z-10 px-6 lg:px-12 py-32">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-20">
						<h2 className="text-5xl lg:text-7xl font-black mb-8">
							<span className="text-white">Unleash</span>
							<br />
							<span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
								AI Supremacy
							</span>
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Experience content creation that breaks all boundaries and
							redefines what&apos;s possible
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								icon: Brain,
								title: "Neural Content Engine",
								description:
									"Advanced AI models trained on billions of high-converting content pieces",
								color: "from-emerald-500 to-teal-600",
							},
							{
								icon: Zap,
								title: "Instant Generation",
								description:
									"Create professional content in under 3 seconds with zero compromise on quality",
								color: "from-yellow-500 to-orange-600",
							},
							{
								icon: Users,
								title: "Omnichannel Mastery",
								description:
									"Content optimized for every platform, audience, and conversion goal",
								color: "from-blue-500 to-indigo-600",
							},
							{
								icon: TrendingUp,
								title: "SEO Domination",
								description:
									"Built-in optimization that ranks #1 and drives organic traffic explosions",
								color: "from-green-500 to-emerald-600",
							},
							{
								icon: Shield,
								title: "Enterprise Fortress",
								description:
									"Military-grade security with 99.99% uptime and data sovereignty",
								color: "from-red-500 to-pink-600",
							},
							{
								icon: Sparkles,
								title: "Creative Infinity",
								description:
									"Unlimited creative possibilities with AI that thinks like your best copywriter",
								color: "from-violet-500 to-purple-600",
							},
						].map((feature, index) => (
							<Card
								key={index}
								className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-gray-700 transition-all duration-500 group hover:scale-105"
							>
								<CardContent className="p-8">
									<div
										className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
									>
										<feature.icon className="w-7 h-7 text-white" />
									</div>
									<h3 className="text-xl font-bold mb-4 text-white">
										{feature.title}
									</h3>
									<p className="text-gray-400 leading-relaxed">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Unique CTA Section - Completely Different Design */}
			<section className="relative z-10 px-6 lg:px-12 py-32">
				<div className="max-w-7xl mx-auto">
					{/* Hexagonal Grid Background */}
					<div className="relative">
						<div className="absolute inset-0 opacity-10">
							<div className="grid grid-cols-8 gap-4 h-full">
								{[...Array(64)].map((_, i) => (
									<div
										key={i}
										className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg"
										style={{
											animation: `pulse ${
												2 + Math.random() * 3
											}s ease-in-out infinite`,
											animationDelay: `${Math.random() * 2}s`,
										}}
									/>
								))}
							</div>
						</div>

						{/* Main CTA Content */}
						<div className="relative bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl border border-gray-800 overflow-hidden">
							{/* Animated Border */}
							<div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 rounded-3xl opacity-20 animate-pulse" />

							<div className="relative p-16 text-center">
								{/* Floating Elements */}
								<div className="absolute top-8 left-8 w-4 h-4 bg-emerald-400 rounded-full animate-bounce" />
								<div
									className="absolute top-12 right-12 w-3 h-3 bg-blue-400 rounded-full animate-bounce"
									style={{ animationDelay: "0.5s" }}
								/>
								<div
									className="absolute bottom-8 left-16 w-2 h-2 bg-violet-400 rounded-full animate-bounce"
									style={{ animationDelay: "1s" }}
								/>

								<div className="max-w-4xl mx-auto">
									<div className="inline-flex items-center bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full px-6 py-3 mb-8 border border-emerald-500/20">
										<Rocket className="w-5 h-5 mr-2 text-emerald-400" />
										<span className="text-emerald-300 font-semibold">
											Limited Time: Early Access
										</span>
									</div>

									<h2 className="text-6xl lg:text-7xl font-black mb-8 leading-tight">
										<span className="text-white">Join The</span>
										<br />
										<span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
											Content Revolution
										</span>
									</h2>

									<p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
										Be among the first 1,000 creators to access the most
										powerful AI content engine ever built
									</p>

									{/* Interactive Button Group */}
									<div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
										<Link href="/signup">
											<Button
												size="lg"
												className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white border-0 px-16 py-8 text-xl font-bold shadow-2xl shadow-emerald-500/25 group relative overflow-hidden"
											>
												<span className="relative z-10">Claim Your Spot</span>
												<div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
												<ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
											</Button>
										</Link>

										<div className="text-center lg:text-left">
											<div className="text-sm text-gray-500 mb-1">
												Starting at
											</div>
											<div className="text-3xl font-bold text-white">
												<span className="line-through text-gray-600 text-xl mr-2">
													$97
												</span>
												FREE
											</div>
											<div className="text-sm text-emerald-400">
												Forever for early adopters
											</div>
										</div>
									</div>

									{/* Trust Indicators */}
									<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
										<div className="flex items-center justify-center space-x-3">
											<CheckCircle className="w-6 h-6 text-emerald-400" />
											<span className="text-gray-300 font-semibold">
												No Credit Card Required
											</span>
										</div>
										<div className="flex items-center justify-center space-x-3">
											<CheckCircle className="w-6 h-6 text-emerald-400" />
											<span className="text-gray-300 font-semibold">
												Instant Access
											</span>
										</div>
										<div className="flex items-center justify-center space-x-3">
											<CheckCircle className="w-6 h-6 text-emerald-400" />
											<span className="text-gray-300 font-semibold">
												Cancel Anytime
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="relative z-10 border-t border-gray-800 px-6 lg:px-12 py-12">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-3 mb-4 md:mb-0">
							<div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
								<Brain className="w-6 h-6 text-white" />
							</div>
							<span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
								ContentAI
							</span>
						</div>
						<div className="text-gray-500 text-sm">
							© 2024 ContentAI. Revolutionizing content creation.
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
