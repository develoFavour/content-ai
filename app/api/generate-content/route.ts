import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { type NextRequest, NextResponse } from "next/server";

export const maxDuration = 30;

type ContentType = "blog" | "social" | "email" | "ad";

type RequestBody = {
	prompt: string;
	contentType: ContentType;
};

type ResponseBody = {
	content?: string;
	error?: string;
};

const systemPrompts: Record<ContentType, string> = {
	blog: "You are an expert blog writer. Create engaging, well-structured blog posts with clear headings, compelling introductions, and actionable content. Include SEO-friendly elements.",
	social:
		"You are a social media expert. Create engaging, shareable content optimized for social platforms. Keep it concise, use relevant hashtags, and include call-to-actions.",
	email:
		"You are an email marketing specialist. Create compelling email content with strong subject lines, personalized messaging, and clear call-to-actions.",
	ad: "You are an advertising copywriter. Create persuasive ad copy that captures attention, highlights benefits, and drives action. Focus on emotional triggers and clear value propositions.",
};

export async function POST(
	req: NextRequest
): Promise<NextResponse<ResponseBody>> {
	try {
		const body: RequestBody = await req.json();
		const { prompt, contentType } = body;

		if (!prompt || !contentType) {
			return NextResponse.json(
				{ error: "Missing required fields: prompt and contentType" },
				{ status: 400 }
			);
		}

		if (!systemPrompts[contentType]) {
			return NextResponse.json(
				{ error: "Invalid content type" },
				{ status: 400 }
			);
		}

		const { text } = await generateText({
			model: openai("gpt-4-turbo"),
			system: systemPrompts[contentType],
			prompt: prompt,
			maxTokens: 1000,
		});

		return NextResponse.json({ content: text });
	} catch (error) {
		console.error("Error generating content:", error);
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error occurred";
		return NextResponse.json(
			{ error: "Failed to generate content: " + errorMessage },
			{ status: 500 }
		);
	}
}
