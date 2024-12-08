"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Switcher from "./LanguageSwitcher";

const getResumePath = (locale: string): string =>
  locale === "pt" ? "software-engineer.pdf" : "desenvolvedor.pdf";

const MobileHeader: React.FC = () => {
  const [locale, setLocale] = useState("en");
  const t = useTranslations("InfoText");

  useEffect(() => {
    const storedLocale = localStorage.getItem("currentLocale") || "en";
    setLocale(storedLocale);
  }, []);

  const resumePath = getResumePath(locale);

  return (
    <div className="my-12 flex flex-col items-center sm:flex-row sm:justify-between sm:items-center">
      <div className="text-center sm:text-start">
        <a href="/" className="text-2xl">
          Paulo.<strong className="text-orange-500">dev</strong>
        </a>
      </div>

      <div className="mt-4 sm:mt-0 flex items-center justify-center sm:justify-end space-x-4">
        <Switcher />
        <a
          href={`/files/${resumePath}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition"
        >
          {t("ResumeButton")}
        </a>
      </div>
    </div>
  );
};

export default MobileHeader;
