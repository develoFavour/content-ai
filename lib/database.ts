import { supabase } from "./supabase";

// Types
export type Profile = {
	id: string;
	name: string;
	avatar_url?: string;
	created_at: string;
	updated_at: string;
};

export type ContentItem = {
	id: string;
	user_id: string;
	title?: string;
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

// Profile functions
export async function getProfile() {
	const { data: user } = await supabase.auth.getUser();
	if (!user.user) return null;

	const { data, error } = await supabase
		.from("profiles")
		.select("*")
		.eq("id", user.user.id)
		.single();

	if (error) {
		console.error("Error fetching profile:", error);
		return null;
	}

	return data as Profile;
}

export async function updateProfile(profile: Partial<Profile>) {
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

	return { data };
}

// Content functions
export async function saveContent(
	content: Omit<ContentItem, "id" | "user_id" | "created_at" | "updated_at">
) {
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

	return { data };
}

export async function getContentList(limit = 10, offset = 0) {
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

	return { data, count };
}

export async function getContentById(id: string) {
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

	return { data };
}

export async function deleteContent(id: string) {
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

	return { success: true };
}

// Content settings functions
export async function getContentSettings() {
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

	return { data };
}

export async function updateContentSettings(
	settings: Partial<ContentSettings>
) {
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

	return { data };
}
