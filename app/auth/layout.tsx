
export default function AuthLayout({
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
