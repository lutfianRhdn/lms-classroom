import React from 'react'
import ModuleItem from './moduleItem'

export default function ModuleList({data}:any) {
  return (
    <div className='w-full space-y-4'>
      {data.map((item:any)=>{
        return (
          <ModuleItem key={item.id} module={item}/>
        )
      })}
    </div>
  )
}
