"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { contactIcons } from "@/data/contactButtons";

type NavbarButton = {
  section?: string;
  icon?: ReactNode;
  label?: string;
  link?: string;
};

type NavbarProps = {
  onButtonClick?: (sectionId: string) => void;
  buttons: NavbarButton[];
};

const NavbarItem: React.FC<{
  button: NavbarButton;
  onButtonClick?: (sectionId: string) => void;
}> = ({ button, onButtonClick }) => {
  const { section, icon, label, link } = button;

  const handleClick = () => {
    if (section && onButtonClick) onButtonClick(section);
  };

  // Renderizar ícone dinamicamente se for string
  const IconComponent = typeof icon === "string" ? contactIcons[icon as keyof typeof contactIcons] : null;

  return link ? (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center text-white hover:bg-zinc-600 rounded-full p-2 transition"
      aria-label={label || (typeof icon === "string" ? icon : undefined)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {IconComponent ? <IconComponent size={32} /> : icon}
      {label && <span className="hidden md:block">{label}</span>}
    </motion.a>
  ) : (
    <motion.button
      onClick={handleClick}
      className="flex items-center justify-center text-white hover:bg-zinc-600 rounded-full p-2 transition"
      aria-label={label}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {IconComponent ? <IconComponent size={32} /> : icon}
      {label && <span className="hidden md:block">{label}</span>}
    </motion.button>
  );
};

const Navbar: React.FC<NavbarProps> = ({ onButtonClick, buttons }) => (
  <motion.nav
    className="flex flex-wrap justify-around items-center rounded-full border-2 border-orange-500 bg-zinc-800"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {buttons.map((button, index) => (
      <NavbarItem key={index} button={button} onButtonClick={onButtonClick} />
    ))}
  </motion.nav>
);

export default Navbar;
