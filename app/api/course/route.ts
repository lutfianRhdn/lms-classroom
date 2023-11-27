import getResponse from '@/utils/getResponse';
import getSessionUser from '@/utils/session';
import { NextApiRequest } from 'next';
import { getSession } from "next-auth/react"
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

export async function GET(req: NextApiRequest, response: Response) {
  const session = await getSessionUser();
	
  return getResponse(['asdnaldnaldnkas'], 'success', 200);
}