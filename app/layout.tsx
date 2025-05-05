import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TNT Roofing and Construction",
  description: "Trusted roofing and construction experts in North Carolina—specializing in roof replacement, siding, gutters, and framing built for durability and curb appeal.",
  icons: {
    icon: "/tnt roofing favicon.ico", // Default favicon
    shortcut: "/tnt roofing favicon.ico", // Shortcut icon for some browsers
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
