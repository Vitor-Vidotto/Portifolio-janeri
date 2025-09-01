"use client";

import { Mail, Linkedin, MessageCircleMore } from "lucide-react";
import { motion, Variants } from "framer-motion";


const buttonVariants:  Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } // animação suave
  },
  hover: { scale: 1.05, y: -3 },
};

export default function Contato() {
  return (
    <section id="contato" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Contato</h2>
      <p className="text-gray-300 text-center mb-8">
        Entre em contato para agendar uma consulta ou tirar dúvidas.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <motion.a
          href="mailto:contato@advogada.com"
          className="flex items-center gap-2 bg-blue-900 text-white font-semibold px-6 py-3 rounded transition"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <Mail size={20} />
          Email
        </motion.a>

        <motion.a
          href="https://wa.me/5515992609453"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded transition"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <MessageCircleMore size={20} />
          WhatsApp
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/ana-beatriz-phols-janeri-ab7905178/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <Linkedin size={20} />
          LinkedIn
        </motion.a>
      </div>
    </section>
  );
}