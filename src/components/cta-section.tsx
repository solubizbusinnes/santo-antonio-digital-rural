
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-32 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-green-900/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Faça parte da nossa comunidade rural
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Junte-se a nós e tenha acesso a todos os benefícios e serviços exclusivos para associados do Sindicato Rural de Santo Antônio do Descoberto.
        </p>
        <Button size="lg" className="bg-white text-green-800 hover:bg-green-100" asChild>
          <Link to="/associe-se">Associe-se agora</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
