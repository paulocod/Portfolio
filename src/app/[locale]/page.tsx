'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MovingIcons from "@/components/MovingItems";
import Projects from "@/components/Projects";
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('InfoText');

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className="px-48">
      <Header onButtonClick={(sectionId) => scrollToSection(sectionId)} />
      <section id="home" className="h-screen flex items-center justify-center mt-12 mb-20 relative z-10 overflow-hidden">
        <Image src="/imgs/grid-home.svg" alt="Projeto 1" layout="fill" className="rounded-l-lg object-cover" />
        <div className="h-1/2 text-center flex flex-col items-center">
          <h1 className="text-6xl mb-4">{t('HomeSectionText1')}</h1>
          <h1 className="text-6xl mb-4">{t('HomeSectionText2')} <strong className="text-orange-500">{t('HomeSectionText3')}</strong>{t('HomeSectionText4')}</h1>
          <p className="text-5xl">{t('HomeSectionText5')}<strong className="text-orange-500">{t('HomeSectionText6')}</strong></p>
        </div>
      </section>
      <div id="about" className="my-40">
        <h1 className="text-4xl mb-4">{t('AboutSectionText1')}<strong className="text-orange-500">{t('AboutSectionText2')}</strong></h1>
        <p className="text-3xl leading-10">{t('AboutSectionText3')}</p>
      </div>
      <div className="my-40">
        <h1 className="text-4xl mb-12">{t('SkillsSectionText1')}<strong className="text-orange-500"> & </strong>{t('SkillsSectionText2')}</h1>
        <MovingIcons />
      </div>
      <Projects />
      <div id="contact" className="my-12 flex items-center justify-between px-4">
        <div>
          <h1 className="text-4xl mb-2">{t('FooterSectionText1')}<strong className="text-orange-500">{t('FooterSectionText2')}</strong>?</h1>
          <p className="text-xl mb-4 w-2/3">{t('FooterSectionText3')}</p>
        </div>
        <div className="relative w-96 h-96">
          <Image
            src="/imgs/grid-footer.svg"
            alt="grid image"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
