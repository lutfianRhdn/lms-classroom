"use client";
import React from 'react'
import { Card,CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import NextLink from 'next/link'
export default function QuizNavigation({handleSubmit,question,formData,...props}:any) {
  return (
    <Card {...props}>
      <CardHeader>Quiz Navigation</CardHeader>
      <CardBody className='flex flex-row mx-auto flex-wrap md:grid md:grid-cols-3 lg:grid-cols-5 gap-5 w-fit'>
        {question.map((item: any, index: number) => {
          const answered = formData.find((data: any) => data.title === item.title);
          return (
            <NextLink href={`#${index}`} key={index}  className={`${answered?'bg-green-300':'bg-gray-300'} items-center flex justify-center w-8 h-8 md:w-10 md:h-10`}>{index+1}</NextLink>
          )
        })}
      </CardBody>
      <CardFooter>
        <Button onClick={handleSubmit} className='w-full'>Submit</Button>
      </CardFooter>
    </Card>
  )
}
