
import Layout from "@/layouts/layout";
import fetchApi from "@/utils/fetchApi";
async function getQuizDetail(id: any) {
  const res = await fetchApi(`/quiz/${id}`, "GET");
  return res.data
}

export default async function QuizLayout({
	children,
  params: { id }
}: {
  params: { id: any };
	children: React.ReactNode;
}) {
  const data = await getQuizDetail(id)
	return (
    <Layout>
      {children}
    </Layout>
    
	);
}
