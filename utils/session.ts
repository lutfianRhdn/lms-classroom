import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';
export default async function getSessionUser() {
  const prisma = new PrismaClient();
  const session = await getServerSession();
  if(!session?.user) return null;
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(session?.user?.email ||'0')
    },
  });
  return user;
}