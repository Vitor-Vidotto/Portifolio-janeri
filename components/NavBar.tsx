// app/components/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[wheat] text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        
        {/* Logo / Nome */}
        <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-gray-600">
          Portifólio
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Início
          </Link>
          <Link href="#sobre" className="text-gray-700 hover:text-gray-900">
            Sobre
          </Link>
          <Link href="#servicos" className="text-gray-700 hover:text-gray-900">
            Serviços
          </Link>
          <Link href="#contato" className="text-gray-700 hover:text-gray-900">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
