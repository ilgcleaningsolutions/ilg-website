import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

const SITE_NAME = "ILG Cleaning Services";
const TITLE = "ILG Cleaning Services — Industrial Cleaning Solutions";
const DESCRIPTION =
  "Professional cleaning solutions powered by industry-leading brands. Authorized reseller for Klinmak and Tecnovap.";

// New ILG logo composited onto the brand navy as a 1200×630 social-share card (Cloudinary transform).
const OG_IMAGE =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/c_fit,w_820/c_pad,w_1200,h_630,b_rgb:1d2c4d/v1781883598/igl-dark-mode-logo_ulpp0u.png";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ilgcleaning.com",
  ),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
