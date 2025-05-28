import React from 'react';

export default function Partners() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-goldenrod">Partenerii Noștri</h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-black rounded-lg shadow-lg p-6 mb-6 border border-goldenrod">
          <div className="flex items-center mb-4">
              <img 
                src="/images/logoaxe.jpg" 
                alt="Logo AXE MOBILIER" 
                className="h-20 w-auto mr-4"
              />
               <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-goldenrod">AXE MOBILIER - Tâmplarie</h2>             
                
                 href="https://axe-m.com/" 

                <p className="text-goldenrod">Partener de încredere pentru lucrări de tâmplărie</p>
              </div></div>
            <a
              href="https://axe-m.com/" 
              href="https://axe-m.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-goldenrod hover:text-white transition-colors">
              Vizitează website-ul 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}