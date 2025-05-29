"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	FileText,
	Trash2,
	Edit,
	Eye,
	Search,
	Download,
	Copy,
	Calendar,
	MoreHorizontal,
	Plus,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import {
	getContentList,
	deleteContent,
	type ContentItem,
} from "@/lib/database";
import Link from "next/link";

export default function MyContentPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [contentItems, setContentItems] = useState<ContentItem[]>([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filterType, setFilterType] = useState<string>("all");
	const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title">("newest");

	useEffect(() => {
		fetchContent();
	}, []);

	const fetchContent = async () => {
		setIsLoading(true);
		try {
			const { data, error } = await getContentList(100, 0);

			if (error) {
				throw new Error(error);
			}

			setContentItems(data || []);
		} catch (error) {
			console.error("Error fetching content:", error);
			toast.error("Failed to load your content");
		} finally {
			setIsLoading(false);
		}
	};

	const handleDelete = async (id: string) => {
		try {
			const { error } = await deleteContent(id);
			if (error) {
				throw new Error(error);
			}

			toast.success("Content deleted successfully");
			setContentItems((prev) => prev.filter((item) => item.id !== id));
		} catch (error) {
			console.error("Error deleting content:", error);
			toast.error("Failed to delete content");
		}
	};

	const copyToClipboard = async (content: string) => {
		try {
			await navigator.clipboard.writeText(content);
			toast.success("Content copied to clipboard! 📋");
		} catch (error) {
			console.log(error);
			toast.error("Failed to copy content");
		}
	};

	const exportContent = (item: ContentItem) => {
		const blob = new Blob([`${item.title || "Untitled"}\n\n${item.content}`], {
			type: "text/plain",
		});
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${(item.title || "content")
			.replace(/[^a-z0-9]/gi, "_")
			.toLowerCase()}.txt`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
		toast.success("Content exported! 📄");
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	const getContentTypeIcon = (type: string) => {
		switch (type) {
			case "blog":
				return <FileText className="h-4 w-4" />;
			case "social":
				return <Eye className="h-4 w-4" />;
			case "email":
				return <Edit className="h-4 w-4" />;
			case "ad":
				return <MoreHorizontal className="h-4 w-4" />;
			default:
				return <FileText className="h-4 w-4" />;
		}
	};

	const getContentTypeColor = (type: string) => {
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

	// Filter and sort content
	const filteredContent = contentItems
		.filter((item) => {
			const matchesSearch =
				item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
				item.content.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesFilter =
				filterType === "all" || item.content_type === filterType;
			return matchesSearch && matchesFilter;
		})
		.sort((a, b) => {
			switch (sortBy) {
				case "newest":
					return (
						new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
					);
				case "oldest":
					return (
						new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
					);
				case "title":
					return (a.title || "").localeCompare(b.title || "");
				default:
					return 0;
			}
		});

	return (
		<div className="flex-1 overflow-auto">
			<div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto">
				{/* Header */}
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
					<div>
						<h2 className="text-2xl sm:text-3xl font-bold text-white">
							My Content
						</h2>
						<p className="text-gray-400 text-sm">
							{contentItems.length}{" "}
							{contentItems.length === 1 ? "piece" : "pieces"} of content
							created
						</p>
					</div>
					<Link href="/dashboard">
						<Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
							<Plus className="h-4 w-4 mr-2" />
							Create New Content
						</Button>
					</Link>
				</div>

				{/* Filters and Search */}
				<Card className="bg-white/5 border-white/10">
					<CardContent className="p-4">
						<div className="flex flex-col sm:flex-row gap-4">
							{/* Search */}
							<div className="flex-1 relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
								<Input
									placeholder="Search your content..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="pl-10 bg-white/5 border-white/20 text-white"
								/>
							</div>

							{/* Filter by type */}
							<select
								value={filterType}
								onChange={(e) => setFilterType(e.target.value)}
								className="px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white text-sm"
							>
								<option value="all" className="bg-gray-900">
									All Types
								</option>
								<option value="blog" className="bg-gray-900">
									Blog Posts
								</option>
								<option value="social" className="bg-gray-900">
									Social Media
								</option>
								<option value="email" className="bg-gray-900">
									Emails
								</option>
								<option value="ad" className="bg-gray-900">
									Advertisements
								</option>
							</select>

							{/* Sort */}
							<select
								value={sortBy}
								onChange={(e) =>
									setSortBy(e.target.value as "newest" | "oldest" | "title")
								}
								className="px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white text-sm"
							>
								<option value="newest" className="bg-gray-900">
									Newest First
								</option>
								<option value="oldest" className="bg-gray-900">
									Oldest First
								</option>
								<option value="title" className="bg-gray-900">
									Title A-Z
								</option>
							</select>
						</div>
					</CardContent>
				</Card>

				{/* Content Grid */}
				{isLoading ? (
					<div className="flex justify-center items-center h-64">
						<div className="animate-spin w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full"></div>
					</div>
				) : filteredContent.length === 0 ? (
					<Card className="bg-white/5 border-white/10">
						<CardContent className="flex flex-col items-center justify-center p-12 text-center">
							<FileText className="h-16 w-16 text-gray-500 mb-4" />
							<h3 className="text-xl font-medium mb-2 text-white">
								{searchTerm || filterType !== "all"
									? "No matching content found"
									: "No content yet"}
							</h3>
							<p className="text-gray-400 mb-6 max-w-md">
								{searchTerm || filterType !== "all"
									? "Try adjusting your search or filter criteria."
									: "You haven't created any content yet. Get started by generating your first piece of content."}
							</p>
							<Link href="/dashboard">
								<Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
									<Plus className="h-4 w-4 mr-2" />
									Create Your First Content
								</Button>
							</Link>
						</CardContent>
					</Card>
				) : (
					<div className="grid gap-4">
						{filteredContent.map((item) => (
							<Card
								key={item.id}
								className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
							>
								<CardContent className="p-4">
									<div className="flex justify-between items-start gap-4">
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2 mb-2">
												<Badge
													className={`bg-gradient-to-r ${getContentTypeColor(
														item.content_type
													)} text-white border-0 text-xs`}
												>
													<span className="flex items-center gap-1">
														{getContentTypeIcon(item.content_type)}
														{item.content_type.charAt(0).toUpperCase() +
															item.content_type.slice(1)}
													</span>
												</Badge>
												<div className="flex items-center text-gray-400 text-xs">
													<Calendar className="h-3 w-3 mr-1" />
													{formatDate(item.created_at)}
												</div>
											</div>
											<h3 className="text-lg font-medium text-white mb-1 truncate">
												{item.title || "Untitled"}
											</h3>
											<p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
												{item.content.substring(0, 200)}
												{item.content.length > 200 && "..."}
											</p>
											<div className="mt-2 text-xs text-gray-500">
												{item.content.split(/\s+/).length} words
											</div>
										</div>

										{/* Actions */}
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button
													variant="ghost"
													size="icon"
													className="h-8 w-8 text-gray-400 hover:text-white hover:bg-white/10"
												>
													<MoreHorizontal className="h-4 w-4" />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent
												align="end"
												className="bg-gray-900 border-gray-700"
											>
												<DropdownMenuItem
													onClick={() => copyToClipboard(item.content)}
													className="text-gray-300 hover:text-white hover:bg-gray-800"
												>
													<Copy className="h-4 w-4 mr-2" />
													Copy Content
												</DropdownMenuItem>
												<DropdownMenuItem
													onClick={() => exportContent(item)}
													className="text-gray-300 hover:text-white hover:bg-gray-800"
												>
													<Download className="h-4 w-4 mr-2" />
													Export
												</DropdownMenuItem>
												<DropdownMenuItem
													onClick={() => handleDelete(item.id)}
													className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
												>
													<Trash2 className="h-4 w-4 mr-2" />
													Delete
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
