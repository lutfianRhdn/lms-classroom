
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="px-5 z-50 w-screen h-screen absolute top-0 left-0 bg-gray-100">
			{children}
		</section>
	);
}
