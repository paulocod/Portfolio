import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getResumePath } from "@/utils/helpers";

type Props = {
  t: any;
};

const AboutSection: React.FC<Props> = ({ t }) => {
  const pathname = usePathname();
  const isPt = pathname.startsWith("/pt");
  const locale = isPt ? "pt" : "en";
  const resumePath = getResumePath(locale);

  return (
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
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full max-w-xs md:max-w-md xl:max-w-lg aspect-square rounded-full overflow-hidden border-4 border-orange-500 shadow-lg mb-4 md:mb-0 relative">
          <Image
            src="/imgs/profile-pic-sm.jpeg"
            alt="Foto de Paulo Campos"
            fill
            className="object-cover"
            style={{ objectPosition: 'center top' }}
            priority
          />
        </div>
        <div>
          <p className="text-lg leading-7 md:text-xl xl:text-3xl xl:leading-10 mb-4">
      {t("AboutSectionText3")}
    </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={`/files/${resumePath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white rounded-full py-2 px-4 border-2 hover:bg-orange-600 transition font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
            >
              {t("AboutSectionButtonResume")}
            </a>
            <a
              href="https://www.linkedin.com/in/paulovcampos/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-700 text-white rounded-full py-2 px-4 border-2 hover:bg-orange-500 transition font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
            >
              {t("AboutSectionButtonLinkedin")}
            </a>
            <a
              href="https://github.com/paulocod"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-700 text-white rounded-full py-2 px-4 border-2 hover:bg-orange-500 transition font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
            >
              {t("AboutSectionButtonGithub")}
            </a>
          </div>
        </div>
      </div>
  </motion.section>
);
};

export default AboutSection; 