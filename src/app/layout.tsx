import type { Metadata } from "next";
import "./globals.css";

import {JetBrains_Mono} from 'next/font/google'

const jetBrains = JetBrains_Mono({
  subsets:["latin"],
  display:"swap"
})

export const metadata: Metadata = {
  title: "Paulo Campos",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={jetBrains.className} lang="en">
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  );
}
