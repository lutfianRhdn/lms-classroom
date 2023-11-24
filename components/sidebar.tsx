'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { useSession } from "next-auth/react";
import { ThemeSwitch } from './theme-switch';

type SidebarProps = {
  menu: SidebarItem[];
}
type SidebarItem = {
  title: string;
  icon: FontAwesomeIconProps['icon'];
  link: string;
}
const Sidebar = ({ menu }: SidebarProps) => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  return (
    <>
      <div className='flex flex-col w-72 h-screen dark:bg-gray-800 bg-white px-4 py-8'>
        <div className='flex  justify-center'>
          <h2 className='mt-4 text-xl font-medium dark:text-white'>{session?.user?.name || 'Name'}</h2>
        </div>
        <div className='mt-10'>
          {menu.map((item, index) => (
            <Link href={item.link} key={index} className={`flex items-center my-3 justify-start dark:text-white px-2 py-1 dark:hover:text-gray-200 ${pathname === item.link ? 'text-gray-200 bg-blue-500 px-2 py-1' : ''}`}>
              <FontAwesomeIcon icon={item.icon} />
              <span className='mx-4'>{item.title}</span>
            </Link>
          ))}
        </div></div>
    </>
  );
};

export default Sidebar;