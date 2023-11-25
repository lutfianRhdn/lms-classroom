export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
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
};
