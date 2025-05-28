import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DataProvider } from "./context/data-context";
import { AuthProvider } from "./context/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ContentAI - AI-Powered Content Creation",
	description: "Generate amazing content with the power of AI",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<DataProvider>{children}</DataProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
