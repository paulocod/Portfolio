import type { Metadata } from 'next';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import ScrollToTopClient from '@/components/ScrollToTopClient';
import { JetBrains_Mono } from 'next/font/google';

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Paulo Campos',
  description: 'Welcome to my portfolio',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Paulo Campos',
    description: 'Welcome to my portfolio',
    type: 'website',
    siteName: 'Paulo Campos Portfolio',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/imgs/grid-home.svg`,
        width: 1200,
        height: 630,
        alt: 'Portfolio Paulo Campos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paulo Campos',
    description: 'Welcome to my portfolio',
    images: [`${siteUrl}/imgs/grid-home.svg`],
  },
};

import enMessages from '@/messages/en.json';
import ptMessages from '@/messages/pt.json';

const messagesMap = {
  en: enMessages,
  pt: ptMessages,
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: 'en' | 'pt' }>;
}) {
  const { locale } = await params;
  const messages = messagesMap[locale] || messagesMap['en'];

  return (
    <html className={jetBrains.className} lang={locale} dir="ltr">
      <body className="bg-zinc-900 text-zinc-50">
        <a
          href="#main-content"
          className="skip-link absolute left-2 top-2 z-50 bg-orange-500 text-white px-4 py-2 rounded transition-transform -translate-y-16 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
        >
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
