"use client";

import React from 'react'
import { Tab,Tabs } from '@nextui-org/tabs'
import NextLink from 'next/link'
import {usePathname} from "next/navigation";
import { useParams } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { useSession } from 'next-auth/react';
import { User } from '@prisma/client';
export default function TabsCourse() {
  const pathname = usePathname();
  const { id } = useParams();
  const { data: session } = useSession();
  const userData = session?.user as User
  return (
    <div className="flex w-full flex-col bg-white dark:bg-black px-8">
      <Tabs 
        aria-label="Options" 
        color="primary" 
        variant="underlined"
        selectedKey={pathname}
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#06b6d4]",
        }}
      >
        <Tab
          key={`/course/${id}`}
          href={`/course/${id}`}
          title={
            <div className="flex items-center space-x-2">
              <span className='font-bold'>Module</span>
            </div>
          }
        />
        <Tab
          key={`/course/${id}/chatbot`}
          href={`/course/${id}/chatbot`}
          title={
            <div className="flex items-center space-x-2">
              <span className='font-bold'>ChatBot</span>
            </div>
          }
        />
        <Tab
          key={`/course/${id}/people`}
          href={`/course/${id}/people`}
          title={
            <div className="flex items-center space-x-2">
              <span className='font-bold'>People</span>
            </div>
          }
        />
        { userData?.role === 'INSTRUCTOR' && (
          <Tab
          key={`/course/${id}/quiz`}
          href={`/course/${id}/quiz`}
          title={
            <div className="flex items-center space-x-2">
              <span className='font-bold'>Quiz</span>
            </div>
          }
        />
        )}
      </Tabs>
    </div>  
  )
}
