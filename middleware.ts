import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
    '/',
    '/events/:id', // Assuming you want this route to be publicly accessible
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing']);

    const isIgnoredRoute = createRouteMatcher([    
      '/api/webhook/clerk',
      '/api/webhook/stripe',
      '/api/uploadthing'
    ]);
    export default clerkMiddleware((auth, req) => {
      // If it's a public route, do nothing
      if (isPublicRoute(req)) return;
      if (isIgnoredRoute(req)) return;
     // For any other route, require authentication
      auth().protect();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 
