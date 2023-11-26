import getResponse from '@/utils/getResponse';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest } from 'next';

const prisma = new PrismaClient()

export async function GET(req: NextApiRequest, { params }: any) {
  const { id } = params;
  const coursesUser = await prisma.course.findUnique({
    where: {
      id: +id
    }, include: {
      resource: true
    }
  })
  
  return getResponse(coursesUser, 'success get all courses', 200);

}