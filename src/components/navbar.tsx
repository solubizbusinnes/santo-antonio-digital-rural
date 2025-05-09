
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link to="/">
            <span className="font-bold text-xl text-green-700">
              Sindicato Rural
            </span>
            <span className="text-sm font-medium text-green-600 hidden sm:inline-block">
              Santo Antônio do Descoberto
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Início</Link>
          <a href="#services" className="text-gray-700 hover:text-green-600 font-medium">Serviços</a>
          <a href="#team" className="text-gray-700 hover:text-green-600 font-medium">Nossa Equipe</a>
          <a href="#testimonials" className="text-gray-700 hover:text-green-600 font-medium">Depoimentos</a>
          <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium">Contato</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex" asChild>
            <Link to="/associe-se">Associe-se</Link>
          </Button>
          <Button>Entre em Contato</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
