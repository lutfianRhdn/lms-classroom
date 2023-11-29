"use client";
import { Input } from '@nextui-org/input';
import React,{ useState } from 'react'
import fetchApi from '@/utils/fetchApi';
import { useParams } from 'next/navigation';
import { QuizCreator } from '@/components/quiz/QuizCreator';
import { useRouter } from 'next/navigation';
export default function page() {
  const { id } = useParams();
  const router = useRouter();
  const [name, setName] = useState('');
  async function handleSubmit(e: any, data: any) {
    e.preventDefault();
    try {
      await fetchApi('/quiz','POST', data)
      router.push(`/course/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className='container m-4 space-y-4 max-w-xl mx-auto'>
      <Input label='Quiz Name' type='text' id='name' variant='underlined' onChange={(e)=>setName(e.target.value)}/>
      <QuizCreator courseId={id} quizName={name} onSubmit={handleSubmit}/>
    </section>
  )
}
