import React from 'react';
import Image from './Image';

export default function ImageGallery({ images, title }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {images.map((image, index) => (
        <div key={index} className="relative h-64 md:h-80">
          <Image
            src={image}
            alt={`${title} - Imagine ${index + 1}`}
            className="w-full h-full object-cover rounded-lg border border-goldenrod"
          />
        </div>
      ))}
    </div>
  );
}