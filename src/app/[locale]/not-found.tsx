'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const NotFound = () => {
  const t = useTranslations('NotFound');
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-zinc-900 text-zinc-50 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      role="alert"
    >
      <motion.h1
        className="text-9xl font-extrabold text-orange-500 mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {t('Title')}
      </motion.h1>

      <motion.p
        className="text-2xl mb-8 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
      >
        {t('Description')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link
          href="/"
          className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          {t('Button')}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
