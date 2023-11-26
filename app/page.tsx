
"use client";
import { useState,useEffect } from "react";
import { CourseList } from "@/components/course/CourseList";
import { Course } from "@/config/data-dummy";
import fetchApi from "@/utils/fetchApi";
import EmptyCourse from "@/components/course/emptyCourse";
export default function Home() {
	const [data, setData] = useState([]);
	async function  getData() {
    const courses = (await fetchApi('/admin/courses', 'GET'));
    return courses.data;
  }
  useEffect(()=>{
    getData().then((res)=>{
      setData(res)
    })
  },[])
	return (
		<section className="flex flex-col items-center justify-center gap-4 p-8">
			{data.length > 0 ?<CourseList data={data}/> : <EmptyCourse/> }
		</section>
	);
}
