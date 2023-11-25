export type SiteConfig = typeof siteConfig;
import { faHouse, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

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
			label: "Home",
			href: "/",
			icon: faHouse,
		},
		{
			label: "Logout",
			href: "/",
			icon: faRightFromBracket
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
