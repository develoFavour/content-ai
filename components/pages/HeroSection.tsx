"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	BookOpenText,
	Brain,
	Cpu,
	Database,
	Globe,
	Layers,
	Play,
	Sparkles,
	Target,
} from "lucide-react";
import Link from "next/link";
import { useDataContext } from "@/app/context/data-context";
import { ClientOnly } from "@/components/client-only";

// Predefined static values instead of random ones
const CONTENT_TYPES = [
	{
		icon: <BookOpenText />,
		title: "Blog Posts",
		desc: "SEO-optimized articles",
		color: "from-emerald-400 to-teal-600",
		angle: 0,
		delay: 0,
	},
	{
		icon: <Layers />,
		title: "Social Media",
		desc: "Viral-ready content",
		color: "from-blue-400 to-indigo-600",
		angle: 60,
		delay: 0.5,
	},
	{
		icon: <Globe />,
		title: "Web Copy",
		desc: "Converting landing pages",
		color: "from-violet-400 to-purple-600",
		angle: 120,
		delay: 1,
	},
	{
		icon: <Target />,
		title: "Ad Campaigns",
		desc: "High-converting ads",
		color: "from-pink-400 to-rose-600",
		angle: 180,
		delay: 1.5,
	},
	{
		icon: <Cpu />,
		title: "Email Sequences",
		desc: "Automated nurturing",
		color: "from-orange-400 to-red-600",
		angle: 240,
		delay: 2,
	},
	{
		icon: <Database />,
		title: "Product Descriptions",
		desc: "Sales-driven copy",
		color: "from-cyan-400 to-blue-600",
		angle: 300,
		delay: 2.5,
	},
];

function OrbitingCards() {
	const { activeCard } = useDataContext();

	return (
		<div className="relative w-full h-[600px]">
			{/* Central Hub */}
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/50 z-10">
				<Brain className="w-12 h-12 text-white animate-pulse" />
			</div>

			{/* Orbiting Content Cards */}
			{CONTENT_TYPES.map((content, index) => {
				const angle = content.angle * (Math.PI / 180);
				const radius = 200;
				const x = Math.cos(angle) * radius;
				const y = Math.sin(angle) * radius;
				const isActive = activeCard === index;

				return (
					<Card
						key={index}
						className={`absolute w-48 h-32 transition-all duration-500 ${
							isActive
								? "bg-gradient-to-br from-gray-800 to-gray-900 border-emerald-500/50 shadow-2xl shadow-emerald-500/25 scale-110"
								: "bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-gray-700"
						}`}
						style={{
							left: `calc(50% + ${x}px - 96px)`,
							top: `calc(50% + ${y}px - 64px)`,
							transform: `rotate(${isActive ? "0deg" : "3deg"})`,
						}}
					>
						<CardContent className="p-4 h-full flex flex-col justify-between">
							<div
								className={`w-10 h-10 rounded-lg bg-gradient-to-r flex items-center justify-center mb-2`}
							>
								<div className="w-5 h-5 text-white">{content.icon}</div>
							</div>
							<div>
								<h3 className="font-bold text-white text-sm mb-1">
									{content.title}
								</h3>
								<p className="text-xs text-gray-400">{content.desc}</p>
							</div>
						</CardContent>
					</Card>
				);
			})}

			{/* Connecting Lines */}
			<svg className="absolute inset-0 w-full h-full pointer-events-none">
				{CONTENT_TYPES.map((content, index) => {
					const angle = content.angle * (Math.PI / 180);
					const radius = 200;
					const x1 = 50 + Math.cos(angle) * 16;
					const y1 = 50 + Math.sin(angle) * 16;
					const x2 = 50 + Math.cos(angle) * (radius / 6);
					const y2 = 50 + Math.sin(angle) * (radius / 6);

					return (
						<line
							key={index}
							x1={`${x1}%`}
							y1={`${y1}%`}
							x2={`${x2}%`}
							y2={`${y2}%`}
							stroke={activeCard === index ? "#10b981" : "#374151"}
							strokeWidth="2"
							className="transition-all duration-500"
							opacity={activeCard === index ? "0.8" : "0.3"}
						/>
					);
				})}
			</svg>

			{/* Floating Metrics */}
			<div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-xl rounded-lg p-3 border border-gray-800">
				<div className="text-xs text-gray-400 mb-1">Generation Speed</div>
				<div className="text-lg font-bold text-emerald-400">2.3s</div>
			</div>

			<div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-xl rounded-lg p-3 border border-gray-800">
				<div className="text-xs text-gray-400 mb-1">Quality Score</div>
				<div className="text-lg font-bold text-blue-400">99.2%</div>
			</div>
		</div>
	);
}

export default function HeroSection() {
	const { isVisible } = useDataContext();

	return (
		<section className="relative z-10 px-6 lg:px-12 pt-12 pb-20">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div
						className={`space-y-8 transition-all duration-1000 ${
							isVisible
								? "translate-x-0 opacity-100"
								: "-translate-x-20 opacity-0"
						}`}
					>
						<Badge className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 text-emerald-300 border border-emerald-500/20 w-fit px-4 py-2">
							<Sparkles className="w-4 h-4 mr-2" />
							Next-Gen AI Content Engine
						</Badge>
						<h1 className="text-4xl lg:text-8xl font-black">
							<span className="text-white pr-4">Create</span>
							{/* <br /> */}
							<span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
								Quality
							</span>
							<br />
							<span className="text-white">Content</span>
						</h1>

						<p className="text-xl text-gray-400 leading-relaxed max-w-lg">
							Harness the power of advanced AI to generate content that
							converts, engages, and dominates your niche. From viral social
							posts to high-converting sales copy.
						</p>

						<div className="flex flex-col sm:flex-row gap-6">
							<Link href="/signup">
								<Button
									size="lg"
									className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white w-full border-0 px-10 py-7 text-lg font-semibold group shadow-2xl shadow-emerald-500/25"
								>
									Launch Your Empire
									<ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</Button>
							</Link>
							<Link href="/signin">
								<Button
									size="lg"
									variant="outline"
									className="border-gray-700 bg-black w-full text-gray-300 hover:bg-gray-800 hover:text-white px-10 py-7 text-lg font-semibold group"
								>
									<Play className="mr-3 w-5 h-5" />
									See The Magic
								</Button>
							</Link>
						</div>

						<div className="grid grid-cols-3 gap-8 pt-8">
							<div className="text-center">
								<div className="text-3xl font-bold text-emerald-400">50K+</div>
								<div className="text-sm text-gray-500">Content Pieces</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-blue-400">98.7%</div>
								<div className="text-sm text-gray-500">Success Rate</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-violet-400">24/7</div>
								<div className="text-sm text-gray-500">AI Power</div>
							</div>
						</div>
					</div>

					{/* Enhanced Interactive Content Showcase */}
					<div
						className={`relative transition-all duration-1000 delay-300 ${
							isVisible
								? "translate-x-0 opacity-100"
								: "translate-x-20 opacity-0"
						}`}
					>
						<ClientOnly>
							<OrbitingCards />
						</ClientOnly>
					</div>
				</div>
			</div>
		</section>
	);
}
