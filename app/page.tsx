"use client";

import { useEffect } from "react";
import Navigation from "@/components/pages/Navigation";
import { useDataContext } from "@/app/context/data-context";
import FeatureSection from "@/components/pages/FeatureSection";
import Cta from "@/components/pages/Cta";
import Footer from "@/components/pages/Footer";
import HeroSection from "@/components/pages/HeroSection";
import { ClientOnly } from "@/components/client-only";
import { MouseFollower } from "@/components/mouse-follower";
import { FloatingParticles } from "@/components/floating-particles";

export default function LandingPage() {
	const { setActiveCard, setIsVisible } = useDataContext();

	useEffect(() => {
		setIsVisible(true);
		setActiveCard(0);

		// Auto-rotate cards
		const interval = setInterval(() => {
			setActiveCard((prev) => (prev + 1) % 6);
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, [setActiveCard, setIsVisible]);

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

			<ClientOnly>
				<MouseFollower />
			</ClientOnly>

			<ClientOnly>
				<FloatingParticles />
			</ClientOnly>

			{/* Navigation */}
			<Navigation />

			{/* Hero Section */}
			<HeroSection />

			{/* Features Section */}
			<FeatureSection />

			{/* Unique CTA Section */}
			<Cta />

			{/* Footer */}
			<Footer />

			{/* Styles */}
			<style jsx>{`
				@keyframes grid-move {
					0% {
						transform: translate(0, 0);
					}
					100% {
						transform: translate(50px, 50px);
					}
				}
			`}</style>
		</div>
	);
}
