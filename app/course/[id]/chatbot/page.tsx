"use client";
import React, { useEffect, useState } from 'react'
import {Card, CardBody, Input, Button} from "@nextui-org/react";
import fetchApi from '@/utils/fetchApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { chatbot } from '@/config/data-dummy';
import { Spinner } from '@nextui-org/react';
export default function page({params}:any) {
  const [message, setMessage] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [loading,setLoading] = useState(false)
  const handleSubmitChat = async (e: any) => {
    e.preventDefault();
    setData((prev:any)=>([
      ...prev,
      {
        role: "user",
        content: message,
      }
    ]))
    setLoading(true)
    const res = await fetchApi(`/courses/${params.id}/chat`, 'POST', {
        message: message 
      })
    if (res) {
      setLoading(false)
      setData((prev:any)=>([
        ...prev,
        res.data
      ]))
      setMessage('')
    }

  }
  useEffect(()=>{
    console.log(data)
  },[data])

  return (
    <section className='w-full light:bg-[#E7F1F9] flex justify-center items-center '>
      <section className='max-w-4xl w-full rounded-lg flex flex-col h-[80vh]'>
        <section className='flex-grow overflow-auto py-2 px-4'>
          {data.length != 0 ? (data.map((message:any) =>{
            return (
              <Card className={`mb-4 w-fit ${message.role == 'user'?"ms-auto bg-blue-400 text-white":''}`}>
                <CardBody>
                  <p>{message.content}</p>
                  { message.catation }
                </CardBody>
              </Card>
            )
          })):(
            <section className=' text-center space-y-5 h-full flex items-center justify-center flex-col'>
              <FontAwesomeIcon icon={faComments} className='fa-2xl'/>
              <h1 className='text-2xl'>How Can I Help You?</h1>
            </section >
          )}
          {loading && <Card className={`mb-4 w-fit px-5`}>
            <CardBody>
              <Spinner size='sm'/>
            </CardBody>
          </Card>}
        </section>
        <section className='pb-4 pt-4 px-6'>
          <form onSubmit={handleSubmitChat} className='flex gap-4'> 
            <Input
              isRequired
              type="text"
              name='message'
              value={message}
              className="shadow py-0"
              onChange={(e: any) => setMessage(e.target.value)}
              placeholder='Enter your question here...'
              endContent={
                <Button variant='light' isIconOnly type='submit'>
                  <FontAwesomeIcon icon={faPaperPlane}/>
                </Button>
              }
            />
          </form>
        </section>
      </section>
      
    </section>
  )
}
