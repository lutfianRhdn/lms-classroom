"use client";
import React from 'react'
import { Course,Resource } from '@/config/data-dummy'
import { Image } from '@nextui-org/image';
import { Card, CardFooter } from '@nextui-org/card';
import { title } from '@/components/primitives';
import ModuleList from '@/components/module/moduleList';

export default function page({params}:any) {
  const course = Course.find((course) => course.id == params.id);
  
  return (
    <section className='md:w-[900px] py-2 px-5'>
      <section>
        <Card className="w-full h-[40vh] col-span-12 sm:col-span-7">
          <Image
            removeWrapper
            alt="Course banner"
            className="z-0 h-full object-cover"
            src="/liquid-cheese.svg"
            width={900}
          />
          <CardFooter className="absolute bottom-0 z-10">
            <h1 className="text-3xl font-semibold text-white">{course?.title}</h1>
          </CardFooter>
        </Card>
      </section>
      <section className='py-8'>
        <ModuleList data={Resource}/>
      </section>
    </section>
  )
}
