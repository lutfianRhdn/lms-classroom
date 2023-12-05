"use client";
import React,{ useEffect, useState } from 'react'
import { Course,Resource } from '@/config/data-dummy'
import { Image } from '@nextui-org/image';
import { Card, CardFooter } from '@nextui-org/card';
import ModuleList from '@/components/module/moduleList';
import fetchApi from '@/utils/fetchApi';
import EmptyModule from '@/components/module/emptyModule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { useSession } from 'next-auth/react';
import { Spinner } from '@nextui-org/react';
import { User } from '@/types';

export default function page({params}:any) {

  const { data:session } = useSession();
  const userData = session?.user as User
  const [data, setData] = useState([]) as any;
  const [open, setOpen] = useState(false);
  const [canUpload, setCanUpload] = useState(false);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const course = Course.find((course) => course.id == params.id);
  async function  getData() {
    const courses = (await fetchApi(`/courses/${params.id}`, 'GET'));
    return courses.data;
  }
  const handleUpload = async (e: any) => {
    e.preventDefault();
    setLoadingUpload(true)
    const formData = new FormData(e.target);
    formData.append('course_id', params.id);
    const res = await fetch(`/api/resources`, {
      method: 'POST',
      body: formData,
    })
    setLoadingUpload(false)
    if (res) {
      getData().then((res)=>{
        setData(res)
      })
    }
  }

  useEffect(()=>{
    if (userData?.role !== 'STUDENT' && session) setCanUpload(true)
    else setCanUpload(false)
  },[session])

  useEffect(()=>{
    getData().then((res)=>{
      setData(res)
      setLoading(false)
    })
  },[])

  data?.module?.sort((a:any,b:any)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  if (loading) return <Spinner className="w-full text-center"/>
  return (
    <section className='w-full max-w-4xl py-8 flex flex-col gap-5'>
      <section>
        <Card className="w-full h-60 col-span-12 sm:col-span-7">
          <Image
            removeWrapper
            alt="Course banner"
            className="z-0 h-full object-cover"
            src="/liquid-cheese.svg"
          />
          <CardFooter className="absolute bottom-0 z-10">
            <h1 className="text-3xl font-semibold text-white">{data?.name}</h1>
          </CardFooter>
        </Card>
      </section>
      {canUpload && <section className='bg-white px-6 py-4 rounded-xl w-full'>
        <form onSubmit={handleUpload} className={`flex flex-col`}> 
          <Input
            isRequired
            type="text"
            name='name'
            label="File Name"
            className="shadow"
            onFocus={()=>setOpen(true)}
          />
          <div className={`w-full flex gap-3 ${open?'h-fit mt-4' :'h-0'} flex-wrap overflow-hidden transition-all`}>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              type="file"
            />
            <div className='flex justify-end w-full gap-3'>
              <Button color="default" size='sm' className="max-w-xs" type='reset' onClick={()=>setOpen(false)}>
                Cancel
              </Button>
              <Button color="primary" size='sm' className="max-w-xs" type='submit' isLoading={loadingUpload}>
                Upload
              </Button>
            </div>
          </div>
        </form>
      </section>}
      <section>
        {data?.module?.length > 0 ? <ModuleList userRole={userData?.role}  module={data?.module}/> : <EmptyModule/>}
      </section>
    </section>
  )
}
