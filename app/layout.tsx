import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import { Header } from "@/components/header";
import clsx from "clsx";
import Sidebar from "@/components/sidebar";
import { MenuContextProvider } from "./context/MenuContext";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)} 
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<MenuContextProvider>
						<Header/>
						<div className="relative flex">
							<Sidebar/>
							<div className="relative flex flex-grow flex-col h-screen ">
								<main className="container mx-auto flex-grow">
									{children}
								</main>
							</div>
						</div>
					</MenuContextProvider>
				</Providers>
			</body>
		</html>
	);
}
