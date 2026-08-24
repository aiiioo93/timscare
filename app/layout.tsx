import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Timscare Institut",
    template: "%s | Timscare Institut",
  },
  description:
    "Institut de beauté spécialisé dans les soins du visage, les soins du corps, les peelings et les rituels bien-être.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={geist.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}