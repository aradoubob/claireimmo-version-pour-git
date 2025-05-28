import React from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

export default function Properties() {
  const propertiesList = Object.values(properties);

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-goldenrod">Proprietăți de vânzare</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesList.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}