import React from 'react';
import { useParams } from 'react-router-dom';
import { properties } from '../data/properties';
import ImageGallery from '../components/ImageGallery';
import ContactSection from '../components/ContactSection';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties[id];

  if (!property) {
    return (
      <div className="min-h-screen bg-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-goldenrod">Proprietate negăsită</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-goldenrod">{property.title}</h1>
        
        <ImageGallery images={property.images} title={property.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black p-6 rounded-lg border border-goldenrod">
            <h2 className="text-2xl font-bold mb-4 text-goldenrod">Detalii Proprietate</h2>
            <p className="text-white mb-4">Suprafață utilă: {property.surface}</p>
            <p className="text-white mb-4">Număr camere: {property.rooms}</p>
            <p className="text-white mb-4">{property.description}</p>
          </div>

          <div className="bg-black p-6 rounded-lg border border-goldenrod">
            <h2 className="text-2xl font-bold mb-4 text-goldenrod">Facilități și Dotări</h2>
            <ul className="text-white space-y-2">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-goldenrod mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ContactSection />
      </div>
    </div>
  );
}