import TabsCourse from "@/app/course/[id]/tabs";

export default function CourseLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="min-h-screen">
      <TabsCourse/>
      <div className="flex justify-center items-center py-2">
			  {children}
      </div>
		</section>
	);
}
