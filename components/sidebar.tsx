"use client";
import React,{useContext} from 'react'
import { MenuContext } from '@/app/context/MenuContext';
import NextLink from "next/link";
import { siteConfig } from '@/config/site';
import HomeIcon from '@/app/assets/homeIcon';
function Sidebar() {
  const { open , toggle }= useContext(MenuContext);
  const closeSeideBarHandler = () => {
    toggle();
  };
  return (
    <aside
      className={`dark:bg-black bg-white fixed md:static min-h-full -translate-y-[120%] md:translate-y-0 top-25 left-0 right-0 rounded-lg overflow-hidden transition-all duration-200 
      ${open ? 'translate-y-0 md:w-60 p-4 md:p-0' : 'md:w-20'} shadow-sm z-50 md:z-0`}
    >
      <NextLink 
        className={`flex items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 gap-3`}
        href='/' 
        key='Home'
        onClick={closeSeideBarHandler}
      >
        <div className='px-3 hidden md:block'>
          <HomeIcon/>
        </div>
        <span className={`${open ? 'md:block' : 'md:hidden'}`}>Home</span>
      </NextLink>
      <NextLink 
        className={`flex items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 gap-3`}
        href='/' 
        key='Home'
        onClick={closeSeideBarHandler}
      >
        <div className='px-3 hidden md:block'>
          <HomeIcon/>
        </div>
        <span className={`${open ? 'md:block' : 'md:hidden'}`}>Home</span>
      </NextLink>
    </aside>
  )
}

export default Sidebar