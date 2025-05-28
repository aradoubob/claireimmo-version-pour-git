import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../components/Image';

const projects = [
  {
    id: 1,
    title: 'CASA 1 PE COLT ',
    image: 'images/01.jpg',
    rooms: 4 ,
    surface: '111 mp',
    features: [
      'Living spațios',
      'Bucătărie 15.5 mp',
      'Grădină privată - teren 501 mp',
      '2 baie, camera tehnica',
      'terasa privata',
      '2 locuri de parcare'
    ]
  },
  {
    id: 2,
    title: 'CASA 7 PE COLT ',
    image: 'images/casa7.jpg',
    rooms: 4,
    surface: '111,3 mp',
    features: [
      'Living spațios',
      'Bucătărie 15,5 mp',
      'Grădină privată - teren 321 mp',
      '2 baie, camera tehnica',
      'terasa privata',
      '2 locuri de parcare'
    ]
  },
  {
    id: 3,
    title: 'CASE DIN MIJLOC',
    image: 'images/08mijloc.jpg',
    rooms: 4,
    surface: '118,7 mp',
    features: [
      'Living spațios',
      'Bucătărie 13 mp',
      'Grădină privată - teren 254 mp',
      '2 baie, camara',
      'terasa privata',
      'carport acoperit',
    ]
  }
];

export default function Home() {
  return (
    <div className="page-container min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ 
          backgroundImage:'url(images/filigrane2.jpg)',
          filter: 'brightness(0.2)'
        }}
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-goldenrod mb-8">
            Bine ați venit în noul cartier din Aradul Nou:
            <span className="block text-goldenrod mt-2">
              CARTIER NEWBRIDGE!
            </span>
          </h2>
          
          <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg border border-goldenrod">
            <p className="text-xl text-white leading-relaxed">
              Cartierul "NewBridge" - un loc de excepție creat pentru tine!
              <br />La Newbridge vei găsi case frumoase cu finisaje autentice, proiectate și executate cu atenție. 
Am creat un ansamblu rezidențial variat ca arhitectură și spații. Familia ta va găsi o locuință care să i se potrivească.
</p>
            
          <div className="mt-9">
            <h3 className="text-2xl font-bold text-goldenrod">
              AGENT DE VANZARI: IMMO SHELBY - TEL: 0786 322 385
            </h3>
          </div>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-black bg-opacity-60 rounded-lg shadow-lg overflow-hidden border border-goldenrod transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-goldenrod">{project.title}</h2>
                <p className="text-white">Suprafata utila: {project.surface}</p>
                <p className="text-white mb-4">Camere: {project.rooms}</p>
                <div className="mb-4">
                  <h3 className="text-goldenrod font-semibold mb-2">Facilități:</h3>
                  <ul className="text-white">
                    {project.features.map((feature, index) => (
                      <li key={index} className="mb-1">• {feature}</li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to={`/properties/${project.id}`}
                  className="inline-block bg-black text-goldenrod border-2 border-goldenrod px-6 py-2 rounded-lg hover:bg-goldenrod hover:text-black transition-colors"
                >
                  Vezi detalii
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-center mt-16">
          <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg border border-goldenrod">
            <p className="text-xl text-white leading-relaxed">

            În inima acestui cartier se află angajamentul nostru față de calitate, inovație și design unic. 

            Am colaborat cu cel mai talentat arhitect, TARA PLAN și urbaniști pentru a crea un mediu care îmbină armonii elegante clasice cu facilități moderne.
Fiecare casă este meticulos planificată și va fi construită pentru a oferi confort, funcționalitate și durabilitate. De la spațiile verzi generoase la facilitățile comunitare, fiecare aspect al acestui cartier a fost conceput pentru a sprijini un stil de viață activ și sănătos pentru toți locuitorii.
La CLAIRE IMMOBILIARE suntem dedicati să utilizăm cele mai recente tehnologii și practici de construcție sustenabilă pentru a minimiza impactul asupra mediului și pentru a asigura un viitor mai bun pentru generațiile viitoare.



              <br />
              Hai să facem din visul tău realitate!
            </p>
</div>
</div>

<div className="max-w-3xl mx-auto text-center mt-8">
          <div className="bg-black bg-opacity-60 rounded-lg shadow-lg border border-goldenrod overflow-hidden">
            <Image
              src="/images/dia01.jpg"
              alt="Exemplu Cartier Newbridge"
              className="w-full h-full object-cover"
            />
</div>
        </div>
        <div className="max-w-3xl mx-auto text-center mt-8">
          <div className="bg-black bg-opacity-60 rounded-lg shadow-lg border border-goldenrod overflow-hidden">
            <Image
              src="/images/dia02.jpg"
              alt="Exemplu 2 Cartier Newbridge"
              className="w-full h-full object-cover"
            />
  </div>
        </div>
        <div className="max-w-3xl mx-auto text-center mt-8">
          <div className="bg-black bg-opacity-60 rounded-lg shadow-lg border border-goldenrod overflow-hidden">
            <Image
              src="/images/dia03.jpg"
              alt="Exemplu 2 Cartier Newbridge"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center mt-8">
          <div className="bg-black bg-opacity-60 rounded-lg shadow-lg border border-goldenrod overflow-hidden">
            <Image
              src="/images/dia04.jpg"
              alt="Exemplu 2 Cartier Newbridge"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
