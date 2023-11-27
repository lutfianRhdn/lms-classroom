import { User } from '@/types';
import getResponse from '@/utils/getResponse';
import getSessionUser from '@/utils/session';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest } from 'next';
import { getSession } from "next-auth/react"
const prisma = new PrismaClient()
export async function GET(req: NextApiRequest, response: Response) {
  const session: User |null= await getSessionUser();
  const coursesUser = await prisma.course.findMany({
    where: {
      user_course: {
        some: {
          user_id: session?.id
        }
      }
    }
  })
  
  return getResponse(coursesUser, 'success get all courses', 200);

}