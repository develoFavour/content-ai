"use client";

import type React from "react";
import {
	Brain,
	FileText,
	ImageIcon,
	Settings,
	LogOut,
	User,
	Wand2,
	Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/app/context/auth-context";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { user, session, signOut, isLoading } = useAuth();
	const router = useRouter();
	const pathname = usePathname();
	const [isCheckingAuth, setIsCheckingAuth] = useState(true);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		console.log("Dashboard Layout - Auth state:", {
			user: !!user,
			session: !!session,
			isLoading,
			email: user?.email,
		});

		if (!isLoading) {
			if (!session) {
				console.log("Dashboard Layout - No session, redirecting to signin");
				router.push("/signin");
			} else {
				setIsCheckingAuth(false);
			}
		}
	}, [user, session, isLoading, router]);

	if (isLoading || isCheckingAuth) {
		return (
			<div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4"></div>
					<p className="text-gray-400">Loading dashboard...</p>
					<p className="text-xs text-gray-500 mt-2">
						{isLoading
							? "Checking authentication..."
							: "Preparing your dashboard..."}
					</p>
				</div>
			</div>
		);
	}

	const navigationItems = [
		{
			href: "/dashboard",
			label: "Content Generator",
			icon: Wand2,
			active: pathname === "/dashboard",
		},
		{
			href: "/dashboard/my-content",
			label: "My Content",
			icon: FileText,
			active: pathname === "/dashboard/my-content",
		},
		{
			href: "/dashboard/templates",
			label: "Templates",
			icon: ImageIcon,
			active: pathname === "/dashboard/templates",
		},
		{
			href: "/dashboard/settings",
			label: "Settings",
			icon: Settings,
			active: pathname === "/dashboard/settings",
		},
	];

	const SidebarContent = () => (
		<>
			{/* Logo */}
			<div className="p-6 border-b border-white/10">
				<div className="flex items-center space-x-3">
					<div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
						<Brain className="w-5 h-5 text-white" />
					</div>
					<span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
						ContentAI
					</span>
				</div>
			</div>

			{/* Navigation */}
			<nav className="flex-1 p-6">
				<div className="space-y-2">
					{navigationItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<Button
								variant="ghost"
								className={`w-full justify-start transition-colors ${
									item.active
										? "bg-white/10 text-white"
										: "text-gray-400 hover:bg-white/10 hover:text-white"
								}`}
							>
								<item.icon className="w-4 h-4 mr-3" />
								{item.label}
							</Button>
						</Link>
					))}
				</div>
			</nav>

			{/* User Section */}
			<div className="p-6 border-t border-white/10">
				<div className="flex items-center space-x-3 mb-4">
					<div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
						<User className="w-4 h-4 text-white" />
					</div>
					<div className="flex-1 min-w-0">
						<div className="text-sm font-medium text-white truncate">
							{user?.email?.split("@")[0]}
						</div>
						<div className="text-xs text-gray-400 truncate">{user?.email}</div>
					</div>
				</div>
				<Button
					variant="ghost"
					className="w-full justify-start text-gray-400 hover:bg-white/10 hover:text-white"
					onClick={() => signOut()}
				>
					<LogOut className="w-4 h-4 mr-3" />
					Sign Out
				</Button>
			</div>
		</>
	);

	return (
		<div className="min-h-screen bg-gray-950 text-white flex">
			{/* Desktop Sidebar */}
			<div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-gray-900/50 border-r border-white/10 backdrop-blur-xl">
				<SidebarContent />
			</div>

			{/* Mobile Sidebar */}
			<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
				<SheetContent
					side="left"
					className="w-64 bg-gray-900/95 border-white/10 backdrop-blur-xl p-0"
				>
					<SidebarContent />
				</SheetContent>
			</Sheet>

			{/* Main Content */}
			<div className="flex-1 lg:pl-64">
				{/* Header */}
				<header className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur-xl border-b border-white/10">
					<div className="flex items-center justify-between p-4 sm:p-6">
						<div className="flex items-center space-x-4">
							<Sheet>
								<SheetTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="lg:hidden text-gray-400 hover:text-white"
										onClick={() => setIsMobileMenuOpen(true)}
									>
										<Menu className="h-5 w-5" />
									</Button>
								</SheetTrigger>
							</Sheet>
							<h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
						</div>
						<Badge className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 border-emerald-500/30 text-xs sm:text-sm">
							Free Plan
						</Badge>
					</div>
				</header>

				{/* Dashboard Content */}
				<main className="min-h-[calc(100vh-80px)]">{children}</main>
			</div>
		</div>
	);
}
