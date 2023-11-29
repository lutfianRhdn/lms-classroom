"use client";
import { Card,CardHeader,CardBody,CardFooter } from '@nextui-org/card'
import { Input } from '@nextui-org/input'
import { Radio, RadioGroup } from '@nextui-org/react';
import React, { useState } from 'react'

export default function FormQuiz({question,setQuestion,handleRadioChange,handleInputQuestion,handleInputChoice}:any) {
  // function handle input question and choices

  console.log(question);
  return (
    <Card className=''>
      <CardHeader>
        <Input label='Question' type='text' onChange={handleInputQuestion}/>
      </CardHeader>
      <CardBody>
        <Input label='Choice 1' type='text' onChange={(e:any)=>handleInputChoice(e,0)}/>
        <Input label='Choice 2' type='text' onChange={(e:any)=>handleInputChoice(e,1)} />
        <Input label='Choice 3' type='text' onChange={(e:any)=>handleInputChoice(e,2)}/>
        <Input label='Choice 4' type='text' onChange={(e:any)=>handleInputChoice(e,3)}/>
      </CardBody>
      <CardFooter>
        <RadioGroup onChange={handleRadioChange}>
          <Radio value={'0'}>Choice 1</Radio>
          <Radio value={'1'}>Choice 2</Radio>
          <Radio value={'2'}>Choice 3</Radio>
          <Radio value={'3'}>Choice 4</Radio>
        </RadioGroup>
      </CardFooter>
    </Card>
  )
}
