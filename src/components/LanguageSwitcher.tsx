'use client';

import { useRouter, usePathname } from 'next/navigation';

const Switcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isPt = pathname.startsWith('/pt');
  const currentLocale = isPt ? 'pt' : 'en';
  const nextLocale = isPt ? 'en' : 'pt';

  const handleSwitch = () => {
    let newPath = pathname.replace(/^\/(pt|en)/, '');
    if (!newPath.startsWith('/')) newPath = '/' + newPath;
    router.push(`/${nextLocale}${newPath}`);
  };

  return (
    <div className="flex rounded-full border-2 border-orange-500 overflow-hidden w-fit">
      <button
        onClick={() => {
          if (!isPt) handleSwitch();
        }}
        className={`px-4 py-1 text-xs font-bold transition-colors duration-300 focus:outline-none ${
          isPt
            ? 'bg-orange-500 text-white'
            : 'bg-transparent text-orange-500 hover:bg-orange-100'
        }`}
        aria-label="Trocar idioma para Português"
        title="Trocar idioma para Português"
        type="button"
      >
        PT
      </button>
      <button
        onClick={() => {
          if (isPt) handleSwitch();
        }}
        className={`px-4 py-1 text-xs font-bold transition-colors duration-300 focus:outline-none ${
          !isPt
            ? 'bg-orange-500 text-white'
            : 'bg-transparent text-orange-500 hover:bg-orange-100'
        }`}
        aria-label="Trocar idioma para Inglês"
        title="Trocar idioma para Inglês"
        type="button"
      >
        EN
      </button>
    </div>
  );
};

export default Switcher;
