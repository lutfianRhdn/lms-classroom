import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      const path = req.nextUrl.pathname;
      // console.log(token)
      if(!token) return false;
      if (path.startsWith("/admin")) {
        return token?.role === "admin";
      }

      return token !== null;
    }
  }
})

// Define paths for which the middleware will run
export const config = {
  matcher: [
    '/api/test'
  ]
}