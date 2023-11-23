import getResponse from '@/utils/getResponse';
import { getSession } from "next-auth/react"
export function GET(request: Request, response: Response) {
  const session = getSession()
  return getResponse(null, 'Hello World', 200);
}