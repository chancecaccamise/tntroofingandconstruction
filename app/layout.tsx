import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Reef Aquatics",
  description: "Proudly serving local Western New York businesses with high-quality, artfully crafted fish tanks.",
  icons: {
    icon: "/bluereefbuffalo logo.ico", // Default favicon
    shortcut: "/bluereefbuffalo logo.ico", // Shortcut icon for some browsers
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
