"use client";

import { useState, useEffect } from "react";
import { getContentList } from "@/lib/database";

export type DashboardMetrics = {
	contentGenerated: number;
	wordsWritten: number;
	timeSaved: number;
	successRate: number;
	isLoading: boolean;
	error: string | null;
};

export function useDashboardMetrics(): DashboardMetrics {
	const [metrics, setMetrics] = useState<DashboardMetrics>({
		contentGenerated: 0,
		wordsWritten: 0,
		timeSaved: 0,
		successRate: 0,
		isLoading: true,
		error: null,
	});

	useEffect(() => {
		const fetchMetrics = async () => {
			try {
				// Fetch all user content to calculate metrics
				const { data: contentList, error } = await getContentList(1000, 0); // Get all content

				if (error) {
					throw new Error(error);
				}

				if (contentList) {
					const contentGenerated = contentList.length;

					// Calculate total words written
					const wordsWritten = contentList.reduce((total, item) => {
						const wordCount = item.content
							.split(/\s+/)
							.filter((word) => word.length > 0).length;
						return total + wordCount;
					}, 0);

					// Estimate time saved (assuming 500 words per hour for manual writing)
					const timeSaved = Math.round((wordsWritten / 500) * 60); // in minutes

					// Calculate success rate (for now, assume 94% - in real app, track failed generations)
					const successRate = contentGenerated > 0 ? 94 : 0;

					setMetrics({
						contentGenerated,
						wordsWritten,
						timeSaved,
						successRate,
						isLoading: false,
						error: null,
					});
				} else {
					setMetrics((prev) => ({ ...prev, isLoading: false }));
				}
			} catch (error) {
				console.error("Error fetching dashboard metrics:", error);
				setMetrics((prev) => ({
					...prev,
					isLoading: false,
					error:
						error instanceof Error ? error.message : "Failed to load metrics",
				}));
			}
		};

		fetchMetrics();
	}, []);

	return metrics;
}
