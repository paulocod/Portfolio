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
    <main className="px-8 md:px-16 lg:px-32 xl:px-48">
      <Header onButtonClick={(sectionId) => scrollToSection(sectionId)} />
      <section id="home" className="h-screen flex items-center justify-center mt-12 mb-20 relative z-10 overflow-hidden">
        <Image src="/imgs/grid-home.svg" alt="background image" fill className="object-cover" />
        <div className="h-1/2 text-center flex flex-col items-center">
          <h1 className="text-xl mb-4 xl:text-6xl">{t('HomeSectionText1')}</h1>
          <h1 className="text-xl mb-4 xl:text-6xl">{t('HomeSectionText2')}
            <strong className="text-orange-500">{t('HomeSectionText3')}</strong>
            {t('HomeSectionText4')}
          </h1>
          <p className="text-xl xl:text-5xl">{t('HomeSectionText5')}
            <strong className="text-orange-500">{t('HomeSectionText6')}</strong>
          </p>
        </div>
      </section>
      <div id="about" className="md:my-40">
        <h1 className="text-2xl mb-4 md:text-3xl xl:text-4xl">{t('AboutSectionText1')}
          <strong className="text-orange-500">{t('AboutSectionText2')}</strong>
        </h1>
        <p className="text-lg leading-7 md:text-xl xl:text-3xl xl:leading-10">{t('AboutSectionText3')}</p>
      </div>
      <div className="my-28 md:my-40">
        <h1 className="text-2xl mb-12 md:text-3xl xl:text-4xl">{t('SkillsSectionText1')}
          <strong className="text-orange-500"> & </strong>
          {t('SkillsSectionText2')}
        </h1>
        <MovingIcons />
      </div>
      <Projects />
      <div id="contact" className="my-12 flex items-center justify-between px-4">
        <div>
          <h1 className="text-2xl mb-2 md:text-3xl xl:text-4xl">{t('FooterSectionText1')}
            <strong className="text-orange-500">{t('FooterSectionText2')}</strong>
            ?
          </h1>
          <p className="text-base mb-4 xl:text-xl xl:w-2/3">{t('FooterSectionText3')}</p>
        </div>
        <div className="relative w-96 h-96">
          <Image
            src="/imgs/grid-footer.svg"
            alt="grid image"
            className="object-cover"
            fill
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
