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
      className="navbar-button flex items-center justify-center text-white hover:bg-zinc-600 rounded-full p-2 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 relative"
      aria-label={label || (typeof icon === "string" ? icon : undefined)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={label}
    >
      {IconComponent ? <IconComponent size={32} /> : icon}
      {label && <span className="hidden md:block">{label}</span>}
      {label && (
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-zinc-900 text-white rounded shadow-lg z-10 whitespace-nowrap md:invisible md:opacity-0">
          {label}
        </span>
      )}
    </motion.a>
  ) : (
    <motion.button
      onClick={handleClick}
      className="navbar-button flex items-center justify-center text-white hover:bg-zinc-600 rounded-full p-2 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 relative"
      aria-label={label}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={label}
    >
      {IconComponent ? <IconComponent size={32} /> : icon}
      {label && <span className="hidden md:block">{label}</span>}
      {label && (
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-zinc-900 text-white rounded shadow-lg z-10 whitespace-nowrap md:invisible md:opacity-0">
          {label}
        </span>
      )}
    </motion.button>
  );
};

const Navbar: React.FC<NavbarProps> = ({ onButtonClick, buttons }) => (
  <motion.nav
    className="flex flex-wrap justify-around items-center rounded-full border-2 border-orange-500 bg-zinc-800"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    aria-label="Navegação principal"
  >
    {buttons.map((button, index) => (
      <NavbarItem key={index} button={button} onButtonClick={onButtonClick} />
    ))}
  </motion.nav>
);

export default Navbar;
