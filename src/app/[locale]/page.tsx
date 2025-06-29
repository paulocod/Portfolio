'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import { useTranslations } from 'next-intl';
import MobileMenu from '@/components/MobileHeader';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import Navbar from '@/components/Navbar';
import HomeSection from '../../components/sections/HomeSection';
import AboutSection from '../../components/sections/AboutSection';
import SkillsSection from '../../components/sections/SkillsSection';
import ContactSection from '../../components/sections/ContactSection';
import contactButtons from '../../data/contactButtons';

export default function Home() {
  const t = useTranslations('InfoText');
  const scrollToSection = useScrollToSection();

  return (
    <main id="main-content" className="px-8 md:px-16 lg:px-32 xl:px-48">
      <div className="hidden lg:block">
        <Header onButtonClick={scrollToSection} />
      </div>
      <div className="lg:hidden">
        <MobileMenu />
      </div>

      <HomeSection t={t} />
      <AboutSection t={t} />
      <SkillsSection t={t} />
      <Projects />
      <ContactSection t={t} contactButtons={contactButtons} />

      <div className="hidden lg:block">
        <Footer />
      </div>
      <div className="lg:hidden">
        <Navbar buttons={contactButtons} />
      </div>
    </main>
  );
}
