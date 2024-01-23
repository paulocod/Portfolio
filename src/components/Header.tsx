import { HouseSimple } from "@phosphor-icons/react/dist/ssr";

interface HeaderProps {
    onButtonClick: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onButtonClick }) => {
    const handleButtonClick = (sectionId: string) => () => {
        onButtonClick(sectionId);
    };
    return (
        <header className="my-12 grid grid-cols-3 gap-12 items-center">
            <a href="/" className="text-start">
                <h1 className="text-2xl">
                    Paulo.<strong className="text-orange-500">dev</strong>
                </h1>
            </a>
            <nav className="flex rounded-full place-content-center space-x-12 border-2 border-orange-500 place-items-center bg-zinc-800">
                <button onClick={handleButtonClick('home')} className="items-center justify-center hover:bg-zinc-600 text-white rounded-full p-2 transition">
                    <HouseSimple size={32} />
                </button>
                <button onClick={handleButtonClick('about')} className="text-center text-white p-2 rounded-full hover:bg-zinc-700 transition">About</button>
                <button onClick={handleButtonClick('projects')} className="text-center text-white p-2 rounded-full hover:bg-zinc-700 transition">Projects</button>
                <button onClick={handleButtonClick('contact')} className="text-center text-white p-2 rounded-full hover:bg-zinc-700 transition">Contact me</button>
            </nav>
            <div className="text-end">
                <a href="/software-engineer.pdf" target="_blank" className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition">Resume</a>
            </div>
        </header>
    );
};

export default Header;
