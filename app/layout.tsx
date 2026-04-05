import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NitishKumar Naik | Full Stack Developer",
  description:
    "Portfolio of NitishKumar Naik showcasing projects, skills, and experience in web development",
  keywords: [
    "NitishKumar Naik",
    "portfolio",
    "developer",
    "nextjs",
    "react",
  ],
  openGraph: {
    title: "NitishKumar Naik | Full Stack Developer",
    description:
      "Portfolio of NitishKumar Naik showcasing projects, skills, and experience in web development",
    images: ["/preview.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NitishKumar Naik | Full Stack Developer",
    description:
      "Portfolio of NitishKumar Naik showcasing projects, skills, and experience in web development",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f2ee] text-[#111111]">{children}</body>
    </html>
  );
}
