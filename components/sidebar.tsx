"use client";
import React,{useContext, useEffect} from 'react'
import { MenuContext } from '@/app/context/MenuContext';
import NextLink from "next/link";
import { siteConfig } from '@/config/site';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';

type menuItems = {
  label: String,
  href: String,
  icon: FontAwesomeIconProps['icon'],
}

interface Props {
  name: string;
}

interface Props2 extends Props {
  username: string;
}


function Sidebar() {
  const { open, toggle } = useContext(MenuContext);
  const { data: session } = useSession();
  const [navMenuItems, setNavMenuItems] = React.useState<menuItems[]>(siteConfig.navMenuItems);
  useEffect(() => {
    if (session?.user?.role === 'ADMIN') setNavMenuItems(siteConfig.navMenuItemsAdmin)
    else setNavMenuItems(siteConfig.navMenuItems)
  },[session])
  const closeSeideBarHandler = () => {
    toggle();
  };
  return (
    <aside
      className={``}
    >
      {navMenuItems.map((item) => (
          <NextLink 
          className={`flex items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 gap-3`}
          href={item.href} 
          key={item.label}
          onClick={closeSeideBarHandler}
          >
            <div className='px-5 hidden md:block'>
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <span className={`${open ? 'md:block' : 'md:hidden'}`}>{item.label}</span>
          </NextLink>
        ))}
    </aside>
  )
}

export default Sidebar
