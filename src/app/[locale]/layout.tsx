import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from 'next-intl'
import ScrollToTopClient from "@/components/ScrollToTopClient";

import { JetBrains_Mono } from 'next/font/google'

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap"
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Paulo Campos",
  description: "Welcome to my portfolio",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Paulo Campos",
    description: "Welcome to my portfolio",
    type: "website",
    siteName: "Paulo Campos Portfolio",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/imgs/grid-home.svg`,
        width: 1200,
        height: 630,
        alt: "Portfolio Paulo Campos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Campos",
    description: "Welcome to my portfolio",
    images: [`${siteUrl}/imgs/grid-home.svg`],
  },
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: "en" | "pt"
  }
}

const RootLayout: React.FC<Props> = ({
  children,
  params: { locale }
}: Props) => {
  const messages = useMessages()
  return (
    <html className={jetBrains.className} lang={locale} dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-zinc-900 text-zinc-50">
        <a href="#main-content" className="skip-link absolute left-2 top-2 z-50 bg-orange-500 text-white px-4 py-2 rounded transition-transform -translate-y-16 focus:translate-y-0 focus:outline-none">
          Pular para o conteúdo principal
        </a>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <ScrollToTopClient />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout