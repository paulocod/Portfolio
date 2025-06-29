'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { getResumePath } from '@/utils/helpers';
import { usePathname } from 'next/navigation';
import contactButtons, { contactIcons } from '@/data/contactButtons';

const Footer: React.FC = () => {
  const t = useTranslations('InfoText');
  const pathname = usePathname();
  const isPt = pathname.startsWith('/pt');
  const locale = isPt ? 'pt' : 'en';
  const resumePath = getResumePath(locale);

  return (
    <footer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="my-12 grid grid-cols-3 gap-12 items-center"
      >
        <div className="text-start">
          <a href="/" className="text-2xl" aria-label="Página inicial">
            Paulo.<strong className="text-orange-500">dev</strong>
          </a>
        </div>

        <nav className="flex gap-4 justify-center">
          {contactButtons.map((button, idx) => {
            const Icon = contactIcons[button.icon];
            return (
              <a
                key={idx}
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={button.icon}
                className="flex items-center gap-2 text-white hover:bg-zinc-600 rounded-full p-2 transition border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
              >
                <Icon size={32} />
                <span className="font-medium text-sm text-white">
                  {button.name}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="text-end">
          <motion.a
            href={`/files/${resumePath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('ResumeButton')}
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
