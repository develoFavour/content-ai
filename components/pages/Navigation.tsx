import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Brain } from "lucide-react";

const Navigation = () => {
	return (
		<nav className="relative z-50 flex items-center justify-between p-6 lg:px-12">
			<div className="flex items-center space-x-3">
				<div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
					<Brain className="w-6 h-6 text-white" />
				</div>
				<span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
					ContentAI
				</span>
			</div>

			<div className="flex items-center space-x-4">
				<Link href="/signin">
					<Button
						variant="ghost"
						className="text-gray-300 hover:text-white hover:bg-white/5"
					>
						Sign In
					</Button>
				</Link>
				<Link href="/signup">
					<Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-emerald-500/25">
						Get Started
					</Button>
				</Link>
			</div>
		</nav>
	);
};

export default Navigation;
