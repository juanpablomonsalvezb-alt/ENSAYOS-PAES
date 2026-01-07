import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GraduationCap, Menu, X, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Simple logic to mimic logged-in state for the dashboard route
  const isLoggedIn = location.pathname === '/dashboard';

  const handleLoginClick = () => {
    navigate('/dashboard');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur px-6 py-3 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <GraduationCap size={20} weight="bold" />
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-dark">
            Portal Ensayos PAES
          </h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-dark hover:text-primary transition-colors">Inicio</Link>
            <Link to="/planes" className="text-sm font-medium text-dark hover:text-primary transition-colors">Planes</Link>
            <Link to="#" className="text-sm font-medium text-dark hover:text-primary transition-colors">Contacto</Link>
          </nav>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                 <Link to="/" className="hidden md:flex h-10 items-center justify-center rounded-lg bg-gray-100 px-4 text-sm font-bold text-dark transition-colors hover:bg-gray-200">
                  Cerrar Sesión
                </Link>
                <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100" alt="User" />
                </div>
              </>
            ) : (
              <>
                <button 
                  onClick={handleLoginClick}
                  className="flex h-10 min-w-[100px] items-center justify-center rounded-lg bg-gray-100 px-4 text-sm font-bold text-dark transition-colors hover:bg-gray-200"
                >
                  Iniciar Sesión
                </button>
                <Link 
                  to="/planes"
                  className="flex h-10 min-w-[100px] items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-dark p-1"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-gray-200 bg-white p-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-2 border-b border-gray-50">Inicio</Link>
            <Link to="/planes" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-2 border-b border-gray-50">Planes</Link>
            <Link to="#" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-2 border-b border-gray-50">Contacto</Link>
            
            <div className="mt-2 flex flex-col gap-3">
              <button onClick={handleLoginClick} className="w-full h-12 rounded-lg bg-gray-100 font-bold text-dark">Iniciar Sesión</button>
              <Link to="/planes" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center w-full h-12 rounded-lg bg-primary font-bold text-white">Registrarse</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;