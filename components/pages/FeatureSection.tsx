import React from "react";
import { Card, CardContent } from "../ui/card";
import { features } from "@/constants/contents";

const FeatureSection = () => {
	return (
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
						Experience content creation that breaks all boundaries and redefines
						what&apos;s possible
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
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
	);
};

export default FeatureSection;
