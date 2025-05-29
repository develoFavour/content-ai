"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Rocket } from "lucide-react";
import Link from "next/link";
import { ClientOnly } from "@/components/client-only";

// Predefined animation values instead of random ones
const GRID_ANIMATIONS = Array.from({ length: 64 }, (_, i) => ({
	duration: 2 + (i % 3), // 2s, 3s, or 4s
	delay: (i % 20) * 0.1, // 0s to 2s delay
}));

function AnimatedGrid() {
	return (
		<div className="absolute inset-0 opacity-10">
			<div className="grid grid-cols-8 gap-4 h-full">
				{GRID_ANIMATIONS.map((animation, i) => (
					<div
						key={i}
						className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg"
						style={{
							animation: `pulse ${animation.duration}s ease-in-out infinite`,
							animationDelay: `${animation.delay}s`,
						}}
					/>
				))}
			</div>
		</div>
	);
}

export default function Cta() {
	return (
		<section className="relative z-10 px-6 lg:px-12 py-32">
			<div className="max-w-7xl mx-auto">
				<div className="relative">
					{/* Animated Grid Background */}
					<ClientOnly>
						<AnimatedGrid />
					</ClientOnly>

					{/* Main CTA Content */}
					<div className="relative bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl border border-gray-800 overflow-hidden">
						{/* Animated Border */}
						<div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 rounded-3xl opacity-20 animate-pulse" />

						<div className="relative p-16 text-center">
							{/* Static Floating Elements */}
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
									Be among the first 1,000 creators to access the most powerful
									AI content engine ever built
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
	);
}
