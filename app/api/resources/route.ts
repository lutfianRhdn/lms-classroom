import getResponse from "@/utils/getResponse";
import { PrismaClient } from "@prisma/client";
import { unlink, writeFile } from "fs/promises";
const prisma = new PrismaClient()
export async function POST(req: Request) {
  const data = await req.formData();
  const user_id = data.get('user_id') as string;
  const course_id = data.get('course_id') as string;
  const name = data.get('name') as string;
  const file:File|null = data.get('file')  as unknown as File;

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
  return getResponse(resource, 'success get create new resource', 200);
}