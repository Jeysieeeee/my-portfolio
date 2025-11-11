import { Toaster } from "@/components/Sonner";
import { MainLayout } from "@/features";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Jean- Portfolio",
  description: "Hello, I'd love to help bring it to life for startups and enterprises. You can contact me via WhatsApp, Telegram, or email.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${spaceGrotesk.className} bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark antialiased`}>
      <MainLayout>{children}</MainLayout>
        <Toaster duration={3000} className="sm:min-w-120 rounded-md" position="top-center" />
      </body>
    </html>
  );
}
