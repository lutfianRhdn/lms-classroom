"use client";
import React from 'react'
import QuizItem from './quizItem'
export default function QuizList({question, handleInputChange,...props}:any) {
  return (
    <div {...props}>
      {question.map((item: any, index: number) => {
        return (
          <QuizItem key={index} no={index} title={item.title} choices={item.choices} handleInputChange={handleInputChange}/>
        )
      })}
    </div>
  )
}
