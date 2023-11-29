
"use client";
import { useState, useEffect } from "react";
import fetchApi from "@/utils/fetchApi";
import { Input, Spinner } from "@nextui-org/react";
export default function Home() {
  const quiz = [
    {title:'a',choices:['a','b','c','d']},
  ]
  const [loading, setLoading] = useState(true);
  async function getData() {
    const courses = (await fetchApi('/courses', 'GET'));
    return courses.data;
  }
  useEffect(() => {
      setLoading(false)
  }, [])
  if (loading) return <Spinner className="w-full text-center h-screen" />
  return (
    <section className="flex flex-col items-start justify-center gap-4 p-8">
      {quiz.map((item, index) => (
        <>
          <Input
            key={index}
            label={item.title}
            placeholder="Enter your answer"
            width="100%"
          />
        </>
      ))}
    </section>
  );
}
