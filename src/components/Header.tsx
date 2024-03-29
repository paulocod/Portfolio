import { HouseSimple } from "@phosphor-icons/react/dist/ssr";
import Navbar from "./Navbar";
import { useTranslations } from 'next-intl';
import Switcher from "./LanguageSwitcher";

interface HeaderProps {
    onButtonClick: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onButtonClick }) => {
    const storedLocale = typeof localStorage !== 'undefined' ? localStorage.getItem('currentLocale') || 'en' : 'en';
    const t = useTranslations('InfoText');

    const resumePath = storedLocale === 'pt' ? 'software-engineer.pdf' : 'desenvolvedor.pdf';

    const handleButtonClick = (sectionId: string) => {
        onButtonClick(sectionId);
    };

    return (
        <div className="my-12 grid grid-cols-3 gap-12 items-center">
            <div className="text-start">
                <a href="/" className="text-2xl">
                    Paulo.<strong className="text-orange-500">dev</strong>
                </a>
            </div>
            <Navbar
                onButtonClick={handleButtonClick}
                buttons={[
                    { icon: <HouseSimple size={32} />, section: 'home' },
                    { label: t('NavbarButtonsText1'), section: 'about' },
                    { label: t('NavbarButtonsText2'), section: 'projects' },
                    { label: t('NavbarButtonsText3'), section: 'contact' },
                ]}
            />
            <div className="flex items-center justify-end space-x-4">
                <Switcher />
                <a
                    href={`/files/${resumePath}`}
                    target="_blank"
                    className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition"
                >
                    {t('ResumeButton')}
                </a>
            </div>
        </div>
    );
};

export default Header;
