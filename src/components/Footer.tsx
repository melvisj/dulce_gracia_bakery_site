import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3F2E27] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#F5A623]">Dulce Gracia</h3>
            <p className="text-white/80 leading-relaxed">
              Postres venezolanos hechos con amor, fe y los mejores ingredientes naturales.
              Donde cada bocado tiene sabor a hogar… y un toque de cielo.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#B3C0AE]">Contacto</h4>
            <div className="space-y-2 text-white/80">
              <p>📧 dulcegracia.pedidosmaiquetia@gmail.com</p>
              <p>📱 WhatsApp: +58 424 248 1824</p>
              <p>📍 Maiquetía, Venezuela</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#B3C0AE]">Síguenos</h4>
            <div className="space-y-2 text-white/80">
              <p>📸 @Dulcegracia.maiquetia</p>
              <p>🎵 @dulcegraciamaiquetia</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 mb-4">
            © 2025 Dulce Gracia. Todos los derechos reservados.
          </p>
          <p className="text-[#F5A623] flex items-center justify-center gap-2">
            Hecho con <Heart size={16} className="text-red-500" fill="currentColor" /> por Yessica García
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;