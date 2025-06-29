import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { contactIcons, ContactButton } from "@/data/contactButtons";

type Props = {
  t: any;
  contactButtons: ContactButton[];
};

const ContactSection: React.FC<Props> = ({ t, contactButtons }) => (
  <motion.section
    id="contact"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="my-12 flex items-center justify-between px-4"
  >
    <div>
      <h1 className="text-2xl mb-2 md:text-3xl xl:text-4xl">
        {t("FooterSectionText1")}
        <strong className="text-orange-500">
          {t("FooterSectionText2")}
        </strong>
        ?
      </h1>
      <p className="text-base mb-4 xl:text-xl xl:w-2/3">
        {t("FooterSectionText3")}
      </p>
      <div className="flex gap-4 mt-4">
        {contactButtons.map((button, idx) => {
          const Icon = contactIcons[button.icon];
          return (
            <a
              key={idx}
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-white hover:bg-zinc-600 rounded-full p-2 transition border border-orange-500"
              aria-label={button.icon}
            >
              <Icon size={32} />
            </a>
          );
        })}
      </div>
    </div>
    <div className="relative w-96 h-96">
      <Image
        src="/imgs/grid-footer.svg"
        alt="grid image"
        className="object-cover"
        fill
      />
    </div>
  </motion.section>
);

export default ContactSection; 