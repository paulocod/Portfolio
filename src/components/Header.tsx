'use client';

import { HouseSimple, DownloadSimple } from '@phosphor-icons/react/dist/ssr';
import Navbar from './Navbar';
import { useTranslations } from 'next-intl';
import Switcher from './LanguageSwitcher';
import { motion } from 'framer-motion';
import { getResumePath } from '@/utils/helpers';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onButtonClick: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onButtonClick }) => {
  const t = useTranslations('InfoText');
  const pathname = usePathname();
  const isPt = pathname.startsWith('/pt');
  const locale = isPt ? 'pt' : 'en';
  const resumePath = getResumePath(locale);

  const navButtons = [
    { icon: <HouseSimple size={32} />, section: 'home' },
    { label: t('NavbarButtonsText1'), section: 'about' },
    { label: t('NavbarButtonsText2'), section: 'projects' },
    { label: t('NavbarButtonsText3'), section: 'contact' },
  ];

  return (
    <header>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="my-12 grid grid-cols-3 gap-12 items-center"
      >
        <motion.div
          className="text-start"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <a href="/" className="text-2xl" aria-label="Página inicial">
            Paulo.<strong className="text-orange-500">dev</strong>
          </a>
        </motion.div>

        <Navbar
          onButtonClick={onButtonClick}
          buttons={navButtons.map((btn) => ({
            ...btn,
            'aria-label': btn.label || btn.section,
          }))}
        />

        <div className="flex items-center justify-end space-x-4">
          <Switcher />
          <motion.a
            href={`/files/${resumePath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`${t('ResumeButton')} - Download do currículo`}
          >
            {t('ResumeButton')}
            <DownloadSimple size={20} />
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
