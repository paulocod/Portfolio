"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-zinc-900 text-zinc-50 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-9xl font-extrabold text-orange-500 mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-2xl mb-8 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      >
        A página que você procura não foi encontrada.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link
          href="/"
          className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          Voltar para a página inicial
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
