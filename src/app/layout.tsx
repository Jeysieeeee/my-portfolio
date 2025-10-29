import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { MainLayout } from "@/features";
import { Providers } from "./ThemeProvider";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Jean- Portfolio",
  description: "Creative Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${spaceGrotesk.className} bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark antialiased`}>
       <Providers><MainLayout>{children}</MainLayout></Providers> 
      </body>
    </html>
  );
}
