import React from 'react';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Ponqués Tradicionales",
      image: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Suaves y esponjosos, como los de antes"
    },
    {
      name: "Quesillos Caseros",
      image: "https://images.pexels.com/photos/1120581/pexels-photo-1120581.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Con ese sabor auténtico de casa"
    },
    {
      name: "Tortas Venezolanas",
      image: "https://images.pexels.com/photos/1721208/pexels-photo-1721208.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Tradición en cada rebanada"
    },
    {
      name: "Tres Leches",
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Cremoso y delicado"
    },
    {
      name: "Postres de Temporada",
      image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Sorpresas dulces según la época"
    },
    {
      name: "Dulces Especiales",
      image: "https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Para ocasiones únicas"
    }
  ];

  return (
    <section id="productos" className="py-20 bg-[#EDD0C0]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3F2E27] mb-6">
            Postres que hablan por sí solos
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[#3F2E27] mb-6">
              Nuestra línea de delicias incluye:
            </p>
            
            <ul className="text-lg text-[#3F2E27] mb-6 space-y-2">
              <li>• Ponqués suaves y esponjosos</li>
              <li>• Quesillos con sabor casero</li>
              <li>• Tortas venezolanas tradicionales</li>
              <li>• Postres sorpresa según la temporada</li>
            </ul>
            
            <p className="text-lg text-[#846A5B] italic mb-4">
              Sin conservantes artificiales, sin rellenos falsos. Solo ingredientes nobles, 
              frescos, como los de antes…
            </p>
            
            <p className="text-lg text-[#F5A623] font-semibold">
              💛 Perfectos para regalar, compartir o darte ese gusto que tanto mereces.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3F2E27] mb-2">{product.name}</h3>
                <p className="text-[#846A5B]">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://wa.me/+584242481824"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#846A5B] hover:bg-[#6b5249] text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            📩 Saber más sobre nuestros postres
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;