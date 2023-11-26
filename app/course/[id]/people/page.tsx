import React from 'react'
import { people } from '@/config/data-dummy'
import PeopleList from '@/components/people/peopleList'
export default function page() {
  return (
    <section className=' w-full max-w-2xl space-y-10'>
      <div className='space-y-3'>
        <h1 className={`text-3xl text-blue-600 border-b-1 border-blue-600 border-solid`}>Instructor</h1>
        <PeopleList data={people} />
      </div>
      <div className='space-y-3'>
        <h1 className={`text-3xl flex justify-between items-end text-blue-600 border-b-1 border-blue-600 border-solid`}>Student <span className='text-lg'>{people.length} Student</span></h1>
        <PeopleList data={people} />
      </div>
    </section>
  )
}
