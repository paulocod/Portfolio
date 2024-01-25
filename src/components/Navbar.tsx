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
        <nav className="flex rounded-full place-content-center space-x-12 border-2 border-orange-500 place-items-center bg-zinc-800">
            {buttons.map((button, index) => (
                <a key={index} href={button.link || undefined} target={button.link ? "_blank" : undefined}>
                    <button onClick={() => onButtonClick && onButtonClick(button.section || '')} className="items-center justify-center hover:bg-zinc-600 text-white rounded-full p-2 transition">
                        {button.icon}
                        {button.label}
                    </button>
                </a>
            ))}
        </nav>
    );
};

export default Navbar;
