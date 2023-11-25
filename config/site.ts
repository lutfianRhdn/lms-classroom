import FileIcon from "@/app/assets/fileIcon";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "UNIKOM LMS",
	description: "UNIKOM LMS is an online learning media to facilitate the teaching process at Universitas Komputer Indonesia.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/",
			icon: FileIcon,
		},
		{
			label: "Dashboard",
			href: "/",
		},
		{
			label: "Projects",
			href: "/",
		},
		{
			label: "Team",
			href: "/",
		},
		{
			label: "Calendar",
			href: "/",
		},
		{
			label: "Settings",
			href: "/",
		},
		{
			label: "Help & Feedback",
			href: "/",
		},
		{
			label: "Logout",
			href: "/",
		},
	],
	navCourseItems: [
		{
			label: "Module",
			href: "/",
		},
		{
			label: "Chatbot",
			href: "/",
		},
		{
			label: "People",
			href: "/",
		}
	]
};
