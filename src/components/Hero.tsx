import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1200")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Bienvenidos a <br />
          <span className="text-[#F5A623]">Dulce Gracia</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Donde cada bocado tiene sabor a hogar… y un toque de cielo.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <p className="text-lg mb-6 leading-relaxed">
            Hechos con amor, fe y los mejores ingredientes naturales, nuestros postres venezolanos 
            te traen una experiencia auténtica, libre de conservantes y llena de sabor.
          </p>
          
          <p className="text-lg mb-6 italic">
            ✨ Porque "todo lo que Dios creó es bueno" (1 Timoteo 4:4) y nosotros lo convertimos 
            en dulzura para tu mesa.
          </p>
        </div>
        
        <a 
          href="https://wa.me/+584242481824"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#F5A623] hover:bg-[#e6941a] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          📩 Encarga el tuyo hoy
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;