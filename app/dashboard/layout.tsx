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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { useAuth } from "@/app/context/auth-context";
import Link from "next/link";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { user, signOut } = useAuth();

	return (
		<SidebarProvider>
			<div className="min-h-screen bg-gray-950 text-white flex">
				{/* Sidebar */}
				<Sidebar className="border-r border-white/10">
					<SidebarHeader className="p-6 border-b border-white/10">
						<div className="flex items-center space-x-3">
							<div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
								<Brain className="w-5 h-5 text-white" />
							</div>
							<span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
								ContentAI
							</span>
						</div>
					</SidebarHeader>

					<SidebarContent className="p-6">
						<nav className="space-y-2">
							<Link href="/dashboard">
								<Button
									variant="ghost"
									className="w-full justify-start text-gray-400 hover:bg-white/10 hover:text-white"
								>
									<Wand2 className="w-4 h-4 mr-3" />
									Content Generator
								</Button>
							</Link>
							<Link href="/dashboard/my-content">
								<Button
									variant="ghost"
									className="w-full justify-start text-gray-400 hover:bg-white/10 hover:text-white"
								>
									<FileText className="w-4 h-4 mr-3" />
									My Content
								</Button>
							</Link>
							<Button
								variant="ghost"
								className="w-full justify-start text-gray-400 hover:bg-white/10 hover:text-white"
							>
								<ImageIcon className="w-4 h-4 mr-3" />
								Templates
							</Button>
							<Button
								variant="ghost"
								className="w-full justify-start text-gray-400 hover:bg-white/10 hover:text-white"
							>
								<Settings className="w-4 h-4 mr-3" />
								Settings
							</Button>
						</nav>

						<div className="mt-auto pt-6 border-t border-white/10">
							<div className="flex items-center space-x-3 mb-4">
								<div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
									<User className="w-4 h-4 text-white" />
								</div>
								<div>
									<div className="text-sm font-medium">
										{user?.email?.split("@")[0]}
									</div>
									<div className="text-xs text-gray-400">{user?.email}</div>
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
					</SidebarContent>
				</Sidebar>

				{/* Main Content */}
				<div className="flex-1 flex flex-col">
					{/* Header */}
					<header className="border-b border-white/10 p-6">
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-4">
								<SidebarTrigger className="lg:hidden" />
								<h1 className="text-2xl font-bold">Dashboard</h1>
							</div>
							<Badge className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 border-emerald-500/30">
								Free Plan
							</Badge>
						</div>
					</header>

					{/* Dashboard Content */}
					<main className="flex-1">{children}</main>
				</div>
			</div>
		</SidebarProvider>
	);
}
