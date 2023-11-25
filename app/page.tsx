"use client";
import { CourseList } from "@/components/course/CourseList";
import { Course } from "@/config/data-dummy";
export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-2 px-2 md:py-5 md:px-10">
			<CourseList data={Course}/>
		</section>
	);
}
