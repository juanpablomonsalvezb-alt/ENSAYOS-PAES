import React from 'react';
import { Play, Clock, HelpCircle, ArrowRight, BookOpen, Calculator, Info, Lightbulb } from 'lucide-react';
import { UserProgress } from '../types';

const DashboardPage: React.FC = () => {
  const courses: UserProgress[] = [
    {
      courseId: 'm1',
      courseName: 'Competencia Matemática 1 (M1)',
      status: 'available',
      timeLeft: '2 horas 20 minutos',
      totalQuestions: 65,
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
    },
    {
      courseId: 'lectura',
      courseName: 'Competencia Lectora',
      status: 'in-progress',
      progressPercent: 45,
      totalQuestions: 65,
      answeredQuestions: 30,
      imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop',
    }
  ];

  return (
    <div className="flex w-full flex-col items-center bg-bg-light py-8 px-4 md:px-10">
      <div className="flex w-full max-w-5xl flex-col gap-8">
        
        {/* Page Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-black leading-tight tracking-tight text-dark md:text-4xl">
            Hola, Estudiante
          </h1>
          <p className="text-lg text-sub font-normal">
            ¿Qué quieres practicar hoy? Selecciona un ensayo para comenzar o continuar tu preparación.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-6">
          
          {/* Card 1: Math (Start State) */}
          <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative h-48 w-full shrink-0 md:h-auto md:w-80">
                <img 
                  src={courses[0].imageUrl} 
                  alt="Mathematics" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-primary backdrop-blur-sm shadow-sm">
                  <Calculator size={14} />
                  <span>Matemáticas</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex grow flex-col gap-4 p-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold leading-tight text-dark">{courses[0].courseName}</h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded bg-green-50 px-2.5 py-1 text-xs font-bold text-green-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                      Disponible
                    </span>
                  </div>
                  <p className="text-sm text-sub md:text-base">
                    Ensayo oficial - Modelo PAES. Evalúa tus conocimientos en números, álgebra, geometría y datos.
                  </p>
                </div>
                
                <div className="mt-auto flex flex-col gap-4 pt-2">
                  <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-sub">
                    <div className="flex items-center gap-2">
                      <HelpCircle size={18} />
                      <span>{courses[0].totalQuestions} Preguntas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} />
                      <span>{courses[0].timeLeft}</span>
                    </div>
                  </div>
                  
                  <div className="h-px w-full bg-gray-100"></div>
                  
                  <div className="flex justify-end">
                    <button className="flex w-full items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow active:scale-95 sm:w-auto">
                      <span>Comenzar Ensayo</span>
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Reading (In Progress) */}
          <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm ring-1 ring-primary/5 transition-all hover:shadow-md">
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative h-48 w-full shrink-0 md:h-auto md:w-80">
                <img 
                  src={courses[1].imageUrl} 
                  alt="Reading" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-orange-600 backdrop-blur-sm shadow-sm">
                  <BookOpen size={14} />
                  <span>Comprensión Lectora</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex grow flex-col gap-4 p-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold leading-tight text-dark">{courses[1].courseName}</h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded bg-yellow-50 px-2.5 py-1 text-xs font-bold text-yellow-700">
                      <Clock size={14} />
                      En Progreso
                    </span>
                  </div>
                  <p className="text-sm text-sub md:text-base">
                    Ensayo oficial - Modelo PAES. Practica tu comprensión con textos literarios y no literarios.
                  </p>
                </div>
                
                {/* Progress */}
                <div className="flex flex-col gap-2 py-1">
                  <div className="flex items-end justify-between">
                    <p className="text-xs font-bold uppercase tracking-wide text-dark">Tu Progreso</p>
                    <p className="text-sm font-bold text-primary">{courses[1].progressPercent}%</p>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div 
                      className="h-full rounded-full bg-primary transition-all duration-500" 
                      style={{ width: `${courses[1].progressPercent}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-xs text-sub">
                    Has respondido {courses[1].answeredQuestions} de {courses[1].totalQuestions} preguntas. Te quedan aprox. 1h 15m.
                  </p>
                </div>
                
                <div className="mt-auto flex flex-col gap-4">
                  <div className="h-px w-full bg-gray-100"></div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-sub font-medium">
                      <HelpCircle size={18} />
                      <span>{courses[1].totalQuestions} total</span>
                    </div>
                    
                    <button className="flex w-full items-center justify-center rounded-lg border-2 border-primary bg-transparent px-6 py-2 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white sm:w-auto">
                      <span>Continuar Ensayo</span>
                      <Play size={16} className="ml-2" fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Info Tips */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-start gap-4 rounded-xl border border-blue-100 bg-blue-50 p-5">
            <Info className="mt-0.5 shrink-0 text-primary" size={24} />
            <div>
              <p className="mb-1 text-sm font-bold text-dark">Sobre la PAES Regular</p>
              <p className="text-xs leading-relaxed text-sub">
                Recuerda que los ensayos están actualizados al temario oficial del DEMRE para el proceso de admisión actual.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-purple-100 bg-purple-50 p-5">
            <Lightbulb className="mt-0.5 shrink-0 text-purple-600" size={24} />
            <div>
              <p className="mb-1 text-sm font-bold text-dark">Tip de estudio</p>
              <p className="text-xs leading-relaxed text-sub">
                Intenta realizar los ensayos en un ambiente silencioso y sin interrupciones para simular las condiciones reales.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;