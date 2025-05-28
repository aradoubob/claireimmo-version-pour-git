import React from 'react';

export default function ContactSection() {
  return (
    <div className="mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4 text-goldenrod">Interesat de această proprietate?</h2>
      <p className="text-white mb-6">Contactați agentul nostru pentru mai multe detalii și programarea unei vizionări</p>
      <div className="space-y-2">
        <p className="text-goldenrod">IMMO SHELBY</p>
        <a href="tel:0786322385" className="text-white hover:text-goldenrod transition-colors">
          0786 322 385
        </a>
      </div>
    </div>
  );
}