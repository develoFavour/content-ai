import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { type NextRequest, NextResponse } from "next/server";

export const maxDuration = 30;

type ContentType = "blog" | "social" | "email" | "ad";

type RequestBody = {
	prompt: string;
	contentType: ContentType;
	tone?: string;
	language?: string;
};

type ResponseBody = {
	content?: string;
	error?: string;
};

const systemPrompts: Record<ContentType, string> = {
	blog: "You are an expert blog writer and content strategist. Create engaging, well-structured blog posts with clear headings, compelling introductions, and actionable content. Include SEO-friendly elements and make the content valuable for readers. Use proper markdown formatting with headers, bullet points, and emphasis where appropriate.",

	social:
		"You are a social media expert and viral content creator. Create engaging, shareable content optimized for social platforms. Keep it concise, use relevant hashtags strategically, include call-to-actions, and make it conversation-starting. Focus on engagement and shareability.",

	email:
		"You are an email marketing specialist with expertise in conversion optimization. Create compelling email content with strong subject lines, personalized messaging, clear value propositions, and persuasive call-to-actions. Structure the email for maximum readability and engagement.",

	ad: "You are an advertising copywriter specializing in high-converting ad copy. Create persuasive advertisements that capture attention, highlight benefits clearly, address pain points, and drive immediate action. Focus on emotional triggers, clear value propositions, and compelling calls-to-action.",
};

const toneInstructions = {
	professional:
		"Use a professional, authoritative, and formal tone. Be informative and credible.",
	casual:
		"Use a friendly, conversational, and approachable tone. Be relatable and easy to understand.",
	funny:
		"Use humor, wit, and entertaining language. Be engaging and memorable while staying appropriate.",
	persuasive:
		"Use compelling, action-oriented language. Be convincing and motivational.",
};

const languageInstructions = {
	english: "Write in clear, native English.",
	spanish: "Write in clear, native Spanish (Español).",
	french: "Write in clear, native French (Français).",
	german: "Write in clear, native German (Deutsch).",
};

export async function POST(
	req: NextRequest
): Promise<NextResponse<ResponseBody>> {
	try {
		const body: RequestBody = await req.json();
		const {
			prompt,
			contentType,
			tone = "professional",
			language = "english",
		} = body;

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

		// Build the system prompt with tone and language instructions
		const baseSystemPrompt = systemPrompts[contentType];
		const toneInstruction =
			toneInstructions[tone as keyof typeof toneInstructions] ||
			toneInstructions.professional;
		const languageInstruction =
			languageInstructions[language as keyof typeof languageInstructions] ||
			languageInstructions.english;

		const fullSystemPrompt = `${baseSystemPrompt}

TONE: ${toneInstruction}
LANGUAGE: ${languageInstruction}

Additional guidelines:
- Make the content engaging and valuable
- Use appropriate formatting for the content type
- Ensure the content matches the requested tone throughout
- Write in the specified language naturally and fluently
- For blog posts, aim for 300-800 words
- For social media, keep it concise (under 280 characters for Twitter-style, longer for LinkedIn-style)
- For emails, structure with clear sections and compelling subject line suggestions
- For ads, focus on headlines, benefits, and strong CTAs`;

		const { text } = await generateText({
			model: openai("gpt-4o"),
			system: fullSystemPrompt,
			prompt: prompt,
			maxTokens: 1500,
			temperature: 0.7,
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
