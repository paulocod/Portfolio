import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import enMessages from './messages/en.json';
import ptMessages from './messages/pt.json';

const locales = ['en', 'pt'];
const messages = {
  en: enMessages,
  pt: ptMessages,
};

export default getRequestConfig(async ({ locale }) => {
  if (!locale) notFound();

  const baseLocale = new Intl.Locale(locale).baseName;

  if (!locales.includes(baseLocale)) notFound();

  return {
    messages: messages[baseLocale as keyof typeof messages],
    locale: baseLocale,
    timeZone: 'America/Sao_Paulo',
  };
});
