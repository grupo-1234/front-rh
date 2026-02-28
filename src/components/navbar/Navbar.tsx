import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

interface NavbarProps {
  onOpenModal: (titulo: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#0f172a] text-white w-full fixed top-0 z-50 left-0 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold tracking-tight" onClick={closeMenu}>
              PeopleFlow
            </Link>
          </div>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-8 text-sm font-semibold">
              <li className="hover:text-emerald-400 transition-colors">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-emerald-400 transition-colors">
                <a href="#beneficios">Benefícios</a>
              </li>
              <li className="hover:text-emerald-400 transition-colors">
                <a href="#avaliacoes">Avaliações</a>
              </li>
              <li className="hover:text-emerald-400 transition-colors">
                <a href="#planos">Planos</a>
              </li>
              <li className="hover:text-emerald-400 transition-colors">
                <Link to="/sobre-nos">Sobre nós</Link>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <button
              onClick={() => onOpenModal("Assine Agora")}
              className="bg-gradient-to-r from-emerald-600 to-blue-900 hover:from-blue-900 hover:to-blue-900 px-6 py-2.5 text-sm font-bold text-white transition rounded-full cursor-pointer"
            >
              Assine
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-emerald-400 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out bg-[#0f172a] border-b border-white/10 ${
          isOpen ? "max-h-screen opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col px-4 pt-2 pb-4 gap-4 text-center font-semibold">
          <li className="py-2 border-b border-white/5">
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className="py-2 border-b border-white/5">
            <a href="#beneficios" onClick={closeMenu}>Benefícios</a>
          </li>
          <li className="py-2 border-b border-white/5">
            <a href="#avaliacoes" onClick={closeMenu}>Avaliações</a>
          </li>
          <li className="py-2 border-b border-white/5">
            <a href="#planos" onClick={closeMenu}>Planos</a>
          </li>
          <li className="py-2 border-b border-white/5">
            <Link to="/sobre-nos" onClick={closeMenu}>Sobre nós</Link>
          </li>
          <li className="pt-4">
            <button
              onClick={() => {
                onOpenModal("Assine Agora");
                closeMenu();
              }}
              className="w-full bg-gradient-to-r from-emerald-600 to-blue-900 py-4 rounded-xl font-bold"
            >
              Assine agora
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}