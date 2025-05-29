"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	FileText,
	Share2,
	Mail,
	MessageSquare,
	ArrowRight,
	Star,
	Clock,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Template = {
	id: string;
	title: string;
	description: string;
	type: "blog" | "social" | "email" | "ad";
	prompt: string;
	difficulty: "beginner" | "intermediate" | "advanced";
	timeToComplete: string;
	popular?: boolean;
	new?: boolean;
};

export default function TemplatesPage() {
	const router = useRouter();
	const [activeCategory, setActiveCategory] = useState<string>("all");

	const templates: Template[] = [
		{
			id: "blog-how-to",
			title: "How-To Guide",
			description: "Step-by-step instructions to solve a specific problem",
			type: "blog",
			prompt:
				"Create a comprehensive how-to guide about [topic] with step-by-step instructions, tips, and common mistakes to avoid.",
			difficulty: "beginner",
			timeToComplete: "5-10 min",
			popular: true,
		},
		{
			id: "blog-listicle",
			title: "Listicle",
			description: "Engaging list-based article with valuable insights",
			type: "blog",
			prompt:
				"Create a listicle of [number] [topic] with detailed explanations and practical examples for each point.",
			difficulty: "beginner",
			timeToComplete: "5-10 min",
		},
		{
			id: "blog-comparison",
			title: "Comparison Article",
			description: "In-depth comparison between two or more options",
			type: "blog",
			prompt:
				"Write a detailed comparison between [option 1] and [option 2], covering pros, cons, features, pricing, and ideal use cases.",
			difficulty: "intermediate",
			timeToComplete: "10-15 min",
		},
		{
			id: "social-announcement",
			title: "Product Announcement",
			description: "Exciting announcement for social media",
			type: "social",
			prompt:
				"Create an engaging social media announcement for [product/feature] that highlights key benefits and includes a strong call-to-action.",
			difficulty: "beginner",
			timeToComplete: "3-5 min",
			new: true,
		},
		{
			id: "social-engagement",
			title: "Engagement Post",
			description: "Post designed to maximize audience interaction",
			type: "social",
			prompt:
				"Create an engaging social media post about [topic] that encourages audience participation through questions, polls, or challenges.",
			difficulty: "beginner",
			timeToComplete: "3-5 min",
		},
		{
			id: "email-welcome",
			title: "Welcome Email",
			description: "First impression email for new subscribers",
			type: "email",
			prompt:
				"Write a warm welcome email for new [product/service] subscribers that introduces your brand, sets expectations, and includes a clear next step.",
			difficulty: "intermediate",
			timeToComplete: "5-10 min",
			popular: true,
		},
		{
			id: "email-promo",
			title: "Promotional Email",
			description: "Compelling email to promote offers",
			type: "email",
			prompt:
				"Create a promotional email for [product/service/offer] that creates urgency, highlights key benefits, and includes a strong call-to-action.",
			difficulty: "intermediate",
			timeToComplete: "5-10 min",
		},
		{
			id: "ad-display",
			title: "Display Ad",
			description: "Visual ad for websites and social media",
			type: "ad",
			prompt:
				"Write copy for a display ad promoting [product/service] with a compelling headline, engaging description, and strong call-to-action.",
			difficulty: "advanced",
			timeToComplete: "5-10 min",
			new: true,
		},
	];

	const getTypeIcon = (type: string) => {
		switch (type) {
			case "blog":
				return <FileText className="h-5 w-5" />;
			case "social":
				return <Share2 className="h-5 w-5" />;
			case "email":
				return <Mail className="h-5 w-5" />;
			case "ad":
				return <MessageSquare className="h-5 w-5" />;
			default:
				return <FileText className="h-5 w-5" />;
		}
	};

	const getTypeColor = (type: string) => {
		switch (type) {
			case "blog":
				return "from-emerald-500 to-teal-500";
			case "social":
				return "from-blue-500 to-cyan-500";
			case "email":
				return "from-violet-500 to-purple-500";
			case "ad":
				return "from-orange-500 to-red-500";
			default:
				return "from-gray-500 to-gray-600";
		}
	};

	const getDifficultyStars = (difficulty: string) => {
		switch (difficulty) {
			case "beginner":
				return (
					<div className="flex items-center text-yellow-400">
						<Star className="h-3 w-3 fill-current" />
						<Star className="h-3 w-3 text-gray-500" />
						<Star className="h-3 w-3 text-gray-500" />
					</div>
				);
			case "intermediate":
				return (
					<div className="flex items-center text-yellow-400">
						<Star className="h-3 w-3 fill-current" />
						<Star className="h-3 w-3 fill-current" />
						<Star className="h-3 w-3 text-gray-500" />
					</div>
				);
			case "advanced":
				return (
					<div className="flex items-center text-yellow-400">
						<Star className="h-3 w-3 fill-current" />
						<Star className="h-3 w-3 fill-current" />
						<Star className="h-3 w-3 fill-current" />
					</div>
				);
			default:
				return null;
		}
	};

	const filteredTemplates = templates.filter(
		(template) => activeCategory === "all" || template.type === activeCategory
	);

	const handleTemplateSelect = (template: Template) => {
		// Navigate to dashboard with template data
		router.push(
			`/dashboard?template=${encodeURIComponent(
				template.id
			)}&prompt=${encodeURIComponent(
				template.prompt
			)}&type=${encodeURIComponent(template.type)}`
		);
		toast.success(`Template "${template.title}" loaded!`);
	};

	return (
		<div className="flex-1 overflow-auto">
			<div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto">
				{/* Header */}
				<div>
					<h2 className="text-2xl sm:text-3xl font-bold text-white">
						Content Templates
					</h2>
					<p className="text-gray-400 text-sm mt-1">
						Ready-to-use templates to jumpstart your content creation process
					</p>
				</div>

				{/* Category Tabs */}
				<div className="flex flex-wrap gap-2">
					<Button
						variant={activeCategory === "all" ? "default" : "outline"}
						onClick={() => setActiveCategory("all")}
						className={
							activeCategory === "all"
								? "bg-white/10 hover:bg-white/20 text-white"
								: "border-white/20 text-gray-400 hover:text-white hover:bg-white/10"
						}
					>
						All Templates
					</Button>
					<Button
						variant={activeCategory === "blog" ? "default" : "outline"}
						onClick={() => setActiveCategory("blog")}
						className={
							activeCategory === "blog"
								? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
								: "border-white/20 text-gray-400 hover:text-white hover:bg-white/10"
						}
					>
						<FileText className="h-4 w-4 mr-2" />
						Blog Posts
					</Button>
					<Button
						variant={activeCategory === "social" ? "default" : "outline"}
						onClick={() => setActiveCategory("social")}
						className={
							activeCategory === "social"
								? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
								: "border-white/20 text-gray-400 hover:text-white hover:bg-white/10"
						}
					>
						<Share2 className="h-4 w-4 mr-2" />
						Social Media
					</Button>
					<Button
						variant={activeCategory === "email" ? "default" : "outline"}
						onClick={() => setActiveCategory("email")}
						className={
							activeCategory === "email"
								? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
								: "border-white/20 text-gray-400 hover:text-white hover:bg-white/10"
						}
					>
						<Mail className="h-4 w-4 mr-2" />
						Emails
					</Button>
					<Button
						variant={activeCategory === "ad" ? "default" : "outline"}
						onClick={() => setActiveCategory("ad")}
						className={
							activeCategory === "ad"
								? "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
								: "border-white/20 text-gray-400 hover:text-white hover:bg-white/10"
						}
					>
						<MessageSquare className="h-4 w-4 mr-2" />
						Advertisements
					</Button>
				</div>

				{/* Templates Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{filteredTemplates.map((template) => (
						<Card
							key={template.id}
							className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors overflow-hidden"
						>
							<div
								className={`h-2 w-full bg-gradient-to-r ${getTypeColor(
									template.type
								)}`}
								aria-hidden="true"
							></div>
							<CardHeader className="pb-2">
								<div className="flex justify-between items-start">
									<div
										className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(
											template.type
										)} bg-opacity-20`}
									>
										{getTypeIcon(template.type)}
									</div>
									<div className="flex gap-2">
										{template.new && (
											<Badge className="bg-blue-500 hover:bg-blue-600 text-white border-0">
												New
											</Badge>
										)}
										{template.popular && (
											<Badge className="bg-amber-500 hover:bg-amber-600 text-white border-0">
												Popular
											</Badge>
										)}
									</div>
								</div>
								<CardTitle className="text-lg font-semibold mt-2 text-white">
									{template.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-400 text-sm">{template.description}</p>

								<div className="flex justify-between items-center text-xs text-gray-400">
									<div className="flex items-center gap-1">
										<Clock className="h-3 w-3" />
										{template.timeToComplete}
									</div>
									<div className="flex items-center gap-1">
										Difficulty: {getDifficultyStars(template.difficulty)}
									</div>
								</div>

								<Button
									onClick={() => handleTemplateSelect(template)}
									className={`w-full bg-gradient-to-r ${getTypeColor(
										template.type
									)} text-white`}
								>
									Use Template
									<ArrowRight className="h-4 w-4 ml-2" />
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
