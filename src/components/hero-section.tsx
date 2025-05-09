import React from 'react';
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')] bg-cover bg-center">
      <div className="hero-overlay"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trabalhamos por um <span className="text-green-400">futuro rural</span> próspero
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Representando e fortalecendo os produtores rurais de Santo Antônio do Descoberto
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Saiba mais
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white/10 text-zinc-50 text-justify">
              Associe-se
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="grid grid-cols-3 gap-4 md:gap-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
          <div className="text-center px-4">
            <div className="w-10 h-10 mx-auto mb-2 bg-green-50 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">Tradição rural</p>
          </div>
          
          <div className="text-center px-4">
            <div className="w-10 h-10 mx-auto mb-2 bg-green-50 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">Suporte completo</p>
          </div>
          
          <div className="text-center px-4">
            <div className="w-10 h-10 mx-auto mb-2 bg-green-50 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">Resultados comprovados</p>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;