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
	navMenuItems: [
		{
			label: "Dashboard",
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
