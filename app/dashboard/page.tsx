"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Wand2,
	FileText,
	Share2,
	Mail,
	MessageSquare,
	Sparkles,
	Copy,
	Download,
	Save,
	RefreshCw,
	Zap,
	TrendingUp,
	Clock,
	Target,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { saveContent } from "@/lib/database";
import { useDashboardMetrics } from "@/hooks/use-dashboard-metric";
import ReactMarkdown from "react-markdown";
import { useAuth } from "../context/auth-context";

export default function Dashboard() {
	const { user } = useAuth();
	const [isGenerating, setIsGenerating] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const [generatedContent, setGeneratedContent] = useState("");
	const [prompt, setPrompt] = useState("");
	const [contentType, setContentType] = useState<
		"blog" | "social" | "email" | "ad"
	>("blog");
	const [title, setTitle] = useState("");
	const [tone, setTone] = useState("professional");
	const [language, setLanguage] = useState("english");
	const router = useRouter();

	// Get real metrics
	const metrics = useDashboardMetrics();

	const contentTypes = [
		{
			id: "blog" as const,
			label: "Blog Post",
			icon: FileText,
			color: "from-emerald-500 to-teal-500",
		},
		{
			id: "social" as const,
			label: "Social Media",
			icon: Share2,
			color: "from-blue-500 to-cyan-500",
		},
		{
			id: "email" as const,
			label: "Email",
			icon: Mail,
			color: "from-violet-500 to-purple-500",
		},
		{
			id: "ad" as const,
			label: "Advertisement",
			icon: MessageSquare,
			color: "from-orange-500 to-red-500",
		},
	];

	const tones = [
		{ id: "professional", label: "Professional", emoji: "💼" },
		{ id: "casual", label: "Casual", emoji: "😊" },
		{ id: "funny", label: "Funny", emoji: "😄" },
		{ id: "persuasive", label: "Persuasive", emoji: "🎯" },
	];

	const generateContent = async () => {
		if (!prompt.trim()) {
			toast.error("Please enter a prompt first");
			return;
		}

		setIsGenerating(true);

		try {
			const response = await fetch("/api/generate-content", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					prompt: prompt.trim(),
					contentType,
					tone,
					language,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Failed to generate content");
			}

			setGeneratedContent(data.content);

			// Generate a title
			const titleResponse = await fetch("/api/generate-title", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					content: data.content,
					contentType,
				}),
			});

			const titleData = await titleResponse.json();
			if (titleResponse.ok && titleData.title) {
				setTitle(titleData.title);
			} else {
				const selectedType = contentTypes.find((t) => t.id === contentType);
				setTitle(
					`${selectedType?.label}: ${prompt.slice(0, 50)}${
						prompt.length > 50 ? "..." : ""
					}`
				);
			}

			toast.success("Content generated successfully! ✨");
		} catch (error) {
			console.error("Error generating content:", error);
			toast.error(
				error instanceof Error ? error.message : "Failed to generate content"
			);
		} finally {
			setIsGenerating(false);
		}
	};

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(generatedContent);
			toast.success("Content copied to clipboard! 📋");
		} catch (error) {
			console.log(error);
			toast.error("Failed to copy content");
		}
	};

	const handleSaveContent = async () => {
		if (!generatedContent || !title) {
			toast.error("Please generate content and add a title first");
			return;
		}

		setIsSaving(true);

		try {
			const { data, error } = await saveContent({
				title: title.trim(),
				content: generatedContent,
				content_type: contentType,
				prompt: prompt.trim(),
			});
			console.log(data);
			if (error) {
				throw new Error(error);
			}

			toast.success("Content saved successfully! 💾");

			// Refresh metrics after saving
			window.location.reload();

			setTimeout(() => {
				router.push("/dashboard/my-content");
			}, 1500);
		} catch (error) {
			console.error("Error saving content:", error);
			toast.error(
				error instanceof Error ? error.message : "Failed to save content"
			);
		} finally {
			setIsSaving(false);
		}
	};

	const exportContent = () => {
		const blob = new Blob([`${title}\n\n${generatedContent}`], {
			type: "text/plain",
		});
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.txt`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
		toast.success("Content exported! 📄");
	};

	const formatNumber = (num: number) => {
		if (num >= 1000) {
			return (num / 1000).toFixed(1) + "K";
		}
		return num.toString();
	};

	const formatTime = (minutes: number) => {
		if (minutes >= 60) {
			return Math.round(minutes / 60) + "h";
		}
		return minutes + "m";
	};

	console.log("User", user);
	return (
		<div className="flex-1 overflow-auto">
			<div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto">
				{/* Header Stats - Real Metrics */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
					<Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-emerald-500/20">
						<CardContent className="p-3 sm:p-4">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-emerald-400 text-xs sm:text-sm font-medium">
										Generated
									</p>
									<p className="text-lg sm:text-2xl font-bold text-white">
										{metrics.isLoading ? "..." : metrics.contentGenerated}
									</p>
								</div>
								<Zap className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400" />
							</div>
						</CardContent>
					</Card>

					<Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
						<CardContent className="p-3 sm:p-4">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-blue-400 text-xs sm:text-sm font-medium">
										Words
									</p>
									<p className="text-lg sm:text-2xl font-bold text-white">
										{metrics.isLoading
											? "..."
											: formatNumber(metrics.wordsWritten)}
									</p>
								</div>
								<TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
							</div>
						</CardContent>
					</Card>

					<Card className="bg-gradient-to-br from-violet-500/10 to-violet-500/5 border-violet-500/20">
						<CardContent className="p-3 sm:p-4">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-violet-400 text-xs sm:text-sm font-medium">
										Time Saved
									</p>
									<p className="text-lg sm:text-2xl font-bold text-white">
										{metrics.isLoading ? "..." : formatTime(metrics.timeSaved)}
									</p>
								</div>
								<Clock className="h-6 w-6 sm:h-8 sm:w-8 text-violet-400" />
							</div>
						</CardContent>
					</Card>

					<Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
						<CardContent className="p-3 sm:p-4">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-orange-400 text-xs sm:text-sm font-medium">
										Success
									</p>
									<p className="text-lg sm:text-2xl font-bold text-white">
										{metrics.isLoading ? "..." : `${metrics.successRate}%`}
									</p>
								</div>
								<Target className="h-6 w-6 sm:h-8 sm:w-8 text-orange-400" />
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Main Content - Responsive Layout */}
				<div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
					{/* Input Section */}
					<Card className="bg-white/5 border-white/10 backdrop-blur-xl">
						<CardHeader className="pb-4">
							<CardTitle className="flex items-center gap-2 text-white text-lg sm:text-xl">
								<Sparkles className="h-5 w-5 text-emerald-400" />
								AI Content Generator
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4 sm:space-y-6">
							{/* Content Type Selection */}
							<div className="space-y-3">
								<label className="text-sm font-medium text-white">
									Content Type
								</label>
								<div className="grid grid-cols-2 gap-2">
									{contentTypes.map((type) => (
										<button
											key={type.id}
											onClick={() => setContentType(type.id)}
											className={`p-2 sm:p-3 rounded-lg border transition-all text-center ${
												contentType === type.id
													? `bg-gradient-to-r ${type.color} border-transparent text-white`
													: "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
											}`}
										>
											<type.icon className="h-4 w-4 mx-auto mb-1" />
											<span className="text-xs font-medium block">
												{type.label}
											</span>
										</button>
									))}
								</div>
							</div>

							{/* Settings */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="space-y-2">
									<label className="text-sm font-medium text-white">Tone</label>
									<select
										value={tone}
										onChange={(e) => setTone(e.target.value)}
										className="w-full p-2 rounded-lg bg-white/5 border border-white/20 text-white text-sm"
									>
										{tones.map((t) => (
											<option key={t.id} value={t.id} className="bg-gray-900">
												{t.emoji} {t.label}
											</option>
										))}
									</select>
								</div>

								<div className="space-y-2">
									<label className="text-sm font-medium text-white">
										Language
									</label>
									<select
										value={language}
										onChange={(e) => setLanguage(e.target.value)}
										className="w-full p-2 rounded-lg bg-white/5 border border-white/20 text-white text-sm"
									>
										<option value="english" className="bg-gray-900">
											🇺🇸 English
										</option>
										<option value="spanish" className="bg-gray-900">
											🇪🇸 Spanish
										</option>
										<option value="french" className="bg-gray-900">
											🇫🇷 French
										</option>
										<option value="german" className="bg-gray-900">
											🇩🇪 German
										</option>
									</select>
								</div>
							</div>

							{/* Prompt Input */}
							<div className="space-y-2">
								<label className="text-sm font-medium text-white">
									Your Prompt
								</label>
								<Textarea
									placeholder="Describe what you want to create... Be specific for better results!"
									className="min-h-[100px] sm:min-h-[120px] bg-white/5 border-white/20 text-white placeholder:text-gray-400 resize-none text-sm"
									value={prompt}
									onChange={(e) => setPrompt(e.target.value)}
									maxLength={500}
								/>
								<p className="text-xs text-gray-400">
									{prompt.length}/500 characters
								</p>
							</div>

							{/* Generate Button */}
							<Button
								onClick={generateContent}
								disabled={isGenerating || !prompt.trim()}
								className="w-full h-11 sm:h-12 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-medium text-sm sm:text-base"
							>
								{isGenerating ? (
									<>
										<RefreshCw className="h-4 w-4 mr-2 animate-spin" />
										Generating Amazing Content...
									</>
								) : (
									<>
										<Wand2 className="h-4 w-4 mr-2" />
										Generate Content
									</>
								)}
							</Button>
						</CardContent>
					</Card>

					{/* Output Section */}
					<Card className="bg-white/5 border-white/10 backdrop-blur-xl">
						<CardHeader className="pb-4">
							<CardTitle className="flex items-center justify-between text-white text-lg sm:text-xl">
								<div className="flex items-center gap-2">
									<FileText className="h-5 w-5 text-blue-400" />
									Generated Content
								</div>
								{generatedContent && (
									<Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
										Ready
									</Badge>
								)}
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							{generatedContent ? (
								<>
									{/* Title Input */}
									<div className="space-y-2">
										<label className="text-sm font-medium text-white">
											Title
										</label>
										<Input
											value={title}
											onChange={(e) => setTitle(e.target.value)}
											className="bg-white/5 border-white/20 text-white text-sm"
											placeholder="Enter a title for your content..."
										/>
									</div>

									{/* Content Display */}
									<div className="space-y-2">
										<label className="text-sm font-medium text-white">
											Content
										</label>
										<div className="bg-white/5 border border-white/20 rounded-lg p-3 sm:p-4 max-h-[300px] sm:max-h-[400px] overflow-y-auto">
											<div className="prose prose-invert text-gray-200">
												<ReactMarkdown>{generatedContent}</ReactMarkdown>
											</div>
										</div>
									</div>

									{/* Action Buttons */}
									<div className="flex flex-col sm:flex-row gap-2">
										<Button
											onClick={copyToClipboard}
											variant="outline"
											className="flex-1 border-white/20 bg-black text-white hover:bg-white/10 text-sm"
										>
											<Copy className="h-4 w-4 mr-2" />
											Copy
										</Button>
										<Button
											onClick={handleSaveContent}
											disabled={isSaving}
											className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-sm"
										>
											{isSaving ? (
												<>
													<RefreshCw className="h-4 w-4 mr-2 animate-spin" />
													Saving...
												</>
											) : (
												<>
													<Save className="h-4 w-4 mr-2" />
													Save
												</>
											)}
										</Button>
										<Button
											onClick={exportContent}
											variant="outline"
											className="border-white/20 bg-black text-white hover:bg-white/10 text-sm"
										>
											<Download className="h-4 w-4" />
										</Button>
									</div>
								</>
							) : (
								<div className="flex flex-col items-center justify-center h-[300px] sm:h-[400px] text-center space-y-4">
									<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
										<Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400" />
									</div>
									<div>
										<h3 className="text-base sm:text-lg font-medium text-white mb-2">
											Ready to Create Magic?
										</h3>
										<p className="text-gray-400 text-sm max-w-xs">
											Enter your prompt and let our AI generate amazing content
											for you
										</p>
									</div>
								</div>
							)}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
