import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();

	try {
		const supabase = createMiddlewareClient({ req, res });

		// Refresh the session to ensure we have the latest state
		const {
			data: { session },
			error,
		} = await supabase.auth.getSession();

		console.log("Middleware - Path:", req.nextUrl.pathname);
		console.log("Middleware - Session exists:", !!session);
		console.log("Middleware - User:", session?.user?.email);

		if (error) {
			console.error("Middleware auth error:", error);
		}

		// If there's no session and the user is trying to access a protected route
		if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
			console.log("Middleware - Redirecting to signin (no session)");
			const redirectUrl = req.nextUrl.clone();
			redirectUrl.pathname = "/signin";
			redirectUrl.searchParams.set("redirectedFrom", req.nextUrl.pathname);
			return NextResponse.redirect(redirectUrl);
		}

		// If there's a session and the user is trying to access auth routes
		if (
			session &&
			(req.nextUrl.pathname === "/signin" || req.nextUrl.pathname === "/signup")
		) {
			console.log("Middleware - Redirecting to dashboard (has session)");
			const redirectUrl = req.nextUrl.clone();
			redirectUrl.pathname = "/dashboard";
			return NextResponse.redirect(redirectUrl);
		}

		return res;
	} catch (error) {
		console.error("Middleware error:", error);
		return res;
	}
}

export const config = {
	matcher: ["/dashboard/:path*", "/signin", "/signup"],
};
