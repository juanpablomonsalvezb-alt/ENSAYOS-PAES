import React from 'react';
import { GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 dark:bg-bg-dark">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-dark">
          <GraduationCap className="text-primary" size={24} />
          <span className="font-bold">Portal Ensayos PAES</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-sub">
          <a href="#" className="hover:text-primary hover:underline">Términos de Servicio</a>
          <a href="#" className="hover:text-primary hover:underline">Política de Privacidad</a>
          <a href="#" className="hover:text-primary hover:underline">Soporte</a>
        </div>
        
        <div className="text-sm text-gray-400">
          © 2024 Portal PAES. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;