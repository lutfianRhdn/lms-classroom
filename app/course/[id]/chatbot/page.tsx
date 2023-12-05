"use client";
import React, { useEffect, useState } from 'react'
import {Card, CardBody, Input, Button, CardFooter} from "@nextui-org/react";
import fetchApi from '@/utils/fetchApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { chatbot } from '@/config/data-dummy';
import { Spinner } from '@nextui-org/react';
import Link from 'next/link';
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
  const replacePatternWithSup = (text:string) => {
    const regex = /\[doc(\d+)\]/g;

    // Replace each match with its corresponding number wrapped in <sup> tags
    const outputText = text.replace(regex, (match, number) => {
      return `<sup>${number}</sup>`;
    });

    return <div dangerouslySetInnerHTML={{__html:outputText}}/>;
  };


  return (
    <section className='w-full light:bg-[#E7F1F9] flex justify-center items-center '>
      <section className='max-w-4xl w-full rounded-lg flex flex-col h-[80vh]'>
        <section className='flex-grow overflow-auto py-2 px-4'>
          {chatbot.length != 0 ? (chatbot.map((message: any,index:number) => {
            const parsedMessage = JSON.parse(message.context?.messages[0]?.content || '{}')?.citations
            return (
              <Card key={index} className={`mb-4 w-fit ${message.role == 'user'?"ms-auto bg-blue-400 text-white":''}`}>
                <CardBody>
                  <div>{ replacePatternWithSup(message.content)}</div>
                </CardBody>
                <CardFooter className={`flex flex-wrap gap-3 ${(!parsedMessage  || parsedMessage.length == 0) && 'hidden'}`}>
                  <h3 className='font-semibold'>Reference :</h3>
                  {(message.role == 'assistant' && parsedMessage) &&
                    parsedMessage.map((item: any,index:number) => {
                      if (!item.title) return null
                      return (
                        <Link key={index} href={item.url || ''} className='text-blue-500 hover:underline bg-blue-100 dark:bg-blue-950 px-2 rounded-lg'>
                          {index+1}. {item.title}
                        </Link>
                      )
                    })
                  }
                </CardFooter>
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
