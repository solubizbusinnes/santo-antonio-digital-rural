
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Inscreva-se em nossa newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Receba informações importantes, dicas técnicas, eventos e oportunidades diretamente no seu email.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor email"
              className="flex-grow"
            />
            <Button className="bg-green-600 hover:bg-green-700">
              Inscrever-se
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Ao se inscrever, você concorda com nossa política de privacidade e termos de uso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
