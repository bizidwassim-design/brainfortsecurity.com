import type { Metadata, Viewport } from "next";

import "../globals.css";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": 0,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#fffdf7",
};

export default function PrivatePortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#fffdf7] text-[#24445d] antialiased">
        {children}
      </body>
    </html>
  );
}
