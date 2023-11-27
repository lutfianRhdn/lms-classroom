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
export default function page({params}:any) {
  const [data, setData] = useState([]);
  const [isShownUpload, setIsShownUpload] = useState(false);
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
      setIsShownUpload(false);
      getData().then((res)=>{
        setData(res)
      })
      alert('Success Upload')
    }
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
      <section className='fixed right-10 bottom-0  shadow-lg'>
        <section className='bg-gray-300 px-5 py-3 rounded-t-lg cursor-pointer shadow' onClick={() => setIsShownUpload(!isShownUpload)} ><FontAwesomeIcon icon={faUpload} className='ml-4 text-gray-800' /> Upload Some Resource </section>
        
        <form onSubmit={handleUpload} className={`bg-white px-5 py-3 flex flex-col gap-5 ${!isShownUpload && 'hidden' } `}> 
          <Input
            isRequired
            type="text"
            name='name'
            label="Name"
            className="max-w-xs shadow"
          />
          <input
            type="file"
            className="max-w-xs"
            name='file'
          />
          <Button color="primary" className="max-w-xs" type='submit'>
            Upload
          </Button>
        </form>
      </section>
    </section>
  )
}
