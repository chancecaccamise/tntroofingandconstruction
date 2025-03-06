import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";



const font = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Reef Aquatics",
  description: "Website Mockup created by Mangia DMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.variable} ${font.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
