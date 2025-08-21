import React from 'react';

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#3F2E27] mb-6 leading-tight">
              De la cocina de Yessica… 
              <span className="text-[#846A5B]"> al corazón de tu familia</span>
            </h2>
            
            <div className="space-y-6 text-lg text-[#3F2E27] leading-relaxed">
              <p>
                Soy <strong className="text-[#846A5B]">Yessica García</strong>, joven emprendedora 
                y amante de la repostería venezolana.
              </p>
              
              <p>
                <strong className="text-[#F5A623]">"Dulce Gracia"</strong> nace de una pasión por compartir 
                lo que Dios me ha dado: talento, sabor y propósito.
              </p>
              
              <p>
                Cada receta está inspirada en las tradiciones de nuestra tierra y hecha con ingredientes 
                reales, sin químicos dañinos.
              </p>
              
              <p className="bg-[#EDD0C0] p-6 rounded-xl border-l-4 border-[#B3C0AE]">
                Creemos que el dulce también puede ser saludable, y que cada mordisco puede 
                recordarte cuán fiel es el Señor.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4038326/pexels-photo-4038326.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Yessica García horneando"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#F5A623] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#B3C0AE] rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;