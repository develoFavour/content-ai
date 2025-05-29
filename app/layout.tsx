import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DataProvider } from "./context/data-context";
import { AuthProvider } from "./context/auth-context";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ContentAI - AI-Powered Content Creation",
	description: "Generate amazing content with the power of AI",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<DataProvider>
						{children}
						<Toaster
							theme="dark"
							position="top-right"
							toastOptions={{
								style: {
									background: "rgb(17 24 39)",
									border: "1px solid rgb(55 65 81)",
									color: "white",
								},
							}}
						/>
					</DataProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
