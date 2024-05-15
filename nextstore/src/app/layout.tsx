import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "e-commerce",
  description:
    "The powers of Next-js14,TypeScript,Tailwind css,shadcn,prisma Database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      {/* <body
        className={cn(
          "bg-red-500 min-h-screen font-sans antialiased",
          inter.variable
        )}
      > */}
      <body
        className={cn(
          "min-h-screen  bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
