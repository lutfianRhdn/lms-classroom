import { User } from "@/types";
import getResponse from "@/utils/getResponse";
import getSessionUser from "@/utils/session";
import { PrismaClient } from "@prisma/client";
import { unlink, writeFile } from "fs/promises";
import * as openai from "@azure/openai";

const prisma = new PrismaClient()
export async function POST(req: Request) {
  const data = await req.formData();
  const course_id = data.get('course_id') as string;
  const name = data.get('name') as string;
  const file: File | null = data.get('file') as unknown as File;
  const session = await getSessionUser() as User
  const user_id = 3
  if (!user_id || !course_id || !file || !name) return getResponse(null, ' please fill all data!', 400);
  if (file.size > 10000000) return getResponse(null, 'file size limit 10mb', 400);
  const date = new Date()
  
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const path = `./public/resources/${date.getTime()}-${file.name}`
  await writeFile(path, buffer)
  const resource = await prisma.resource.create({
    data: {
      name,
      path: path.replace('./public', ''),
      course_id: +course_id,
      user_id: +user_id
    }
  })
  // Import the OpenAI library
  // const openai = require('openai-api');

  // Set your API key
  const OPENAI_API_KEY = process.env.NEXT_PUBLIC_AZURE_OPENAI_KEY as string;
  openai.apiKey = OPENAI_API_KEY;

  // Specify the file path and the purpose of the file
  // The purpose can be one of the following: 'search', 'classifications', 'answers', or 'summarizations'
  const filePath = path;
  const filePurpose = 'YOUR_FILE_PURPOSE';

  // Create a read stream for the file
  const fs = require('fs');
  const fileStream = fs.createReadStream(filePath);

  // Create the file using the OpenAI API
  openai.Files.create({
    file: fileStream,
    // purpose: filePurpose
  }).then(file => {
    // Print the file ID and status
    console.log(file.id);
    console.log(file.status);
  }).catch(err => {
    // Handle the error
    console.error(err);
  });


  return getResponse(resource, 'success get create new resource', 200);
}