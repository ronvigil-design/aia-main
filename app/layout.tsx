import type { Metadata } from "next";
import "./globals.css";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://aia-main.turner-globa-6193.chatgpt.site"
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AIA Main — The AI Agency for the Future of Talent",
  description:
    "AIA Talent helps people create, protect, manage, license, and monetize authorized digital versions of their identity.",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: "AIA Main — The AI Agency for the Future of Talent",
    description:
      "Create, protect, manage, license, and monetize authorized digital identity.",
    images: [
      {
        url: `${siteUrl}/og.png`,
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
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const assetVariables = {
    "--aia-hero-image": `url("${basePath}/aia-hero.png")`,
    "--aia-platform-image": `url("${basePath}/aia-platform-reference.png")`,
  } as React.CSSProperties;

  return (
    <html lang="en">
      <body style={assetVariables}>{children}</body>
    </html>
  );
}
