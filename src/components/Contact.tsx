import React from 'react';
import { Mail, MessageCircle, Instagram, Music } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3F2E27] mb-8">
            ¿Quieres sorprender a alguien con un dulce hecho a mano?
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-[#846A5B] mb-6">
              ¿Tienes alguna alergia o pedido especial?
            </p>
            
            <p className="text-2xl text-[#3F2E27] font-semibold">
              ¡Escríbenos! Estamos felices de endulzar tu día.
            </p>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+584242481824"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <MessageCircle size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-1">WhatsApp</h3>
            <p className="text-sm opacity-90">Conversemos directamente</p>
          </a>

          {/* Email */}
          <a
            href="mailto:dulcegracia.pedidosmaiquetia@gmail.com"
            className="bg-[#846A5B] hover:bg-[#6b5249] text-white p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <Mail size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-1">Email</h3>
            <p className="text-xs opacity-90 break-all">dulcegracia.pedidosmaiquetia@gmail.com</p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/Dulcegracia.maiquetia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <Instagram size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-1">Instagram</h3>
            <p className="text-sm opacity-90">@Dulcegracia.maiquetia</p>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com/@dulcegraciamaiquetia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <Music size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-1">TikTok</h3>
            <p className="text-sm opacity-90">@dulcegraciamaiquetia</p>
          </a>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-[#EDD0C0] rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#3F2E27] mb-4">Horarios de Atención</h3>
            <p className="text-[#846A5B] text-lg">
              Lunes a Sábados: 8:00 AM - 8:00 PM<br />
              <span className="text-sm italic">Respuesta garantizada en menos de 2 horas</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;