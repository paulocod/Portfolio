import { getRequestConfig } from 'next-intl/server';
import enMessages from './src/messages/en.json';
import ptMessages from './src/messages/pt.json';

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale || 'en';
  return {
    messages: currentLocale === 'pt' ? ptMessages : enMessages,
    locale: currentLocale,
  };
});
