"use client";
import React from 'react'
import ModuleItem from './moduleItem'
import NextLink from 'next/link'

type moduleProps = {
  userRole:string,
  module:any
}

export default function ModuleList({userRole,module}:moduleProps) {
  return (
    <div className='w-full flex flex-col gap-5'>
      {module.map((item:any,index:any)=>{
        return (
          <ModuleItem key={index} userRole={userRole} module={item}/>
        )
      })}
    </div>
  )
}
