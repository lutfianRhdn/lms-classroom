"use client";
import React from 'react'
import ModuleItem from './moduleItem'
import NextLink from 'next/link'

type moduleProps = {
  module:any
}

export default function ModuleList({module}:moduleProps) {
  return (
    <div className='w-full flex flex-col gap-5'>
      {module.map((item:any,index:any)=>{
        return (
          <ModuleItem key={index} module={item}/>
        )
      })}
    </div>
  )
}
