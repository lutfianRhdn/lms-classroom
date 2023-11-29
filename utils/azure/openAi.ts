import { openAiClient } from "@/config/azure"

const modelName = process.env.AZURE_OPENAI_MODEL_NAME as string
const endpoint = process.env.AZURE_OPENAI_ENDPOINT as string
const azureApiKey = process.env.AZURE_OPENAI_API_KEY as string
export const getChatCompletions = async (indexName: string, message: string) => {
 return await  openAiClient.getChatCompletions(modelName, [{ role: 'user', content: message }], {
    azureExtensionOptions: {
      extensions: [
        {
          type: "AzureCognitiveSearch",
          parameters: {endpoint,key:azureApiKey,indexName},
        },
      ],
    },
  })

}