"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Brain } from "lucide-react";

import Navigation from "@/components/pages/Navigation";
import { useDataContext } from "@/app/context/data-context";
import FeatureSection from "@/components/pages/FeatureSection";
import Cta from "@/components/pages/Cta";

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
			<FeatureSection />

			{/* Unique CTA Section - Completely Different Design */}
			<Cta />
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
