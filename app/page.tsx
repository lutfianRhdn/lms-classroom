
"use client";
import { CourseList } from "@/components/course/CourseList";
import { Course } from "@/config/data-dummy";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 p-8">
			<CourseList data={Course}/>
		</section>
	);
}
