import { HouseSimple } from "@phosphor-icons/react/dist/ssr";

const Header: React.FC = () => {
    return (
        <header className="my-12 grid grid-cols-3 gap-12 items-center">
            <div className="text-start">
                <h1 className="text-2xl">
                    Paulo.<strong className="text-orange-500">dev</strong>
                </h1>
            </div>
            <nav className="flex rounded-full place-content-center space-x-12 border-2 border-orange-500 place-items-center bg-zinc-800">
                <a className="flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-2 transition" href="#Homepage">
                    <HouseSimple size={32} />
                </a>
                <a className="text-center text-white p-2 rounded-full hover:bg-zinc-700 transition" href="#About">About</a>
                <a className="text-center text-white p-2 rounded-full hover:bg-zinc-700 transition" href="#Projects">Projects</a>
                <a className="text-center text-white p-2 rounded-full hover:bg-zinc-700 transition" href="#Contact">Contact me</a>
            </nav>
            <div className="text-end">
                <button className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition">Hire me</button>
            </div>
        </header>
    );
};

export default Header;
