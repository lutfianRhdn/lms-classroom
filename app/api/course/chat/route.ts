import getResponse from '@/utils/getResponse';
import getSessionUser from '@/utils/session';
import { NextApiRequest } from 'next';
import { getSession } from "next-auth/react"
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import { DefaultAzureCredential } from "@azure/identity";

export async function POST(req: NextApiRequest, response: Response) {
  const session = await getSessionUser();
	const endpoint = process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT as string;
	const azureApiKey = process.env.NEXT_PUBLIC_AZURE_OPENAI_KEY as string;
	const deploymentId = process.env.NEXT_PUBLIC_AZURE_DEPLOYMENT_ID as string;
	const searchEndpoint = process.env.NEXT_PUBLIC_AZURE_SEARCH_ENDPOINT as string;
	const searchKey = process.env.NEXT_PUBLIC_AZURE_SEARCH_KEY as string;
	const searchIndex = process.env.NEXT_PUBLIC_AZURE_SEARCH_INDEX as string;

  console.log("== Chat Using Your Own Data Sample ==");
  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));

  const messages = [
    { role: "user", content: "Apa itu UML?" },
  ];

  // Get chat responses from Azure OpenAI deployment using your own data via Azure AI Search
  const events = client.listChatCompletions(deploymentId, messages, { 
    azureExtensionOptions: {
      extensions: [
        {
          type: "AzureCognitiveSearch",
          parameters: {
            endpoint: searchEndpoint,
            key: searchKey,
            indexName: searchIndex,
          },
        },
      ],
    },
  });

  // Display chat responses
  for await (const event of events) {
    for (const choice of event.choices) {
      const delta = choice.delta?.content;
      const role = choice.delta?.role;
      if (delta && role) {
        console.log(`${role}: ${delta}`);

        const contextMessages = choice.delta?.context?.messages;
        if (!!contextMessages) {
            console.log("===");

            console.log("Context information (e.g. citations) from chat extensions:");
            console.log("===");
            for (const message of contextMessages) {
                // Display context included with chat responses (such as citations)
                console.log(message.content);
            }
        }
      }
    }
  }

	
  return getResponse(['asdnaldnaldnkas'], 'success', 200);
}