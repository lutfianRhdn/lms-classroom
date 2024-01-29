"use client";
import QuizItem from "@/components/quiz/quizItem";
import QuizList from "@/components/quiz/quizList";
import QuizNavigation from "@/components/quiz/quizNavigation";
import fetchApi from "@/utils/fetchApi";
import { Button } from "@nextui-org/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
type dataProps = {
  name: string,
  question: {
    title: string,
    choices: string[]
  }[]
}

async function getQuizDetail(id: any) {
  const res = await fetchApi(`/quiz/${id}`, "GET");
  return res.data
}

export default function page({params: { id }}: {params: { id: any }}) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState<dataProps>({ name: '', question: [{ title: '', choices: [''] }] })
  const [formData, setFormData] = useState<{ title: string, answer: string }[]>([]);
  async function handleSubmit(e: any) {
    e.preventDefault();
    if (formData.length !== data.question.length) {
      setErrorMessage('Please answer all questions');
      return;
    }
    const res = await fetchApi(`/quiz/${id}`, 'POST', formData);
    if (!res.data) setErrorMessage(res.message);
    else router.push(`/quiz/${id}/result`);
  }

  const handleInputChange = (e: any, question: string) => {
    setErrorMessage('');
    const updatedFormData = [...formData];
    const questionIndex = updatedFormData.findIndex((data) => data.title === question);
    if (questionIndex !== -1) {
      updatedFormData[questionIndex] = {
        ...updatedFormData[questionIndex],
        answer: e.target.value
      };
    } else {
      updatedFormData.push({
        title: question,
        answer: e.target.value
      });
    }
    setFormData(updatedFormData);
  };

  useEffect(() => {
    getQuizDetail(id).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <header className="bg-white p-4 px-10">
        <h1 className="font-bold text-dark-blue text-xl">{data.name}</h1>
      </header>
      <section>
        <div className="flex flex-col md:grid p-5 lg:px-28 gap-3 md:grid-cols-3">
          <QuizList question={data.question} handleInputChange={handleInputChange} className='space-y-4 container order-2 md:order-1 col-span-2'/>
          <QuizNavigation handleSubmit={handleSubmit} question={data.question} formData={formData} errorMessage={errorMessage} className='container order-1 md:order-2 h-fit px-5 py-2 md:sticky md:top-20 '/>
        </div>
      </section>
    </>
      
    
  );
}
