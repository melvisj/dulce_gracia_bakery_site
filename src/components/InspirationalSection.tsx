import React from 'react';

const InspirationalSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#B3C0AE] to-[#846A5B] text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Más que dulces, es propósito
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-xl mb-6 leading-relaxed">
              Dulce Gracia no es solo una marca. Es una forma de agradecer a Dios por lo sencillo, 
              lo bueno y lo hecho con manos limpias y corazón alegre.
            </p>
            
            <blockquote className="text-2xl italic mb-6 text-[#F5A623]">
              "Gustad, y ved que es bueno Jehová…"
              <cite className="block text-lg mt-2 text-white/80">(Salmo 34:8)</cite>
            </blockquote>
            
            <p className="text-xl">
              Que este dulce también toque tu vida.
            </p>
          </div>
          
          <p className="text-xl font-semibold">
            Pregunta, encarga, comparte. Aquí estamos para servirte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InspirationalSection;