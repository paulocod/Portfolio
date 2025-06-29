import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right-6 z-50 bg-orange-500 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
