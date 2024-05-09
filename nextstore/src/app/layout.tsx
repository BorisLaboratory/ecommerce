import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ecommerce store",
  description:
    "A project demonstrating the power of Nextjs 14,Typecript,tailwind css shdadcn, prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={cn(
          "bg-red-500 min-h-screen font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
