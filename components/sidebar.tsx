"use client";
import React,{useContext, useEffect} from 'react'
import { MenuContext } from '@/app/context/MenuContext';
import NextLink from "next/link";
import { siteConfig } from '@/config/site';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import { Tooltip } from '@nextui-org/tooltip';

type menuItems = {
  label: String,
  href: any,
  icon: FontAwesomeIconProps['icon'],
}

function Sidebar() {
  const { open, toggle } = useContext(MenuContext);
  const { data: session } = useSession() as any;
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
      className={`fixed md:relative top-0 left-0 h-full w-fit z-50 md:z-0 dark:bg-black shadow-lg transition-all ease-in-out duration-300 px-4 py-4 md:py-2 space-y-5 md:translate-x-0 ${open?'translate-x-0':'-translate-x-full'}`}
    >
      {navMenuItems.map((item,index) => (
        <NextLink 
          className={`flex items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 `}
          href={item.href} 
          key={index} 
          onClick={open?closeSeideBarHandler:undefined}
        >
          <Tooltip content={item.label} placement="right">
            <FontAwesomeIcon icon={item.icon} className={``} />
          </Tooltip>
          <span className={`${open?'md:w-fit px-4':'md:w-0'} md:overflow-hidden transition-all`}>{item.label}</span>
        </NextLink>
        ))}
    </aside>
  )
}

export default Sidebar
