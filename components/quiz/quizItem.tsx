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
    <Card id={no} className='p-4 w-full'>
      <CardHeader>{no+1}. {title}</CardHeader>
      <CardBody>
        <RadioGroup onChange={(e)=>handleInputChange(e,title)}>
        {choices.map((choice, index) => {
          return (
              <Radio key={index} value={choice}>{choice}</Radio>
          )
        })}
        </RadioGroup>
      </CardBody>
    </Card>
  )
}