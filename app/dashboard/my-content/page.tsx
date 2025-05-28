"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Trash2, Edit, Eye } from "lucide-react";
import { getContentList, deleteContent } from "@/lib/database";
import { format } from "date-fns";
import Link from "next/link";

export default function MyContentPage() {
	const [contentItems, setContentItems] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [totalCount, setTotalCount] = useState(0);

	useEffect(() => {
		loadContent();
	}, []);

	const loadContent = async () => {
		setIsLoading(true);
		try {
			const { data, count, error } = await getContentList(20, 0);

			if (error) {
				console.error("Error loading content:", error);
				return;
			}

			if (data) {
				setContentItems(data);
				setTotalCount(count || 0);
			}
		} catch (error) {
			console.error("Error loading content:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleDelete = async (id: string) => {
		if (!confirm("Are you sure you want to delete this content?")) return;

		try {
			const { error } = await deleteContent(id);

			if (error) {
				console.error("Error deleting content:", error);
				return;
			}

			// Refresh the content list
			loadContent();
		} catch (error) {
			console.error("Error deleting content:", error);
		}
	};

	const getContentTypeColor = (type: string) => {
		switch (type) {
			case "blog":
				return "from-emerald-500/20 to-emerald-500/20 text-emerald-300 border-emerald-500/30";
			case "social":
				return "from-blue-500/20 to-blue-500/20 text-blue-300 border-blue-500/30";
			case "email":
				return "from-violet-500/20 to-violet-500/20 text-violet-300 border-violet-500/30";
			case "ad":
				return "from-amber-500/20 to-amber-500/20 text-amber-300 border-amber-500/30";
			default:
				return "from-gray-500/20 to-gray-500/20 text-gray-300 border-gray-500/30";
		}
	};

	return (
		<div className="p-6">
			<div className="max-w-6xl mx-auto">
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold">My Content</h1>
					<Link href="/dashboard">
						<Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
							Create New Content
						</Button>
					</Link>
				</div>

				{isLoading ? (
					<div className="text-center py-12">
						<div className="animate-spin w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4"></div>
						<p className="text-gray-400">Loading your content...</p>
					</div>
				) : contentItems.length === 0 ? (
					<Card className="bg-white/5 border-white/10 backdrop-blur-xl">
						<CardContent className="p-12 text-center">
							<FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
							<h3 className="text-xl font-bold mb-2">No Content Yet</h3>
							<p className="text-gray-400 mb-6">
								You haven&apos;t created any content yet. Start generating
								amazing content now!
							</p>
							<Link href="/dashboard">
								<Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
									Create Your First Content
								</Button>
							</Link>
						</CardContent>
					</Card>
				) : (
					<div className="space-y-4">
						<p className="text-gray-400">
							Showing {contentItems.length} of {totalCount} items
						</p>

						{contentItems.map((item) => (
							<Card
								key={item.id}
								className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors"
							>
								<CardContent className="p-6">
									<div className="flex justify-between items-start">
										<div>
											<div className="flex items-center gap-3 mb-2">
												<Badge
													className={`bg-gradient-to-r ${getContentTypeColor(
														item.content_type
													)}`}
												>
													{item.content_type.charAt(0).toUpperCase() +
														item.content_type.slice(1)}
												</Badge>
												<span className="text-gray-400 text-sm">
													{format(new Date(item.created_at), "MMM d, yyyy")}
												</span>
											</div>
											<h3 className="text-xl font-bold mb-2">
												{item.title || "Untitled Content"}
											</h3>
											<p className="text-gray-400 line-clamp-2">
												{item.content}
											</p>
										</div>
										<div className="flex gap-2">
											<Button
												size="sm"
												variant="ghost"
												className="text-gray-400 hover:text-white hover:bg-white/10"
											>
												<Eye className="h-4 w-4" />
											</Button>
											<Button
												size="sm"
												variant="ghost"
												className="text-gray-400 hover:text-white hover:bg-white/10"
											>
												<Edit className="h-4 w-4" />
											</Button>
											<Button
												size="sm"
												variant="ghost"
												className="text-gray-400 hover:text-red-400 hover:bg-red-500/10"
												onClick={() => handleDelete(item.id)}
											>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
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
