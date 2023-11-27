"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';
import fetchApi from '@/utils/fetchApi';
import { people } from '@/config/data-dummy'
import PeopleList from '@/components/people/peopleList'
import { Spinner } from '@nextui-org/react';
export default function page() {
  const [student, setStudent] = useState([]); 
  const [instructor, setInstructor] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
	async function  getData() {
    const courses = (await fetchApi(`/users?course_id=${id}`, 'GET'));
    return courses.data;
  }
  useEffect(()=>{
    getData().then((res)=>{
      setStudent(res.filter((item:any)=>item.role == 'STUDENT'))
      setInstructor(res.filter((item:any)=>item.role != 'STUDENT'))
      setLoading(false)
    })
  },[])

  return (
    <section className=' w-full max-w-2xl space-y-10'>
      <div className='space-y-3'>
        <h1 className={`text-3xl text-blue-600 border-b-1 border-blue-600 border-solid`}>Instructor</h1>
        {loading ? <Spinner className='text-center w-full'/>:<PeopleList data={instructor} />}
      </div>
      <div className='space-y-3'>
        <h1 className={`text-3xl flex justify-between items-end text-blue-600 border-b-1 border-blue-600 border-solid`}>Student <span className='text-lg'>{student?.length} Student</span></h1>
        {loading ? <Spinner className='text-center w-full'/>:<PeopleList data={student} />}
      </div>
    </section>
  )
}
