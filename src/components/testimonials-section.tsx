
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "O Sindicato Rural foi fundamental para o crescimento da minha propriedade. Graças à assistência técnica, consegui aumentar minha produtividade em 40% no último ano.",
      author: "Carlos Mendes",
      role: "Produtor de Soja",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      quote: "Os cursos de capacitação oferecidos pelo Sindicato transformaram minha visão sobre o agronegócio. Implementei novas técnicas e vi meus resultados melhorarem significativamente.",
      author: "Ana Beatriz",
      role: "Produtora de Leite",
      image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      quote: "A representação legal do Sindicato foi essencial para resolver questões fundiárias da minha propriedade. Profissionais competentes que realmente se importam com o produtor rural.",
      author: "João Paulo",
      role: "Pequeno Produtor",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-brown-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">O que nossos associados dizem</h2>
          <p className="section-subtitle">
            Depoimentos de produtores rurais que confiam no trabalho do Sindicato Rural de Santo Antônio do Descoberto
            para desenvolver seus negócios e melhorar sua qualidade de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <svg className="h-8 w-8 text-green-500 mb-2" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <CardDescription className="text-lg text-gray-700 italic">
                  "{testimonial.quote}"
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-2 flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-green-600">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
