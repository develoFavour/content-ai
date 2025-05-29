import { supabase } from "./supabase";

// Types
export type Profile = {
	id: string;
	name: string | null;
	avatar_url?: string | null;
	created_at: string;
	updated_at: string;
};

export type ContentItem = {
	id: string;
	user_id: string;
	title?: string | null;
	content: string;
	content_type: "blog" | "social" | "email" | "ad";
	prompt: string;
	created_at: string;
	updated_at: string;
};

export type ContentSettings = {
	id: string;
	user_id: string;
	tone: "professional" | "casual" | "funny";
	language: string;
	max_length: number;
	created_at: string;
	updated_at: string;
};

// Database response types
export type DatabaseResponse<T> = {
	data?: T;
	error?: string;
	count?: number;
};

// Profile functions
export async function getProfile(): Promise<DatabaseResponse<Profile>> {
	try {
		const { data: user } = await supabase.auth.getUser();
		if (!user.user) return { error: "Not authenticated" };

		const { data, error } = await supabase
			.from("profiles")
			.select("*")
			.eq("id", user.user.id)
			.single();

		if (error) {
			console.error("Error fetching profile:", error);
			return { error: error.message };
		}

		return { data: data as Profile };
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error occurred";
		return { error: errorMessage };
	}
}

export async function updateProfile(
	profile: Partial<Profile>
): Promise<DatabaseResponse<Profile>> {
	try {
		const { data: user } = await supabase.auth.getUser();
		if (!user.user) return { error: "Not authenticated" };

		const { data, error } = await supabase
			.from("profiles")
			.update(profile)
			.eq("id", user.user.id)
			.select()
			.single();

		if (error) {
			console.error("Error updating profile:", error);
			return { error: error.message };
		}

		return { data: data as Profile };
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error occurred";
		return { error: errorMessage };
	}
}

// Content functions
export async function saveContent(
	content: Omit<ContentItem, "id" | "user_id" | "created_at" | "updated_at">
): Promise<DatabaseResponse<ContentItem>> {
	try {
		const { data: user } = await supabase.auth.getUser();
		if (!user.user) return { error: "Not authenticated" };

		const { data, error } = await supabase
			.from("content")
			.insert({
				...content,
				user_id: user.user.id,
			})
			.select()
			.single();

		if (error) {
			console.error("Error saving content:", error);
			return { error: error.message };
		}

		return { data: data as ContentItem };
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error occurred";
		return { error: errorMessage };
	}
}

export async function getContentList(
	limit = 10,
	offset = 0
): Promise<DatabaseResponse<ContentItem[]>> {
	try {
		const { data: user } = await supabase.auth.getUser();
		if (!user.user) return { error: "Not authenticated" };

		const { data, error, count } = await supabase
			.from("content")
			.select("*", { count: "exact" })
			.eq("user_id", user.user.id)
			.order("created_at", { ascending: false })
			.range(offset, offset + limit - 1);

		if (error) {
			console.error("Error fetching content:", error);
			return { error: error.message };
		}

		return { data: data as ContentItem[], count: count ?? 0 };
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error occurred";
		return { error: errorMessage };
	}
}

export async function getContentById(
	id: string
): Promise<DatabaseResponse<ContentItem>> {
	try {
		const { data: user } = await supabase.auth.getUser();
		if (!user.user) return { error: "Not authenticated" };

		const { data, error } = await supabase
			.from("content")
			.select("*")
			.eq("id", id)
			.eq("user_id", user.user.id)
			.single();

		if (error) {
			console.error("Error fetching content:", error);
			return { error: error.message };
		}

		return { data: data as ContentItem };
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error occurred";
		return { error: errorMessage };
	}
}

export async function deleteContent(
	id: string
): Promise<DatabaseResponse<boolean>> {
	try {
		const { data: user } = await supabase.auth.getUser();
		if (!user.user) return { error: "Not authenticated" };

		const { error } = await supabase
			.from("content")
			.delete()
			.eq("id", id)
			.eq("user_id", user.user.id);

		if (error) {
			console.error("Error deleting content:", error);
			return { error: error.message };
		}

		return { data: true };
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error occurred";
		return { error: errorMessage };
	}
}

// Content settings functions
export async function getContentSettings(): Promise<
	DatabaseResponse<ContentSettings>
> {
	try {
		const { data: user } = await supabase.auth.getUser();
		if (!user.user) return { error: "Not authenticated" };

		const { data, error } = await supabase
			.from("content_settings")
			.select("*")
			.eq("user_id", user.user.id)
			.single();

		if (error) {
			console.error("Error fetching content settings:", error);
			return { error: error.message };
		}

		return { data: data as ContentSettings };
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error occurred";
		return { error: errorMessage };
	}
}

export async function updateContentSettings(
	settings: Partial<ContentSettings>
): Promise<DatabaseResponse<ContentSettings>> {
	try {
		const { data: user } = await supabase.auth.getUser();
		if (!user.user) return { error: "Not authenticated" };

		const { data, error } = await supabase
			.from("content_settings")
			.update(settings)
			.eq("user_id", user.user.id)
			.select()
			.single();

		if (error) {
			console.error("Error updating content settings:", error);
			return { error: error.message };
		}

		return { data: data as ContentSettings };
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error occurred";
		return { error: errorMessage };
	}
}
