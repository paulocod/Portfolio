import React from "react";
import MovingIcons from "@/components/MovingItems";

type Props = {
  t: any;
};

const SkillsSection: React.FC<Props> = ({ t }) => (
  <section className="my-28 md:my-40">
    <h1 className="text-2xl mb-12 md:text-3xl xl:text-4xl">
      {t("SkillsSectionText1")}
      <strong className="text-orange-500"> & </strong>
      {t("SkillsSectionText2")}
    </h1>
    <MovingIcons />
  </section>
);

export default SkillsSection; 