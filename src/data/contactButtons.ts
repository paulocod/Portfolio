import { DevToLogo, EnvelopeOpen, LinkedinLogo, MediumLogo } from "@phosphor-icons/react";

export type ContactButton = {
  icon: "LinkedinLogo" | "EnvelopeOpen" | "MediumLogo" | "DevToLogo";
  link: string;
};

const contactButtons: ContactButton[] = [
  {
    icon: "LinkedinLogo",
    link: "https://www.linkedin.com/in/paulovcampos/",
  },
  {
    icon: "EnvelopeOpen",
    link: "mailto:paulo.campos.dev@gmail.com",
  },
  {
    icon: "MediumLogo",
    link: "https://medium.com/@paulo.campos.dev",
  },
  {
    icon: "DevToLogo",
    link: "https://dev.to/paulocod",
  },
];

export const contactIcons = {
  LinkedinLogo,
  EnvelopeOpen,
  MediumLogo,
  DevToLogo,
};

export default contactButtons; 