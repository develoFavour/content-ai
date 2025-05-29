import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { type NextRequest, NextResponse } from "next/server";

type RequestBody = {
	content: string;
	contentType: string;
};

type ResponseBody = {
	title?: string;
	error?: string;
};

export async function POST(
	req: NextRequest
): Promise<NextResponse<ResponseBody>> {
	try {
		const body: RequestBody = await req.json();
		const { content, contentType } = body;

		if (!content || !contentType) {
			return NextResponse.json(
				{ error: "Missing required fields: content and contentType" },
				{ status: 400 }
			);
		}

		const { text } = await generateText({
			model: openai("gpt-4-turbo"),
			system:
				"You are a title generation expert. Create a concise, engaging title for the provided content.",
			prompt: `Generate a compelling title for this ${contentType} content: ${content.substring(
				0,
				500
			)}...`,
			maxTokens: 50,
		});

		return NextResponse.json({ title: text.trim() });
	} catch (error) {
		console.error("Error generating title:", error);
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error occurred";
		return NextResponse.json(
			{ error: "Failed to generate title: " + errorMessage },
			{ status: 500 }
		);
	}
}
