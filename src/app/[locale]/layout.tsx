import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from 'next-intl'

import { JetBrains_Mono } from 'next/font/google'

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Paulo Campos",
  description: "Welcome to my portfolio",
  openGraph: {
    title: "Paulo Campos",
    description: "Welcome to my portfolio",
    type: "website",
    url: "http://localhost:3000/pt/",
    images: [
      {
        url: "/imgs/grid-home.svg",
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
    images: ["/imgs/grid-home.svg"],
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
      <body className="bg-zinc-900 text-zinc-50">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout