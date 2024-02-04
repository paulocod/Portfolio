import { DevToLogo, EnvelopeOpen, LinkedinLogo, MediumLogo } from "@phosphor-icons/react/dist/ssr"
import Navbar from "./Navbar"
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
    const storedLocale = typeof localStorage !== 'undefined' ? localStorage.getItem('currentLocale') || 'en' : 'en';
    const t = useTranslations('InfoText');

    const resumePath = storedLocale === 'pt' ? 'software-engineer.pdf' : 'desenvolvedor.pdf';

    return (
        <div className="my-12 grid grid-cols-3 gap-12 items-center">
            <div className="text-start">
                <a href="/" className="text-2xl">
                    Paulo.<strong className="text-orange-500">dev</strong>
                </a>
            </div>
            <Navbar
                buttons={[
                    { icon: <LinkedinLogo size={32} />, link: 'https://www.linkedin.com/in/paulovcampos/' },
                    { icon: <EnvelopeOpen size={32} />, link: 'mailto:paulo.campos.dev@gmail.com' },
                    { icon: <MediumLogo size={32} />, link: 'https://medium.com/@paulo.campos.dev' },
                    { icon: <DevToLogo size={32} />, link: 'https://dev.to/paulocod' },
                ]}
            />
            <div className="text-end">
                <a
                    href={`/files/${resumePath}`}
                    target="_blank"
                    className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition"
                >
                    {t('ResumeButton')}
                </a>
            </div>
        </div>
    )
}

export default Footer;