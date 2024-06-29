import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';



export default clerkMiddleware((auth, req) => {
  const publicRoutes = createRouteMatcher([
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]);
  
  const ignoredRoutes = createRouteMatcher([
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]);
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};