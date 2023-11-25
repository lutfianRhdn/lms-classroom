"use client";
import React,{useContext} from 'react'
import { MenuContext } from '@/app/context/MenuContext';
import NextLink from "next/link";
import { siteConfig } from '@/config/site';
function Sidebar() {
  const { open ,toggle }= useContext(MenuContext);
  const closeSeideBarHandler = () => {
    toggle();
  };
  return (
    <aside
      className={`dark:bg-black bg-white fixed md:static min-h-screen top-0 left-0 right-0 rounded-lg overflow-hidden transition-all duration-200 ${
        open ? 'md:w-60 p-4' : 'w-0'
      } shadow-sm z-50 md:z-0`}
    >
      {siteConfig.navMenuItems.map((item) =>(
        <NextLink 
          className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'
          href={item.href} 
          key={item.href}
          onClick={closeSeideBarHandler}
        >
          {item.label}
        </NextLink>
      )
      )}
    </aside>
  )
}

export default Sidebar