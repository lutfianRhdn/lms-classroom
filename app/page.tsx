
"use client";
import { useState,useEffect } from "react";
import { CourseList } from "@/components/course/CourseList";
import { Course } from "@/config/data-dummy";
import fetchApi from "@/utils/fetchApi";
import EmptyCourse from "@/components/course/emptyCourse";
import { Spinner } from "@nextui-org/react";
import { useContext } from "react";
import { MenuContext } from "./context/MenuContext";
export default function Home() {
	const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const {search} = useContext(MenuContext)
  const [loading, setLoading] = useState(true);
	async function  getData() {
    const courses = (await fetchApi('/courses', 'GET'));
    return courses.data;
  }
  useEffect(()=>{
    setDataSearch(data.filter((item:any)=>item.name.toLowerCase().includes(search.toLowerCase())))
  },[search])
  
  useEffect(()=>{
    getData().then((res)=>{
      setData(res)
      setLoading(false)
    })
  }, [])
  if (loading) return <Spinner className="w-full text-center h-screen"/>
	return (
		<section className="flex flex-col items-start justify-center gap-4 p-8">
      {data?.length > 0 ? <CourseList data={search !== ''? dataSearch:data}/>:<EmptyCourse/> }
		</section>
	);
}
