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
    <html className={jetBrains.className} lang={locale}>
      <body className="bg-zinc-900 text-zinc-50">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout