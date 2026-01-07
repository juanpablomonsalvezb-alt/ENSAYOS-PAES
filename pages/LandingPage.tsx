import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, BookOpen, Timer, CheckCircle, ShieldCheck } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-white px-4 py-12 md:px-10 lg:px-20 lg:py-24">
        <div className="flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-center">
          {/* Hero Content */}
          <div className="flex flex-1 flex-col gap-6 text-left">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                Admisión 2025
              </span>
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-dark md:text-5xl lg:text-6xl">
                Domina la PAES con Ensayos Reales
              </h1>
              <h2 className="text-lg font-normal leading-relaxed text-sub max-w-xl">
                Practica con ensayos de 65 preguntas cronometradas para Matemáticas y Comprensión Lectora. Prepárate con la exigencia y el formato del día real.
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Link to="/planes" className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-xl bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:scale-105">
                Obtener Acceso Premium
              </Link>
              <Link to="/planes" className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-xl bg-gray-100 px-6 text-base font-bold text-dark transition-colors hover:bg-gray-200">
                Ver temarios
              </Link>
            </div>
            
            <div className="mt-2 flex items-center gap-2 text-sm text-sub font-medium">
              <ShieldCheck size={18} className="text-primary" />
              <span>Actualizado al temario DEMRE vigente</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full lg:pl-10">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-200 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Estudiante estudiando" 
                className="h-full w-full object-cover object-center transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-bg-light px-4 py-16 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-dark md:text-4xl">
              Todo lo que necesitas para tu puntaje
            </h2>
            <p className="max-w-2xl text-base text-sub">
              Nuestra plataforma está diseñada específicamente para replicar la experiencia de rendir la PAES.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary">
                <Calculator size={28} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-dark">Matemáticas M1 y M2</h3>
                <p className="text-sm leading-relaxed text-sub">
                  Ensayos actualizados al temario DEMRE con ejercicios de Números, Álgebra, Geometría y Probabilidades.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary">
                <BookOpen size={28} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-dark">Comprensión Lectora</h3>
                <p className="text-sm leading-relaxed text-sub">
                  Textos literarios y no literarios variados, preguntas de vocabulario contextual e inferencia según modelo vigente.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary">
                <Timer size={28} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-dark">Simulación Real</h3>
                <p className="text-sm leading-relaxed text-sub">
                  Formato de 65 preguntas con tiempo límite estricto y cálculo de puntaje inmediato al finalizar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="bg-white px-4 py-20 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12">
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-dark md:text-4xl">Acceso Simple y Transparente</h2>
            <p className="mt-4 text-sub text-lg">Invierte en tu futuro con un pago único. Sin suscripciones mensuales ocultas.</p>
          </div>

          <div className="flex w-full justify-center">
            <div className="flex w-full max-w-[420px] flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl transition-transform hover:scale-[1.01]">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-dark">Plan Completo PAES</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                    Más Popular
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight text-dark">$15.000</span>
                  <span className="text-sm font-medium text-sub">/ pago único</span>
                </div>
                <p className="text-sm text-sub">Acceso total hasta la fecha de la prueba.</p>
              </div>
              
              <hr className="border-gray-100" />
              
              <div className="flex flex-col gap-4">
                {[
                  "Acceso ilimitado a banco de preguntas Matemáticas",
                  "Acceso ilimitado a ensayos de Lectura",
                  "Modo ensayo cronometrado (Simulación)",
                  "Resultados y correcciones inmediatas",
                  "Historial de progreso y puntajes"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-dark">
                    <CheckCircle size={20} className="shrink-0 text-primary" weight="fill" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/planes" className="mt-2 flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-primary px-4 text-base font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25">
                Comprar Acceso Ahora
              </Link>
              <p className="text-center text-xs text-sub">Pago seguro vía WebPay. Activación inmediata.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bg-light px-4 py-24 border-t border-gray-200">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 text-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-dark md:text-5xl">
              ¿Listo para asegurar tu ingreso a la universidad?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-sub">
              Únete a miles de estudiantes que ya están practicando y mejorando sus puntajes cada semana.
            </p>
          </div>
          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
            <Link to="/planes" className="flex h-12 min-w-[200px] items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-md transition-colors hover:bg-primary-dark">
              Crear Cuenta Gratis
            </Link>
            <Link to="/dashboard" className="flex h-12 min-w-[200px] items-center justify-center rounded-lg bg-white px-8 text-base font-bold text-dark shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-gray-50">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;