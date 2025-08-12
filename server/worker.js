import { Worker } from 'bullmq';
const worker = new Worker('file-upload-queue', async job => {
  async(job)=>{
    console.log(`job:`,job.data)
    const data=JSON.parse(job.data)

    const loader=new PDFLoader(data.path)
    const docs=await loader.load()
    const embeddings=new OpenAIEmbeddings({
        model:'text-embedding-3-small',
        apiKey:""
    })
    const vectorStore=await QuadrantVectorStore.fromExistingCollection(
        embeddings,
        {
            url:"http://localhost:6333",
            collectionName:"langchainjs-testing"
        }
    );
    await vectorStore.addDocument(docs)
    console.log(`All docs are added to vector store`)
    
  }
}, { concurrency: 100,
    connection:{
        host:'localhost',
        port:'6379'
    }
 });