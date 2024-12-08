"use client";

import {
  DevToLogo,
  EnvelopeOpen,
  LinkedinLogo,
  MediumLogo,
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "./Navbar";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { getResumePath } from "@/utils/helpers";

const Footer: React.FC = () => {
  const t = useTranslations("InfoText");
  const storedLocale =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("currentLocale") || "en"
      : "en";
  const resumePath = getResumePath(storedLocale);

  const navButtons = [
    {
      icon: <LinkedinLogo size={32} />,
      link: "https://www.linkedin.com/in/paulovcampos/",
    },
    {
      icon: <EnvelopeOpen size={32} />,
      link: "mailto:paulo.campos.dev@gmail.com",
    },
    {
      icon: <MediumLogo size={32} />,
      link: "https://medium.com/@paulo.campos.dev",
    },
    { icon: <DevToLogo size={32} />, link: "https://dev.to/paulocod" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-12 grid grid-cols-3 gap-12 items-center"
    >
      <div className="text-start">
        <a href="/" className="text-2xl">
          Paulo.<strong className="text-orange-500">dev</strong>
        </a>
      </div>

      <Navbar buttons={navButtons} />

      <div className="text-end">
        <motion.a
          href={`/files/${resumePath}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("ResumeButton")}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Footer;
