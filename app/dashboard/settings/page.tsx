"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useAuth } from "@/app/context/auth-context";
import {
	getProfile,
	updateProfile,
	getContentSettings,
	updateContentSettings,
} from "@/lib/database";
import {
	RefreshCw,
	Save,
	User,
	Settings,
	Bell,
	Shield,
	CreditCard,
	Check,
} from "lucide-react";

export default function SettingsPage() {
	const { user } = useAuth();
	const [activeTab, setActiveTab] = useState("account");
	const [isLoading, setIsLoading] = useState(true);
	const [isSaving, setIsSaving] = useState(false);

	// Profile settings
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	// Content settings
	const [defaultTone, setDefaultTone] = useState("professional");
	const [defaultLanguage, setDefaultLanguage] = useState("english");
	const [maxLength, setMaxLength] = useState(1000);

	// Notification settings
	const [emailNotifications, setEmailNotifications] = useState(true);
	const [contentAlerts, setContentAlerts] = useState(true);
	const [marketingEmails, setMarketingEmails] = useState(false);

	useEffect(() => {
		const loadSettings = async () => {
			setIsLoading(true);
			try {
				// Load profile
				const { data: profile, error: profileError } = await getProfile();
				if (profileError) {
					throw new Error(profileError);
				}

				if (profile) {
					setName(profile.name || "");
					setEmail(user?.email || "");
				}

				// Load content settings
				const { data: contentSettings, error: contentError } =
					await getContentSettings();
				if (contentError) {
					throw new Error(contentError);
				}

				if (contentSettings) {
					setDefaultTone(contentSettings.tone || "professional");
					setDefaultLanguage("english"); // Default to English as it's not in the DB schema
					setMaxLength(contentSettings.max_length || 1000);
				}
			} catch (error) {
				console.error("Error loading settings:", error);
				toast.error("Failed to load settings");
			} finally {
				setIsLoading(false);
			}
		};

		loadSettings();
	}, [user]);

	const saveProfile = async () => {
		setIsSaving(true);
		try {
			const { error } = await updateProfile({
				name,
			});

			if (error) {
				throw new Error(error);
			}

			toast.success("Profile updated successfully!");
		} catch (error) {
			console.error("Error updating profile:", error);
			toast.error("Failed to update profile");
		} finally {
			setIsSaving(false);
		}
	};

	const saveContentSettings = async () => {
		setIsSaving(true);
		try {
			const { error } = await updateContentSettings({
				tone: defaultTone as any,
				max_length: maxLength,
			});

			if (error) {
				throw new Error(error);
			}

			toast.success("Content settings updated successfully!");
		} catch (error) {
			console.error("Error updating content settings:", error);
			toast.error("Failed to update content settings");
		} finally {
			setIsSaving(false);
		}
	};

	const saveNotificationSettings = () => {
		setIsSaving(true);
		// Simulate API call
		setTimeout(() => {
			toast.success("Notification preferences updated!");
			setIsSaving(false);
		}, 1000);
	};

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-64">
				<div className="animate-spin w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full"></div>
			</div>
		);
	}

	return (
		<div className="flex-1 overflow-auto">
			<div className="p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
				{/* Header */}
				<div>
					<h2 className="text-2xl sm:text-3xl font-bold text-white">
						Settings
					</h2>
					<p className="text-gray-400 text-sm mt-1">
						Manage your account and preferences
					</p>
				</div>

				{/* Settings Tabs */}
				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className="space-y-6"
				>
					<TabsList className="bg-white/5 border-white/20">
						<TabsTrigger
							value="account"
							className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
						>
							<User className="h-4 w-4 mr-2" />
							Account
						</TabsTrigger>
						<TabsTrigger
							value="content"
							className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
						>
							<Settings className="h-4 w-4 mr-2" />
							Content
						</TabsTrigger>
						<TabsTrigger
							value="notifications"
							className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
						>
							<Bell className="h-4 w-4 mr-2" />
							Notifications
						</TabsTrigger>
						<TabsTrigger
							value="security"
							className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
						>
							<Shield className="h-4 w-4 mr-2" />
							Security
						</TabsTrigger>
						<TabsTrigger
							value="billing"
							className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
						>
							<CreditCard className="h-4 w-4 mr-2" />
							Billing
						</TabsTrigger>
					</TabsList>

					{/* Account Settings */}
					<TabsContent value="account" className="space-y-6">
						<Card className="bg-white/5 border-white/10">
							<CardHeader>
								<CardTitle className="text-white">
									Profile Information
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="name" className="text-white">
										Name
									</Label>
									<Input
										id="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										className="bg-white/5 border-white/20 text-white"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="email" className="text-white">
										Email
									</Label>
									<Input
										id="email"
										value={email}
										disabled
										className="bg-white/5 border-white/20 text-white opacity-70"
									/>
									<p className="text-xs text-gray-400">
										Email cannot be changed
									</p>
								</div>

								<Button
									onClick={saveProfile}
									disabled={isSaving}
									className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700"
								>
									{isSaving ? (
										<>
											<RefreshCw className="h-4 w-4 mr-2 animate-spin" />
											Saving...
										</>
									) : (
										<>
											<Save className="h-4 w-4 mr-2" />
											Save Changes
										</>
									)}
								</Button>
							</CardContent>
						</Card>

						<Card className="bg-white/5 border-white/10">
							<CardHeader>
								<CardTitle className="text-white">Account Plan</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center justify-between">
									<div>
										<h3 className="text-lg font-medium text-white">
											Free Plan
										</h3>
										<p className="text-sm text-gray-400">
											Basic access to AI content generation
										</p>
									</div>
									<Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
										Current Plan
									</Badge>
								</div>

								<Separator className="bg-white/10" />

								<div className="space-y-2">
									<div className="flex items-center">
										<Check className="h-4 w-4 text-emerald-400 mr-2" />
										<span className="text-gray-300">
											5 AI generations per day
										</span>
									</div>
									<div className="flex items-center">
										<Check className="h-4 w-4 text-emerald-400 mr-2" />
										<span className="text-gray-300">Basic templates</span>
									</div>
									<div className="flex items-center">
										<Check className="h-4 w-4 text-emerald-400 mr-2" />
										<span className="text-gray-300">
											Standard content quality
										</span>
									</div>
								</div>

								<Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
									Upgrade to Pro
								</Button>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Content Settings */}
					<TabsContent value="content" className="space-y-6">
						<Card className="bg-white/5 border-white/10">
							<CardHeader>
								<CardTitle className="text-white">
									Default Content Settings
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="defaultTone" className="text-white">
										Default Tone
									</Label>
									<select
										id="defaultTone"
										value={defaultTone}
										onChange={(e) => setDefaultTone(e.target.value)}
										className="w-full p-2 rounded-lg bg-white/5 border border-white/20 text-white"
									>
										<option value="professional" className="bg-gray-900">
											💼 Professional
										</option>
										<option value="casual" className="bg-gray-900">
											😊 Casual
										</option>
										<option value="funny" className="bg-gray-900">
											😄 Funny
										</option>
										<option value="persuasive" className="bg-gray-900">
											🎯 Persuasive
										</option>
									</select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="defaultLanguage" className="text-white">
										Default Language
									</Label>
									<select
										id="defaultLanguage"
										value={defaultLanguage}
										onChange={(e) => setDefaultLanguage(e.target.value)}
										className="w-full p-2 rounded-lg bg-white/5 border border-white/20 text-white"
									>
										<option value="english" className="bg-gray-900">
											🇺🇸 English
										</option>
										<option value="spanish" className="bg-gray-900">
											🇪🇸 Spanish
										</option>
										<option value="french" className="bg-gray-900">
											🇫🇷 French
										</option>
										<option value="german" className="bg-gray-900">
											🇩🇪 German
										</option>
									</select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="maxLength" className="text-white">
										Maximum Content Length (words)
									</Label>
									<Input
										id="maxLength"
										type="number"
										value={maxLength}
										onChange={(e) =>
											setMaxLength(Number.parseInt(e.target.value))
										}
										className="bg-white/5 border-white/20 text-white"
										min={100}
										max={5000}
									/>
									<p className="text-xs text-gray-400">
										Longer content may take more time to generate (100-5000
										words)
									</p>
								</div>

								<Button
									onClick={saveContentSettings}
									disabled={isSaving}
									className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700"
								>
									{isSaving ? (
										<>
											<RefreshCw className="h-4 w-4 mr-2 animate-spin" />
											Saving...
										</>
									) : (
										<>
											<Save className="h-4 w-4 mr-2" />
											Save Settings
										</>
									)}
								</Button>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Notification Settings */}
					<TabsContent value="notifications" className="space-y-6">
						<Card className="bg-white/5 border-white/10">
							<CardHeader>
								<CardTitle className="text-white">
									Notification Preferences
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label className="text-white">Email Notifications</Label>
										<p className="text-xs text-gray-400">
											Receive important account updates via email
										</p>
									</div>
									<Switch
										checked={emailNotifications}
										onCheckedChange={setEmailNotifications}
										className="data-[state=checked]:bg-emerald-500"
									/>
								</div>

								<Separator className="bg-white/10" />

								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label className="text-white">Content Alerts</Label>
										<p className="text-xs text-gray-400">
											Get notified when your content is ready or needs attention
										</p>
									</div>
									<Switch
										checked={contentAlerts}
										onCheckedChange={setContentAlerts}
										className="data-[state=checked]:bg-emerald-500"
									/>
								</div>

								<Separator className="bg-white/10" />

								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label className="text-white">Marketing Emails</Label>
										<p className="text-xs text-gray-400">
											Receive tips, product updates, and promotional offers
										</p>
									</div>
									<Switch
										checked={marketingEmails}
										onCheckedChange={setMarketingEmails}
										className="data-[state=checked]:bg-emerald-500"
									/>
								</div>

								<Button
									onClick={saveNotificationSettings}
									disabled={isSaving}
									className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700"
								>
									{isSaving ? (
										<>
											<RefreshCw className="h-4 w-4 mr-2 animate-spin" />
											Saving...
										</>
									) : (
										<>
											<Save className="h-4 w-4 mr-2" />
											Save Preferences
										</>
									)}
								</Button>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Security Settings */}
					<TabsContent value="security" className="space-y-6">
						<Card className="bg-white/5 border-white/10">
							<CardHeader>
								<CardTitle className="text-white">Security Settings</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="currentPassword" className="text-white">
										Current Password
									</Label>
									<Input
										id="currentPassword"
										type="password"
										className="bg-white/5 border-white/20 text-white"
										placeholder="Enter your current password"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="newPassword" className="text-white">
										New Password
									</Label>
									<Input
										id="newPassword"
										type="password"
										className="bg-white/5 border-white/20 text-white"
										placeholder="Enter your new password"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="confirmPassword" className="text-white">
										Confirm New Password
									</Label>
									<Input
										id="confirmPassword"
										type="password"
										className="bg-white/5 border-white/20 text-white"
										placeholder="Confirm your new password"
									/>
								</div>

								<Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
									<Save className="h-4 w-4 mr-2" />
									Update Password
								</Button>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Billing Settings */}
					<TabsContent value="billing" className="space-y-6">
						<Card className="bg-white/5 border-white/10">
							<CardHeader>
								<CardTitle className="text-white">
									Billing Information
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="p-6 text-center">
									<p className="text-gray-400 mb-4">
										You are currently on the Free Plan
									</p>
									<Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
										Upgrade to Pro
									</Button>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
