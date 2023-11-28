"use client";
import React, { useEffect,useState } from 'react'
import QuizItem from '@/components/quiz/quizItem';
import fetchApi from '@/utils/fetchApi';

export default function page({params}:any) {
  const [quiz, setQuiz] = useState([]);
  async function  getData() {
    const quiz = (await fetchApi(`/quiz/${params.id}`, 'GET'));
    return quiz.data;
  }
  useEffect(()=>{
    getData().then((res)=>{
      setQuiz(res)
    })
  },[])
  console.log(quiz)
  return (
    <>
      {/* {quiz.map((item: any, index: number) => {
        return (
          <QuizItem key={index} title={item.question} choices={item.choices} />
        )
      })} */}
    </>
  )
}
