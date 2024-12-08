"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Switcher: React.FC = () => {
  const [locale, setLocale] = useState("en");
  const isOn = locale === "pt";

  useEffect(() => {
    const storedLocale = localStorage.getItem("currentLocale") || "en";
    setLocale(storedLocale);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "pt" : "en";
    setLocale(newLocale);
    localStorage.setItem("currentLocale", newLocale);
  };

  return (
    <div
      className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
        isOn ? "bg-orange-500" : "bg-black"
      }`}
    >
      <Link href={`/${locale}`}>
        <button
          onClick={toggleLocale}
          className={`absolute left-0 top-0 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? "translate-x-full bg-white" : "bg-orange-500"
          }`}
          aria-label={`Switch language to ${
            locale === "en" ? "Portuguese" : "English"
          }`}
        />
      </Link>
    </div>
  );
};

export default Switcher;
