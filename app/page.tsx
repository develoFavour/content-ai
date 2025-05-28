"use client";

import { useState, useEffect } from "react";

import Navigation from "@/components/pages/Navigation";
import { useDataContext } from "@/app/context/data-context";
import FeatureSection from "@/components/pages/FeatureSection";
import Cta from "@/components/pages/Cta";
import Footer from "@/components/pages/Footer";
import HeroSection from "@/components/pages/HeroSection";

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
			{/*  Hero Section */}
			<HeroSection />
			{/*  Features Section */}
			<FeatureSection />

			{/* Unique CTA Section - Completely Different Design */}
			<Cta />
			{/* Footer */}
			<Footer />
		</div>
	);
}
