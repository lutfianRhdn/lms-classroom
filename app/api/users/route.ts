import getResponse from '@/utils/getResponse';
import getSessionUser from '@/utils/session';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest } from 'next';
const prisma = new PrismaClient()
export async function GET(req: NextApiRequest, response: Response) {
  const users = await prisma.user.findMany()
  return getResponse(users, 'success get all users', 200);
}