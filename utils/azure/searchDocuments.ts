import { clientIndex, clientIndexer } from "@/config/azure"

export const createIndex = async (indexName: string) => {
  try {
    
    await clientIndex.createIndex({
      name: indexName,
      fields: [
        { name: 'document_id', type: 'Edm.String', key: true },
        { name: 'content', type: 'Edm.String' },
        { name: 'filename', type: 'Edm.String' },
        { name: 'url', type: 'Edm.String' },
      ]
    })
  console.info(`[SYSTEM] created index : ${indexName} `)

    return true
  } catch (error) {
    console.error(error)
    return error
  }

}
export const createIndexer = async (indexerName :string,dataSourceName:string,indexName:string) => {
  
  await clientIndexer.createIndexer({
    name: indexerName,
    dataSourceName:dataSourceName,
    targetIndexName: indexName,
    parameters: {
      configuration: {
        indexedFileNameExtensions: '.pdf,.docx,.doc,.pptx,.ppt,.xlsx,.xls,.txt',
        parsingMode: 'default',
      }
    }
  
  });
  console.info(` [SYSTEM] created indexer: ${indexerName} `)
}
export const craateDatasource = async (dataSourceName:string,containerName:string) => {
  await clientIndexer.createDataSourceConnection({
    name: dataSourceName,
    container: {name:containerName},
    type: 'azureblob',
    connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING as string
  }, {
    requestOptions: {
        allowInsecureConnection:true
      }
  })
  console.info(`[SYSTEM] created datasource : ${dataSourceName} `)

}


export const runIndexer = async (indexerName: string) => { 
  console.info(`[SYSTEM] run indexer : ${indexerName} `)
  return await clientIndexer.runIndexer(indexerName)
}