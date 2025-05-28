import { Brain } from "lucide-react";
import React from "react";

const Footer = () => {
	return (
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
						© {new Date().getFullYear()} ContentAI. Revolutionizing content
						creation.
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
