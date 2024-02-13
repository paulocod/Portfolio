import React, { ReactNode } from 'react';

type NavbarProps = {
    onButtonClick?: (sectionId: string) => void;
    buttons: {
        section?: string;
        icon?: ReactNode;
        label?: string;
        link?: string;
    }[];
};

const Navbar: React.FC<NavbarProps> = ({ onButtonClick, buttons }) => {
    return (
        <nav className="flex flex-wrap justify-around rounded-full border-2 border-orange-500 bg-zinc-800">
            {buttons.map((button, index) => (
                <a key={index} href={button.link || undefined} target={button.link ? "_blank" : undefined}>
                    <button onClick={() => onButtonClick && onButtonClick(button.section || '')}
                        className="flex items-center justify-center hover:bg-zinc-600 text-white rounded-full p-2 transition">
                        {button.icon}
                        <span className="hidden md:block">{button.label}</span>
                    </button>
                </a>
            ))}
        </nav>
    );
};

export default Navbar;
