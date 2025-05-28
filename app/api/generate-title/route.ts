import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function POST(req: Request) {
	try {
		const { content, contentType } = await req.json();

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

		return Response.json({ title: text.trim() });
	} catch (error) {
		console.error("Error generating title:", error);
		return Response.json(
			{ error: "Failed to generate title" },
			{ status: 500 }
		);
	}
}
