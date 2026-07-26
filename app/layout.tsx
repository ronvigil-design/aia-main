import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "aia-main.turner-globa-6193.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "AIA Main — The AI Agency for the Future of Talent",
    description:
      "AIA Talent helps people create, protect, manage, license, and monetize authorized digital versions of their identity.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "AIA Main — The AI Agency for the Future of Talent",
      description:
        "Create, protect, manage, license, and monetize authorized digital identity.",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1536,
          height: 1024,
          alt: "AIA Talent — The AI Agency for the Future of Talent",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "AIA Main — The AI Agency for the Future of Talent",
      description:
        "Create, protect, manage, license, and monetize authorized digital identity.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
