import { HouseSimple } from "@phosphor-icons/react/dist/ssr";
import Navbar from "./Navbar";
import { useTranslations } from 'next-intl';

interface HeaderProps {
    onButtonClick: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onButtonClick }) => {
    const t = useTranslations('InfoText');

    (sectionId: string) => {
        onButtonClick(sectionId);
    };
    return (
        <header className="my-12 grid grid-cols-3 gap-12 items-center">
            <a href="/" className="text-start">
                <h1 className="text-2xl">
                    Paulo.<strong className="text-orange-500">dev</strong>
                </h1>
            </a>
            <Navbar
                onButtonClick={onButtonClick}
                buttons={[
                    { icon: <HouseSimple size={32} />, section: 'home' },
                    { label: t('NavbarButtonsText1'), section: 'about' },
                    { label: t('NavbarButtonsText2'), section: 'projects' },
                    { label: t('NavbarButtonsText3'), section: 'contact' },
                ]}
            />
            <div className="text-end">
                <a href="/Portfolio/files/software-engineer.pdf" target="_blank" className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition">{t('ResumeButton')}</a>
            </div>
        </header>
    );
};

export default Header;
