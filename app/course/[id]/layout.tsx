import TabsCourse from "@/app/course/[id]/tabs";

export default function CourseLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="w-full min-h-[90vh] flex flex-col">
      <TabsCourse/>
      <div className="flex justify-center flex-1 items-stretch mx-4">
			  {children}
      </div>
		</section>
	);
}
