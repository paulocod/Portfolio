import { motion } from "framer-motion";
import React from "react";

type Props = {
  t: any;
};

const AboutSection: React.FC<Props> = ({ t }) => (
  <motion.section
    id="about"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="md:my-40"
  >
    <h1 className="text-2xl mb-4 md:text-3xl xl:text-4xl">
      {t("AboutSectionText1")}
      <strong className="text-orange-500">{t("AboutSectionText2")}</strong>
    </h1>
    <p className="text-lg leading-7 md:text-xl xl:text-3xl xl:leading-10">
      {t("AboutSectionText3")}
    </p>
  </motion.section>
);

export default AboutSection; 