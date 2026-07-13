import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Run on every path except Next internals, the API routes, and files with an
  // extension (static assets, images, favicon, etc.).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
