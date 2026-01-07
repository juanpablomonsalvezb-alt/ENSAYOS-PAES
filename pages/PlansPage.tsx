import React, { useState } from 'react';
import { PlanItem } from '../types';
import { BookOpen, Calculator, FlaskConical, ScrollText, Sigma, Check, ArrowRight } from 'lucide-react';

const availablePlans: PlanItem[] = [
  {
    id: 'lectura',
    name: 'Competencia Lectora',
    description: '8 Ensayos anuales + Retroalimentación',
    price: 40000,
    category: 'popular',
    icon: 'book'
  },
  {
    id: 'm1',
    name: 'Matemática 1 (M1)',
    description: '8 Ensayos anuales + Ejercicios M1',
    price: 40000,
    category: 'basic',
    icon: 'calc'
  },
  {
    id: 'ciencias',
    name: 'Ciencias',
    description: 'Física, Química y Biología (Común + Electivo)',
    price: 20000,
    category: 'standard',
    icon: 'science'
  },
  {
    id: 'historia',
    name: 'Historia y Cs. Sociales',
    description: 'Cobertura curricular completa + Historia de Chile',
    price: 20000,
    category: 'standard',
    icon: 'history'
  },
  {
    id: 'm2',
    name: 'Matemática 2 (M2)',
    description: 'Plan avanzado para carreras científicas. Incluye ejercicios complejos, 10 ensayos específicos y clases grabadas.',
    price: 80000,
    category: 'intensive',
    icon: 'sigma'
  }
];

const PlansPage: React.FC = () => {
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);

  const togglePlan = (id: string) => {
    setSelectedPlans(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'book': return <BookOpen size={24} />;
      case 'calc': return <Calculator size={24} />;
      case 'science': return <FlaskConical size={24} />;
      case 'history': return <ScrollText size={24} />;
      case 'sigma': return <Sigma size={24} />;
      default: return <BookOpen size={24} />;
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'popular': return 'bg-primary/10 text-primary';
      case 'basic': return 'bg-blue-100 text-blue-700';
      case 'intensive': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'book': return 'bg-blue-100 text-blue-700';
      case 'calc': return 'bg-green-100 text-green-700';
      case 'science': return 'bg-purple-100 text-purple-700';
      case 'history': return 'bg-orange-100 text-orange-700';
      case 'sigma': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100';
    }
  };

  // Calculations
  const selectedItems = availablePlans.filter(p => selectedPlans.includes(p.id));
  const subtotal = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  const discountRate = selectedPlans.length >= 3 ? 0.10 : 0;
  const discountAmount = subtotal * discountRate;
  const total = subtotal - discountAmount;

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <div className="w-full border-b border-gray-200 bg-white py-12 px-4 text-center md:px-10 lg:px-40">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-dark md:text-5xl">
            Prepara la PAES a tu medida
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-normal leading-relaxed text-sub">
            Selecciona las pruebas que necesitas, arma tu pack personalizado y comienza a practicar hoy mismo con nuestros ensayos actualizados.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex w-full max-w-[1280px] flex-col gap-8 px-4 py-12 md:px-10 lg:flex-row">
        
        {/* Left Column: Grid */}
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex items-center gap-3 pb-2">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <BookOpen size={24} />
            </div>
            <h2 className="text-2xl font-bold leading-tight text-dark">Elige tus asignaturas</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {availablePlans.map((plan) => {
              const isSelected = selectedPlans.includes(plan.id);
              const isFullWidth = plan.id === 'm2';

              return (
                <div 
                  key={plan.id}
                  onClick={() => togglePlan(plan.id)}
                  className={`
                    group relative cursor-pointer rounded-xl border-2 p-6 transition-all duration-200 hover:shadow-lg
                    ${isSelected ? 'border-primary bg-blue-50/30' : 'border-gray-200 bg-white hover:border-primary/50'}
                    ${isFullWidth ? 'md:col-span-2 flex flex-col md:flex-row gap-6 items-center' : 'flex flex-col h-full'}
                  `}
                >
                  {/* Icon & Category Header */}
                  <div className={`flex w-full items-start justify-between ${isFullWidth ? 'md:w-auto md:block' : 'mb-4'}`}>
                    <div className={`rounded-xl p-3 ${getIconBg(plan.icon)}`}>
                      {getIcon(plan.icon)}
                    </div>
                    {!isFullWidth && plan.category !== 'standard' && (
                      <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${getCategoryStyles(plan.category)}`}>
                        {plan.category === 'popular' ? 'Popular' : plan.category === 'basic' ? 'Básico' : 'Intensivo'}
                      </span>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-dark">{plan.name}</h3>
                      {isFullWidth && (
                        <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${getCategoryStyles(plan.category)}`}>
                          Intensivo
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-sub">{plan.description}</p>
                  </div>

                  {/* Price & Action */}
                  <div className={`
                    mt-auto flex items-center justify-between
                    ${isFullWidth ? 'w-full md:w-auto md:flex-col md:items-end md:pl-6 md:border-l md:border-dashed border-gray-200 pt-4 md:pt-0 border-t md:border-t-0' : 'w-full pt-4 border-t border-dashed border-gray-200'}
                  `}>
                    <div className="flex flex-col md:items-end">
                      <span className="text-3xl font-black text-dark">${plan.price.toLocaleString('es-CL')}</span>
                      <span className="text-xs font-medium text-sub">Pago único anual</span>
                    </div>

                    {/* Checkbox Visual */}
                    <div className={`
                      flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors
                      ${isSelected ? 'border-primary bg-primary text-white' : 'border-gray-200 group-hover:border-primary'}
                      ${isFullWidth ? 'md:hidden' : ''}
                    `}>
                      <Check size={16} className={`font-bold ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                    </div>

                    {/* Add Button for Desktop Wide Card */}
                    {isFullWidth && (
                      <div className={`
                        hidden md:flex mt-3 rounded-lg px-4 py-2 text-sm font-bold transition-colors
                        ${isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-primary group-hover:bg-primary group-hover:text-white'}
                      `}>
                        {isSelected ? (
                          <span className="flex items-center gap-1"><Check size={16} /> Agregado</span>
                        ) : 'Agregar'}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Sticky Summary */}
        <div className="w-full shrink-0 lg:w-[380px]">
          <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-6 border-b border-gray-100 pb-4 text-xl font-bold text-dark">Resumen de tu compra</h3>
            
            {selectedItems.length === 0 ? (
              <div className="py-10 text-center">
                <div className="mb-3 flex justify-center text-gray-300">
                  <BookOpen size={48} strokeWidth={1} />
                </div>
                <p className="text-sm text-sub">Selecciona tus planes para ver el resumen</p>
              </div>
            ) : (
              <div className="mb-6 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2">
                {selectedItems.map(item => (
                  <div key={item.id} className="flex justify-between items-start">
                    <p className="text-sm font-medium text-dark">{item.name}</p>
                    <span className="text-sm font-bold text-dark">${item.price.toLocaleString('es-CL')}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mb-6 border-t border-gray-100 pt-4">
              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm text-sub">Subtotal</span>
                <span className="text-sm font-medium text-dark">${subtotal.toLocaleString('es-CL')}</span>
              </div>
              
              {discountRate > 0 && (
                <div className="mb-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-green-600">Descuento Pack (10%)</span>
                  <span className="text-sm font-bold text-green-600">-${discountAmount.toLocaleString('es-CL')}</span>
                </div>
              )}
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-dark">Total a pagar</span>
                <span className="text-3xl font-black text-primary">${total.toLocaleString('es-CL')}</span>
              </div>
            </div>

            <button 
              disabled={selectedItems.length === 0}
              className="group flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-primary px-4 text-base font-bold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg active:scale-[0.98] disabled:bg-gray-300 disabled:shadow-none disabled:cursor-not-allowed"
            >
              Ir al Pago
              <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="mt-4 flex justify-center gap-3 opacity-60 grayscale transition-all hover:grayscale-0">
               {/* Mock Payment Icons */}
               <div className="flex h-6 w-10 items-center justify-center rounded bg-gray-200 text-[8px] font-bold text-gray-500">VISA</div>
               <div className="flex h-6 w-10 items-center justify-center rounded bg-gray-200 text-[8px] font-bold text-gray-500">MC</div>
               <div className="flex h-6 w-10 items-center justify-center rounded bg-gray-200 text-[8px] font-bold text-gray-500">WEBPAY</div>
            </div>
          </div>

          {/* FAQ Mini */}
          <div className="mt-8 px-4">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-sub">Preguntas Frecuentes</h4>
            <div className="flex flex-col gap-3">
              <details className="group text-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-dark">
                  <span>¿Cuándo puedo empezar?</span>
                  <span className="transition group-open:rotate-180">
                    <ArrowRight size={14} className="rotate-90" />
                  </span>
                </summary>
                <div className="mt-2 text-sub">El acceso es inmediato una vez confirmado el pago.</div>
              </details>
              <div className="h-px bg-gray-200"></div>
              <details className="group text-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-dark">
                  <span>¿Puedo cambiar de plan?</span>
                  <span className="transition group-open:rotate-180">
                    <ArrowRight size={14} className="rotate-90" />
                  </span>
                </summary>
                <div className="mt-2 text-sub">Sí, puedes agregar asignaturas en cualquier momento pagando la diferencia.</div>
              </details>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlansPage;