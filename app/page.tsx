import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { CourseList } from "@/components/CourseList";
import { Course } from "@/config/Mock_Course";
export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-2 md:py-5">
			<CourseList data={Course}/>
		</section>
	);
}
