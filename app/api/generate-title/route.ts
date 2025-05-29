import { groqLlama370b } from "@/lib/groq";
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

function generateFallbackTitle(content: string, contentType: string): string {
	const firstLine = content.split("\n")[0].replace(/[#*]/g, "").trim();
	const words = firstLine.split(" ").slice(0, 8).join(" ");

	const typePrefix = {
		blog: "Blog: ",
		social: "Post: ",
		email: "Email: ",
		ad: "Ad: ",
	};

	return (typePrefix[contentType as keyof typeof typePrefix] || "") + words;
}

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

		// Check if Groq API key is available
		if (!process.env.GROQ_API_KEY) {
			console.warn("Groq API key not found, using fallback title generation");

			const fallbackTitle = generateFallbackTitle(content, contentType);
			return NextResponse.json({ title: fallbackTitle });
		}

		const { text } = await generateText({
			model: groqLlama370b(),
			system:
				"You are a title generation expert. Create a concise, engaging, single-line title for the provided content.  The title should be short, engaging, and to the point and reflect the main idea or message of the content. Avoid using words like 'blog', 'post', 'email', or 'ad'.",
			prompt: `Generate a compelling single-line title for this ${contentType} content: ${content.substring(
				0,
				500
			)}...`,
			maxTokens: 50,
		});

		return NextResponse.json({ title: text.trim() });
	} catch (error) {
		console.error("Error generating title:", error);

		// Fallback to simple title generation
		const { content, contentType } = await req.json();
		const fallbackTitle = generateFallbackTitle(content, contentType);

		return NextResponse.json({ title: fallbackTitle });
	}
}
