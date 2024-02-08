"use client";
import { Card,CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Button, Radio, RadioGroup } from '@nextui-org/react';
import React from 'react'

type quizItemProps = {
  no: any,
  title: string,
  choices: string[],
  handleInputChange: any
}

export default function QuizItem({no,title, choices,handleInputChange}: quizItemProps){
  return (
    <div className='space-y-1'>
      <Card id={no} className='p-4 w-full border-gray-300 border-1' radius='none' shadow='none'>
        <h1>Question {no+1}</h1>
      </Card>
      <Card id={no} className='p-2 w-full border-gray-300 border-1' radius='none' shadow='none'>
        <CardBody className='space-y-2'>
          <h1>{title}</h1>
          <RadioGroup onChange={(e)=>handleInputChange(e,title)}>
          {choices.map((choice, index) => {
            return (
                <Radio key={index} value={choice}>{choice}</Radio>
            )
          })}
          </RadioGroup>
        </CardBody>
      </Card>
    </div>
    
  )
}
