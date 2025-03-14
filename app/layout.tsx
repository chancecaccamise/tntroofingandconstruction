import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voelker Construction & Repairs",
  description: "Website Mockup for Voelker Construction & Repairs.",
  icons: {
    icon: "/voelker favicon.ico", // Default favicon
    shortcut: "/voelker favicon.ico", // Shortcut icon for some browsers
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
