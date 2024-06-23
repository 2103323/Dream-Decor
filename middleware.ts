import { authMiddleware } from "@clerk/nextjs/server";
export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: ['/',
    '/events/:id', // Assuming you want this route to be publicly accessible
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'],

  // Define routes to ignore from Clerk's authentication middleware
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

