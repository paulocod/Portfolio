import { DevToLogo, EnvelopeOpen, LinkedinLogo, MediumLogo, TerminalWindow } from "@phosphor-icons/react";

export type ContactButton = {
  icon: "LinkedinLogo" | "EnvelopeOpen" | "MediumLogo" | "DevToLogo" | "TerminalWindow";
  link: string;
  name: string;
};

const contactButtons: ContactButton[] = [
  {
    icon: "LinkedinLogo",
    link: "https://www.linkedin.com/in/paulovcampos/",
    name: "LinkedIn",
  },
  {
    icon: "EnvelopeOpen",
    link: "mailto:paulo.campos.dev@gmail.com",
    name: "Email",
  },
  {
    icon: "MediumLogo",
    link: "https://medium.com/@paulo.campos.dev",
    name: "Medium",
  },
  {
    icon: "DevToLogo",
    link: "https://dev.to/paulocod",
    name: "Dev.to",
  },
  {
    icon: "TerminalWindow",
    link: "https://www.tabnews.com.br/PauloCod",
    name: "TabNews",
  },
];

export const contactIcons = {
  LinkedinLogo,
  EnvelopeOpen,
  MediumLogo,
  DevToLogo,
  TerminalWindow,
};

export default contactButtons;
