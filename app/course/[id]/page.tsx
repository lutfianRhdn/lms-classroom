"use client";
import React,{ useEffect, useState } from 'react'
import { Course,Resource } from '@/config/data-dummy'
import { Image } from '@nextui-org/image';
import { Card, CardFooter } from '@nextui-org/card';
import { title } from '@/components/primitives';
import ModuleList from '@/components/module/moduleList';
import fetchApi from '@/utils/fetchApi';
import EmptyModule from '@/components/module/emptyModule';
export default function page({params}:any) {
  const [data, setData] = useState([]);
  const course = Course.find((course) => course.id == params.id);
  async function  getData() {
    const courses = (await fetchApi(`/courses/${params.id}`, 'GET'));
    return courses.data;
  }
  useEffect(()=>{
    getData().then((res)=>{
      setData(res)
    })
  },[])
  return (
    <section className='w-full max-w-4xl py-2 px-5'>
      <section>
        <Card className="w-full h-60 col-span-12 sm:col-span-7">
          <Image
            removeWrapper
            alt="Course banner"
            className="z-0 h-full object-cover"
            src="/liquid-cheese.svg"
            width={900}
          />
          <CardFooter className="absolute bottom-0 z-10">
            <h1 className="text-3xl font-semibold text-white">{data?.name}</h1>
          </CardFooter>
        </Card>
      </section>
      <section className='py-8'>
        {data?.resource?.length > 0 ? <ModuleList data={data?.resource}/> : <EmptyModule/>}
      </section>
    </section>
  )
}
