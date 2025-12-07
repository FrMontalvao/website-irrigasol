import { Sun, Facebook, Instagram, Mail, Phone } from "lucide-react";
import React ,{ useState } from "react";


import logo from "figma:asset/20bb45e3cf2bf5d7af1e917eebd4e5295e0a3dfd.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Irrgasol Energia Solar" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">
              Transformando energia solar em economia e sustentabilidade para o seu futuro.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Instalação Residencial
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Bombas Solares
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Manutenção
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Consultoria
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-green-400 transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-green-400 transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-green-400 transition-colors">
                  Calculadora
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <span>(77) 99973-6040</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span>orcamento@irrgasol.com.br</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/irrigasoll/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
                <a
                    href ="https://wa.me/5577999736040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-lg hover:bg-green-700 transition-colors"
                    aria-label="Instagram"
                >
                    <Phone size={20} />
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Irrgasol Energia Solar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}