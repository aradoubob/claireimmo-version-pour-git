taradimport React from 'react';

export default function Partners() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-goldenrod">Partenerii Noștri</h1>
        <div className="max-w-3xl mx-auto">

          
          <div className="bg-black rounded-lg shadow-lg p-6 mb-6 border border-goldenrod">
          <div className="flex items-center mb-4">
             <a   href="https://immoshelby.com/" target="_blank" rel="noopener noreferrer">
      <img 
        src="/images/logoshelby.jpg"  
        alt="Logo Partener 2" 
        className="h-20 w-auto mr-4 cursor-pointer"
        
      />
    </a>
               <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-goldenrod">IMMO SHELBY - Agentie imobiliara </h2>             
                                 href="https://immoshelby.com/" 
                <p className="text-goldenrod">Agentie partener</p>
              </div></div>
            <a
                    href="https://immoshelby.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-goldenrod hover:text-white transition-colors">
              Vizitează website-ul 
            </a>
          </div>
          

             <div className="bg-black rounded-lg shadow-lg p-6 mb-6 border border-goldenrod">
          <div className="flex items-center mb-4">
              <a   href="https://axe-m.com/" target="_blank" rel="noopener noreferrer">
      <img 
        src="/images/logoaxe.jpg"  
        alt="Logo Partener 2" 
        className="h-20 w-auto mr-4 cursor-pointer"
      />
    </a>
               <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-goldenrod">AXE MOBILIER - Tâmplarie</h2>             
                                 href="https://axe-m.com/" 
               <p className="text-goldenrod">Partener de încredere pentru lucrări de tâmplărie</p>
              </div></div>
            <a
      
              href="https://axe-m.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-goldenrod hover:text-white transition-colors">
              Vizitează website-ul 
            </a>
          </div>

          

             <div className="bg-black rounded-lg shadow-lg p-6 mb-6 border border-goldenrod">
          <div className="flex items-center mb-4">
              <a
  href="https://www.facebook.com/profile.php?id=100085609905106"
  target="_blank"
  rel="noopener noreferrer"
  role="link"
  tabIndex="0"
>
  <img
    src="/images/logobarbara.jpg"
    alt="Logo Facebook"
    className="h-20 w-auto mr-4 cursor-pointer"
  />
</a>
               <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-goldenrod"> Barbara Design Studio</h2>             
                               
                 <p className="text-goldenrod"> Design Studio</p>
              </div></div>
            <a
      
              href="https://www.facebook.com/profile.php?id=100085609905106" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-goldenrod hover:text-white transition-colors">
              Vizitează website-ul 
            </a>
          </div>


                 <div className="bg-black rounded-lg shadow-lg p-6 mb-6 border border-goldenrod">
          <div className="flex items-center mb-4">
              <a   href="https://investarad.com/" target="_blank" rel="noopener noreferrer">
      <img 
        src="/images/logoinvest.jpg"  
        alt="Logo Partener 4" 
        className="h-20 w-auto mr-4 cursor-pointer"
      />
    </a>
               <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-goldenrod">INVEST ARAD</h2>             
                                 href="https://investarad.com/" 
               <p className="text-goldenrod">Partener in investitie in Arad</p>
              </div></div>
            <a
      
              href="https://investarad.com/" 
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
