import { DevToLogo, EnvelopeOpen, LinkedinLogo, MediumLogo } from "@phosphor-icons/react/dist/ssr"
import Navbar from "./Navbar"
import { InfoText } from "@/data";


const Footer: React.FC = () => {
    return (
        <div className="my-12 grid grid-cols-3 gap-12 items-center">
            <div className="text-start">
                <a href="\" className="text-2xl">
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
                <a href="/files/software-engineer.pdf" target="_blank" className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition">{InfoText.ResumeButton}</a>
            </div>
        </div>
    )
}

export default Footer;