import React, { useEffect, useState } from 'react';
import { Play, Clock, HelpCircle, ArrowRight, BookOpen, Calculator, BarChart3, Layout, Settings, LogOut, Search, Bell } from 'lucide-react';
import { UserProgress, QuizResult } from '../types';
import { Link, useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [lastResult, setLastResult] = useState<QuizResult | null>(null);

  // Load history on mount
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    if (history.length > 0) {
      setLastResult(history[0]);
    }
  }, []);

  const courses: UserProgress[] = [
    {
      courseId: 'm1',
      courseName: 'Matemática M1',
      status: 'available',
      timeLeft: '2h 20m',
      totalQuestions: 65,
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
    },
    {
      courseId: 'lectura',
      courseName: 'Comprensión Lectora',
      status: 'in-progress',
      progressPercent: 45,
      totalQuestions: 65,
      answeredQuestions: 30,
      imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      courseId: 'historia',
      courseName: 'Historia y Cs. Sociales',
      status: 'available',
      timeLeft: '2h 00m',
      totalQuestions: 65,
      imageUrl: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2069&auto=format&fit=crop',
    }
  ];

  const handleStartQuiz = (courseId: string) => {
    navigate(`/ensayo/${courseId}`);
  };

  return (
    <div className="flex min-h-screen bg-[#f4f7f9]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-gray-200 bg-white lg:block">
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b border-gray-100 px-6">
            <span className="text-xl font-black text-primary">PORTAL<span className="text-dark">PAES</span></span>
          </div>
          
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <nav className="flex flex-col gap-1">
              <Link to="/dashboard" className="flex items-center gap-3 rounded-lg bg-primary/10 px-4 py-3 text-sm font-bold text-primary">
                <Layout size={20} />
                <span>Mis Ensayos</span>
              </Link>
              <Link to="/planes" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-sub hover:bg-gray-50 hover:text-dark">
                <BookOpen size={20} />
                <span>Planes y Precios</span>
              </Link>
              <Link to="#" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-sub hover:bg-gray-50 hover:text-dark">
                <BarChart3 size={20} />
                <span>Mis Resultados</span>
              </Link>
              <Link to="#" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-sub hover:bg-gray-50 hover:text-dark">
                <Settings size={20} />
                <span>Configuración</span>
              </Link>
            </nav>
          </div>

          <div className="border-t border-gray-100 p-4">
            <Link to="/" className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50">
              <LogOut size={20} />
              <span>Cerrar Sesión</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white/80 px-4 backdrop-blur md:px-8">
          <h2 className="text-lg font-bold text-dark lg:hidden">Portal PAES</h2>
          
          <div className="hidden w-full max-w-md lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Buscar ensayo o materia..." 
                className="h-10 w-full rounded-full border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative rounded-full bg-gray-50 p-2 text-gray-500 hover:bg-gray-100">
              <Bell size={20} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3">
              <div className="hidden text-right md:block">
                <p className="text-sm font-bold text-dark">Juan Pérez</p>
                <p className="text-xs text-sub">Estudiante Premium</p>
              </div>
              <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100" alt="Avatar" />
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-8">
          <div className="mx-auto max-w-6xl">
            {/* Welcome Banner / Last Score */}
            <div className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-blue-600 p-8 text-white shadow-lg">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold md:text-3xl">¡Vamos a practicar!</h1>
                  {lastResult ? (
                    <p className="mt-2 text-blue-100">Tu último puntaje fue <span className="font-bold text-white">{lastResult.score}</span> puntos en M1.</p>
                  ) : (
                    <p className="mt-2 text-blue-100">Aún no has rendido ensayos. ¡Comienza hoy!</p>
                  )}
                </div>
                <button className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary shadow-sm transition-transform hover:scale-105 active:scale-95">
                  Ver historial completo
                </button>
              </div>
            </div>

            {/* Content Grid */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-dark">Mis Ensayos Asignados</h3>
              <div className="flex gap-2">
                 <span className="cursor-pointer rounded-lg bg-white px-3 py-1 text-sm font-medium text-dark shadow-sm ring-1 ring-gray-200">Todos</span>
                 <span className="cursor-pointer rounded-lg px-3 py-1 text-sm font-medium text-sub hover:bg-gray-100">Matemáticas</span>
                 <span className="cursor-pointer rounded-lg px-3 py-1 text-sm font-medium text-sub hover:bg-gray-100">Lenguaje</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <div key={course.courseId} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                  {/* Card Header/Image */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <img 
                      src={course.imageUrl} 
                      alt={course.courseName} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-4 text-white">
                      <span className="text-xs font-bold uppercase tracking-wider opacity-90">Ensayo PAES</span>
                      <h4 className="font-bold leading-tight">{course.courseName}</h4>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-4 flex items-center gap-4 text-xs font-medium text-sub">
                      <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-2 py-1">
                        <HelpCircle size={14} />
                        <span>{course.totalQuestions} Preg.</span>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-2 py-1">
                        <Clock size={14} />
                        <span>{course.timeLeft || '65 min'}</span>
                      </div>
                    </div>

                    {course.status === 'in-progress' ? (
                       <div className="mb-4 flex flex-col gap-2">
                        <div className="flex items-end justify-between text-xs">
                          <span className="font-bold text-dark">En progreso</span>
                          <span className="font-bold text-primary">{course.progressPercent}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                          <div className="h-full rounded-full bg-yellow-500" style={{ width: `${course.progressPercent}%` }}></div>
                        </div>
                       </div>
                    ) : (
                      <div className="mb-4 text-xs text-sub">
                        Disponible para rendir. Incluye solucionario al finalizar.
                      </div>
                    )}

                    <div className="mt-auto">
                      <button 
                        onClick={() => handleStartQuiz(course.courseId)}
                        className={`flex w-full items-center justify-center rounded-lg py-2.5 text-sm font-bold transition-colors ${
                        course.status === 'in-progress' 
                          ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                          : 'bg-primary text-white hover:bg-primary-dark'
                      }`}>
                        {course.status === 'in-progress' ? 'Continuar' : 'Comenzar'}
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Add New Card */}
              <Link to="/planes" className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-6 transition-all hover:border-primary/50 hover:bg-blue-50/50">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-100">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-dark">Adquirir más ensayos</h4>
                  <p className="mt-1 text-xs text-sub">Desbloquea contenido premium</p>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;