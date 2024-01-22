
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="px-5">
			{children}
		</section>
	);
}
