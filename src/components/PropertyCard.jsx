import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

export default function PropertyCard({ property }) {
  return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden border border-goldenrod transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-64">
        <Image 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-goldenrod">{property.title}</h2>
        <p className="text-white">Suprafata utila: {property.surface}</p>
        <p className="text-white">Camere: {property.rooms}</p>
        <p className="text-white mb-4">Preț: {property.price}</p>
        <div className="mb-4">
          <h3 className="text-goldenrod font-semibold mb-2">Facilități:</h3>
          <ul className="text-white">
            {property.features.map((feature, index) => (
              <li key={index} className="mb-1">• {feature}</li>
            ))}
          </ul>
        </div>
        <Link 
          to={`/properties/${property.id}`}
          className="inline-block bg-black text-goldenrod border-2 border-goldenrod px-6 py-2 rounded-lg hover:bg-goldenrod hover:text-black transition-colors"
        >
          Mai multe detalii
        </Link>
      </div>
    </div>
  );
}