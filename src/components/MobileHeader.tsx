import { useTranslations } from 'next-intl';
import Switcher from "./LanguageSwitcher";

const MobileHeader: React.FC = () => {
    const storedLocale = typeof localStorage !== 'undefined' ? localStorage.getItem('currentLocale') || 'en' : 'en';
    const t = useTranslations('InfoText');

    const resumePath = storedLocale === 'pt' ? 'software-engineer.pdf' : 'desenvolvedor.pdf';

    return (
        <div className="my-12 flex flex-col items-center sm:flex-row sm:justify-between sm:items-center">
            <div className="text-center sm:text-start">
                <a href="/" className="text-2xl">
                    Paulo.<strong className="text-orange-500">dev</strong>
                </a>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center justify-center sm:justify-end space-x-4">
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

export default MobileHeader;
