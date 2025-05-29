"use client";

import { useEffect, useState } from "react";

export function FloatingParticles() {
	const [particles, setParticles] = useState<
		Array<{ left: string; top: string; delay: string }>
	>([]);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		// Ensure the component only renders on the client
		setIsClient(true);

		// Generate particles only on the client side to avoid hydration mismatch
		const newParticles = Array.from({ length: 30 }, () => ({
			left: `${Math.random() * 100}%`,
			top: `${Math.random() * 100}%`,
			delay: `${Math.random() * 3}s`,
		}));
		setParticles(newParticles);
	}, []);

	if (!isClient) return null; // Prevent rendering on the server

	return (
		<div className="absolute inset-0">
			{particles.map((particle, i) => (
				<div
					key={i}
					className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
					style={{
						left: particle.left,
						top: particle.top,
						animationDelay: particle.delay,
					}}
				/>
			))}
		</div>
	);
}
