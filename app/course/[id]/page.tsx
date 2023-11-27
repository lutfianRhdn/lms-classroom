"use client";
import React,{ useEffect, useState } from 'react'
import { Course,Resource } from '@/config/data-dummy'
import { Image } from '@nextui-org/image';
import { Card, CardFooter } from '@nextui-org/card';
import { title } from '@/components/primitives';
import ModuleList from '@/components/module/moduleList';
import fetchApi from '@/utils/fetchApi';
import EmptyModule from '@/components/module/emptyModule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { useSession } from 'next-auth/react';
export default function page({params}:any) {
  const { data:session } = useSession();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [canUpload, setCanUpload] = useState(false); 
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const course = Course.find((course) => course.id == params.id);
  async function  getData() {
    const courses = (await fetchApi(`/courses/${params.id}`, 'GET'));
    return courses.data;
  }
  const handleUpload = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('course_id', params.id);
    const res = await fetch(`/api/resources`, {
      method: 'POST',
      body: formData,
    })
    if (res) {
      getData().then((res)=>{
        setData(res)
      })
      alert('Success Upload')
    }
  }
  useEffect(()=>{
    if (session?.user?.role !== 'STUDENT' && session) setCanUpload(true)
    getData().then((res)=>{
      setData(res)
    })
  },[])
  return (
    <section className='w-full max-w-4xl py-2 px-5 flex flex-col gap-5'>
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
      {canUpload && <section className='bg-white px-6 py-4 rounded-xl'>
        <form onSubmit={handleUpload} className={`flex flex-col`}> 
          <Input
            isRequired
            type="text"
            name='name'
            label="File Name"
            className="shadow"
            onFocus={()=>setOpen(true)}
          />
          <div className={`flex gap-3 ${open?'h-fit mt-4' :'h-0'} overflow-hidden transition-all`}>
            <input
              type="file"
              className="flex-1"
              name='file'
            />
            <Button color="default" className="max-w-xs" type='reset' onClick={()=>setOpen(false)}>
              Cancel
            </Button>
            <Button color="primary" className="max-w-xs" type='submit'>
              Upload
            </Button>
          </div>
        </form>
      </section>}
      <section>
        {data?.resource?.length > 0 ? <ModuleList data={data?.resource}/> : <EmptyModule/>}
      </section>
      
    </section>
  )
}
