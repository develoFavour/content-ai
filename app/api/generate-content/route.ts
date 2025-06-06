import { groqLlama370b } from "@/lib/groq";
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

// Fallback content generator for when API is not available
function generateFallbackContent(
	prompt: string,
	contentType: ContentType,
	tone: string
): string {
	const toneStyle = {
		professional: "formal and authoritative",
		casual: "friendly and conversational",
		funny: "humorous and entertaining",
		persuasive: "compelling and action-oriented",
	};

	const currentTone =
		toneStyle[tone as keyof typeof toneStyle] || "professional";

	switch (contentType) {
		case "blog":
			return `# ${prompt}\n\n*This is a demo content generated in ${currentTone} tone*\n\n## Introduction\n\nIn today's digital landscape, understanding ${prompt.toLowerCase()} has become increasingly important. This comprehensive guide will explore the key aspects and provide actionable insights.\n\n## Key Points\n\n### 1. Understanding the Fundamentals\nThe foundation of ${prompt.toLowerCase()} lies in recognizing its core principles and applications in modern contexts.\n\n### 2. Practical Implementation\nImplementing effective strategies requires a systematic approach that considers various factors and stakeholder needs.\n\n### 3. Best Practices\n- Focus on user-centric solutions\n- Maintain consistency across all touchpoints\n- Continuously monitor and optimize performance\n- Stay updated with industry trends\n\n## Conclusion\n\nBy following these guidelines and maintaining a ${tone} approach, you can achieve significant results in ${prompt.toLowerCase()}. Remember that success comes from consistent effort and continuous learning.\n\n---\n*This content was generated by ContentAI - Add your Groq API key for AI-powered generation.*`;

		case "social":
			return `🚀 ${prompt}\n\n${
				tone === "funny" ? "😄" : tone === "professional" ? "💼" : "✨"
			} Ready to dive into something amazing? Let's talk about ${prompt.toLowerCase()}!\n\n${
				tone === "casual"
					? "Hey everyone! 👋"
					: tone === "professional"
					? "Industry professionals,"
					: "Friends,"
			}\n\n${
				tone === "funny" ? "Who else thinks" : "Did you know that"
			} ${prompt.toLowerCase()} is absolutely game-changing? Here's why:\n\n✅ Incredible impact on daily life\n✅ Revolutionary approach to problem-solving\n✅ Future-ready solutions\n\n${
				tone === "persuasive" ? "🎯 Don't miss out!" : "💭 What do you think?"
			} Share your thoughts below!\n\n#Innovation #Technology #Future #Growth #Success\n\n---\n*Generated by ContentAI - Add your Groq API key for AI-powered content! ✨*`;

		case "email":
			return `Subject: ${prompt} - Important Update\n\n${
				tone === "professional" ? "Dear Valued Customer," : "Hi there! 👋"
			}\n\nI hope this email finds you well. I'm excited to share some important information about ${prompt.toLowerCase()}.\n\n${
				tone === "funny"
					? "🎉 Drumroll please..."
					: "📢 Here's what you need to know:"
			}\n\n• Key benefit #1: Enhanced user experience\n• Key benefit #2: Improved efficiency\n• Key benefit #3: Cost-effective solution\n\n${
				tone === "persuasive"
					? "🚀 Ready to get started?"
					: "We believe this will"
			} significantly impact your ${prompt.toLowerCase()} strategy.\n\n${
				tone === "casual"
					? "Questions? Just hit reply!"
					: "Please don't hesitate to contact us if you have any questions."
			}\n\n${
				tone === "professional" ? "Best regards," : "Cheers! ✨"
			}\nThe ContentAI Team\n\n---\nP.S. Add your Groq API key to unlock AI-powered email generation! 🤖`;

		case "ad":
			return `🎯 ${prompt.toUpperCase()}\n\n${
				tone === "funny" ? "😱 STOP SCROLLING!" : "⚡ BREAKTHROUGH ALERT!"
			}\n\n${
				tone === "casual" ? "Hey, quick question..." : "Are you tired of"
			} struggling with ${prompt.toLowerCase()}?\n\n${
				tone === "funny"
					? "🤔 We get it. It's like trying to solve a Rubik's cube blindfolded."
					: "💡 Introducing the solution you've been waiting for."
			}\n\n✨ WHAT YOU GET:\n${
				tone === "professional"
					? "• Professional-grade results"
					: "• Mind-blowing results"
			}\n• ${
				tone === "funny"
					? "Zero headaches guaranteed"
					: "Effortless implementation"
			}\n• ${
				tone === "persuasive" ? "Immediate ROI" : "Long-term success"
			}\n\n${
				tone === "persuasive"
					? "🔥 LIMITED TIME OFFER!"
					: "🎁 SPECIAL LAUNCH PRICING!"
			}\n\n[GET STARTED NOW] [LEARN MORE]\n\n${
				tone === "funny"
					? "⚠️ Warning: May cause excessive happiness and productivity"
					: "💼 Trusted by industry leaders worldwide"
			}\n\n---\n*Ad created with ContentAI - Add your Groq API key for AI-powered ad copy! 🚀*`;

		default:
			return `Content about ${prompt} generated with ${tone} tone.\n\n*This is demo content. Add your Groq API key to unlock AI-powered generation.*`;
	}
}

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

		// Check if Groq API key is available
		if (!process.env.GROQ_API_KEY) {
			console.warn("Groq API key not found, using fallback content generation");

			// Generate fallback content
			const fallbackContent = generateFallbackContent(
				prompt,
				contentType,
				tone
			);

			return NextResponse.json({
				content: fallbackContent,
				warning:
					"Demo mode: Add your Groq API key to .env.local for AI-powered generation",
			});
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
			model: groqLlama370b(),
			system: fullSystemPrompt,
			prompt: prompt,
			maxTokens: 1500,
			temperature: 0.7,
		});

		return NextResponse.json({ content: text });
	} catch (error) {
		console.error("Error generating content:", error);

		// If it's an API key error, provide helpful guidance
		if (error instanceof Error && error.message.includes("API key")) {
			return NextResponse.json(
				{
					error:
						"Groq API key is missing. Please add GROQ_API_KEY to your .env.local file. Get your free key at console.groq.com",
				},
				{ status: 400 }
			);
		}

		const errorMessage =
			error instanceof Error ? error.message : "Unknown error occurred";
		return NextResponse.json(
			{ error: "Failed to generate content: " + errorMessage },
			{ status: 500 }
		);
	}
}
