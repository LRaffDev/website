import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";



export const metadata: Metadata = {
  title: "Raffaele Leonardo La Cerra",
  description: "portfolio di Raffaele Leonardo La Cerra",
  keywords: ['Raffaele La Cerra', 'Raffaele Leonardo La Cerra', 'LRaffDev', 'LC-Raffaele']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
