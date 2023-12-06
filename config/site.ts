export type SiteConfig = typeof siteConfig;
import {
	faHouse,
	faRightFromBracket,
	faBars,
	faBookOpenReader,
	faChalkboardUser,
	faUsers,
	faTableColumns
} from '@fortawesome/free-solid-svg-icons'
export const siteConfig = {
	name: "Splace Classroom",
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
	],
	navMenuItemsAdmin: [
	{
			label: "Home",
			href: "/",
			icon: faHouse,
		},
    {
      label: 'Users',
      icon: faUsers,
      href: '/admin/users',
    },
    {
      label: 'Class',
      icon: faChalkboardUser,
      href: '/admin/classes',
    },
    {
      label: 'Course',
      icon: faBookOpenReader,
      href: '/admin/courses',
		},
	],

};
