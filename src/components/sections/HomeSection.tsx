import Image from "next/image";
import React from "react";
import { useScrollToSection } from "@/hooks/useScrollToSection";

type Props = {
  t: any;
};

const HomeSection: React.FC<Props> = ({ t }) => {
  const scrollToSection = useScrollToSection();
  return (
  <section
    id="home"
    className="h-screen flex items-center justify-center mt-12 mb-20 relative z-10 overflow-hidden"
  >
    <Image
      src="/imgs/grid-home.svg"
      alt="background image"
      fill
      className="object-cover"
    />
    <div className="h-1/2 text-center flex flex-col items-center">
      <h1 className="text-xl mb-4 xl:text-6xl">
          {t("HomeSectionText1")}
          <br />
        {t("HomeSectionText2")}
        <strong className="text-orange-500">{t("HomeSectionText3")}</strong>
        {t("HomeSectionText4")}
      </h1>
      <p className="text-xl xl:text-5xl">
        {t("HomeSectionText5")}
        <strong className="text-orange-500">{t("HomeSectionText6")}</strong>
      </p>
    </div>
  </section>
);
};

export default HomeSection;