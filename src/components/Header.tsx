"use client";

import { HouseSimple } from "@phosphor-icons/react/dist/ssr";
import Navbar from "./Navbar";
import { useTranslations } from "next-intl";
import Switcher from "./LanguageSwitcher";
import { motion } from "framer-motion";
import { getResumePath } from "@/utils/helpers";

interface HeaderProps {
  onButtonClick: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onButtonClick }) => {
  const t = useTranslations("InfoText");
  const storedLocale =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("currentLocale") || "en"
      : "en";
  const resumePath = getResumePath(storedLocale);

  const navButtons = [
    { icon: <HouseSimple size={32} />, section: "home" },
    { label: t("NavbarButtonsText1"), section: "about" },
    { label: t("NavbarButtonsText2"), section: "projects" },
    { label: t("NavbarButtonsText3"), section: "contact" },
  ];

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-12 grid grid-cols-3 gap-12 items-center"
    >
      <motion.div
        className="text-start"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <a href="/" className="text-2xl">
          Paulo.<strong className="text-orange-500">dev</strong>
        </a>
      </motion.div>

      <Navbar onButtonClick={onButtonClick} buttons={navButtons} />

      <div className="flex items-center justify-end space-x-4">
        <Switcher />
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

export default Header;
