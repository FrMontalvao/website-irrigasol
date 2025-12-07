import { Sun, Menu, X } from "lucide-react";
import React ,{ useState } from "react";

import logo from "figma:asset/20bb45e3cf2bf5d7af1e917eebd4e5295e0a3dfd.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Irrgasol Energia Solar" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Calculadora
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-orange-500 transition-colors text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-orange-500 transition-colors text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-700 hover:text-green-600 transition-colors text-left"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-green-600 transition-colors text-left"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="text-gray-700 hover:text-green-600 transition-colors text-left"
            >
              Calculadora
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}