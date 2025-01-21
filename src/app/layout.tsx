import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Shiv Gems",
  description: "Shiv Gems: A comprehensive CRM solution for jewellery businesses, streamlining customer management, sales tracking, inventory, and personalized service for enhanced efficiency and growth.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
