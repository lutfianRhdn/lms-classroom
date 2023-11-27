import getResponse from '@/utils/getResponse';
import getSessionUser from '@/utils/session';
import { NextApiRequest } from 'next';
import { getSession } from "next-auth/react"
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

export async function POST(req: NextApiRequest, response: Response) {
  const session = await getSessionUser();
	const endpoint = process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT as string;
	const azureApiKey = process.env.NEXT_PUBLIC_AZURE_OPENAI_KEY as string;
	
	const messages = [
		{ role: "user", content: "kapan indonesia merdeka?" },
	];
	
  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
	const deploymentId = "aicdeploymodel";
  const result = await client.getChatCompletions(deploymentId, messages);
  
	console.log(messages)
  for (const choice of result.choices) {
    console.log(choice.message);
  }
	
  return getResponse(['asdnaldnaldnkas'], 'success', 200);
}