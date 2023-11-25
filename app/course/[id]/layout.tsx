import TabsCourse from "@/app/course/[id]/tabs";

export default function CourseLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<div className="px-8">
      	<TabsCourse/>
			</div>
      <div className="flex justify-center items-center py-2">
			  {children}
      </div>
		</section>
	);
}
