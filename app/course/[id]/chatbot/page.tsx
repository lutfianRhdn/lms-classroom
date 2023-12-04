"use client";
import React, { useEffect, useState } from 'react'
import {Card, CardBody, Input, Button} from "@nextui-org/react";
import fetchApi from '@/utils/fetchApi';

export default function page({params}:any) {

  const [message, setMessage] = useState([]);
  const [data, setData] = useState<any[]>([]);

  const handleSubmitChat = async (e: any) => {
    e.preventDefault();
    setData((prev:any)=>([
      ...prev,
      {
        role: "user",
        content: message,
      }
    ]))
    const res = await fetchApi(`/courses/${params.id}/chat`, 'POST', {
        message: message 
      })
    if (res) {
      setData((prev:any)=>([
        ...prev,
        res.data
      ]))
    }
  }

  useEffect(()=>{
    console.log(data)
  },[data])
  
  return (
    <section className='w-full max-w-4xl py-2 px-5 flex flex-col gap-5'>
      <section className='bg-white px-6 py-4 rounded-xl'>
        <form onSubmit={handleSubmitChat} className={`flex gap-3 align-center`}> 
          <Input
            isRequired
            type="text"
            name='message'
            className="shadow"
            onChange={(e: any) => setMessage(e.target.value)}
            placeholder='Enter your question here...'
          />
          <Button color="primary" className="max-w-xs" type='submit'>
            Send
          </Button>
        </form>
      </section>
      <section>
        {data.map((message:any) =>{
          return (
            <Card className='mb-2'>
              <CardBody>
                <p>{message.content}</p>
                <hr />
                { message.catation }
              </CardBody>
            </Card>
          )
        })}
      </section>
    </section>
  )
}
