"use client";

import { useState, useEffect } from "react";

export function MouseFollower() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div
			className="absolute w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-violet-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-500"
			style={{
				left: mousePosition.x - 300,
				top: mousePosition.y - 300,
			}}
		/>
	);
}
