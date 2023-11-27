"use client";
import React from 'react'
import ModuleItem from './moduleItem'
import NextLink from 'next/link'
export default function ModuleList({data}:any) {
  return (
    <div className='w-full flex flex-col gap-5'>
      {data.map((item:any)=>{
        return (
          <ModuleItem key={item.id} module={item}/>
        )
      })}
    </div>
  )
}
