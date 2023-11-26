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
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeSwitch } from "@/components/theme-switch";
config.autoAddCss = false;


export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		// { media: "(prefers-color-scheme: light)", color: "white" },
		// { media: "(prefers-color-scheme: dark)", color: "black" },
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
							<div className="flex-shrink min-h-screen">
								<Sidebar/>
							</div>
							<div className="relative flex flex-grow flex-col ">
								<main className="dark:bg-gray-900 bg-gray-200 min-h-full">
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
