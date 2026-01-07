import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Clock, ChevronLeft, ChevronRight, Grid, Flag, CheckCircle, XCircle, AlertCircle, BarChart2, BookOpen, RotateCcw } from 'lucide-react';
import { MOCK_QUESTIONS } from '../data/questions';
import { QuizResult } from '../types';

const INITIAL_TIME = 2 * 60 * 60 + 20 * 60; // 2 hours 20 minutes in seconds

const QuizPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isFinished, setIsFinished] = useState(false);
  const [showSolucionario, setShowSolucionario] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // Mobile sidebar toggle

  const currentQuestion = MOCK_QUESTIONS[currentQuestionIndex];
  const totalQuestions = MOCK_QUESTIONS.length;

  // Timer Logic
  useEffect(() => {
    if (isFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isFinished]);

  // Format Time (HH:MM:SS)
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optionId: string) => {
    if (isFinished && !showSolucionario) return; // Prevent changing answers if finished (unless explicitly retrying, which creates new state)
    if (showSolucionario) return; // Read only mode

    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const calculateScore = (): QuizResult => {
    let correct = 0;
    MOCK_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.correctOptionId) {
        correct++;
      }
    });

    // Simple PAES simulation formula (100 to 1000)
    // Base 100 points, max 1000. 
    const score = Math.round(100 + (correct / totalQuestions) * 900);

    return {
      date: new Date().toISOString(),
      score,
      correctCount: correct,
      totalQuestions,
      timeSpent: formatTime(INITIAL_TIME - timeLeft),
      answers
    };
  };

  const finishQuiz = () => {
    if (window.confirm("¿Estás seguro que deseas finalizar el ensayo? No podrás cambiar tus respuestas.")) {
      setIsFinished(true);
      const result = calculateScore();
      
      // Save to localStorage history
      const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
      localStorage.setItem('quizHistory', JSON.stringify([result, ...history]));
    }
  };

  // --- RENDER: RESULTS SCREEN ---
  if (isFinished && !showSolucionario) {
    const result = calculateScore();
    return (
      <div className="min-h-screen bg-bg-light p-4 md:p-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-black text-dark">Resultados del Ensayo</h1>
            <p className="text-sub">Matemática M1 - Competencia Matemática</p>
          </div>

          <div className="mb-10 flex flex-col items-center justify-center gap-6 md:flex-row">
            {/* Score Circle */}
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-[12px] border-primary/20 bg-white">
              <div className="flex flex-col items-center">
                <span className="text-5xl font-black text-primary">{result.score}</span>
                <span className="text-sm font-bold text-sub">Puntos PAES</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-green-50 p-4">
                <div className="flex items-center gap-2 text-green-700">
                  <CheckCircle size={20} />
                  <span className="font-bold">Correctas</span>
                </div>
                <p className="text-2xl font-bold text-dark">{result.correctCount}</p>
              </div>
              <div className="rounded-xl bg-red-50 p-4">
                <div className="flex items-center gap-2 text-red-700">
                  <XCircle size={20} />
                  <span className="font-bold">Incorrectas</span>
                </div>
                <p className="text-2xl font-bold text-dark">{totalQuestions - result.correctCount}</p>
              </div>
              <div className="col-span-2 rounded-xl bg-gray-50 p-4">
                 <div className="flex items-center gap-2 text-sub">
                  <Clock size={20} />
                  <span className="font-bold">Tiempo Empleado</span>
                </div>
                <p className="text-xl font-bold text-dark">{result.timeSpent}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button 
              onClick={() => setShowSolucionario(true)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-primary-dark"
            >
              <BookOpen size={24} />
              Ver Solucionario
            </button>
            <Link 
              to="/dashboard"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-100 px-6 py-4 text-lg font-bold text-dark transition-colors hover:bg-gray-200"
            >
              <RotateCcw size={24} />
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER: QUIZ / SOLUCIONARIO SCREEN ---
  return (
    <div className="flex min-h-screen flex-col bg-bg-light">
      
      {/* Top Bar */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm md:px-8">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-sub hover:text-dark"><ChevronLeft /></Link>
          <div>
            <h2 className="text-sm font-bold text-dark md:text-base">Ensayo Matemática M1</h2>
            <div className="text-xs text-sub">Pregunta {currentQuestionIndex + 1} de {totalQuestions}</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Timer Display */}
          <div className={`flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono font-bold ${timeLeft < 300 ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-dark'}`}>
            <Clock size={18} />
            <span>{formatTime(timeLeft)}</span>
          </div>
          
          <button 
            onClick={() => setShowSidebar(!showSidebar)}
            className="rounded-lg bg-gray-100 p-2 text-dark hover:bg-gray-200 lg:hidden"
          >
            <Grid size={20} />
          </button>

          {!showSolucionario && !isFinished && (
             <button 
              onClick={finishQuiz}
              className="hidden rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 md:block"
            >
              Finalizar Ensayo
            </button>
          )}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Question Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="mx-auto max-w-4xl">
            
            {/* Solucionario Banner */}
            {showSolucionario && (
              <div className={`mb-6 rounded-xl border p-4 ${
                answers[currentQuestion.id] === currentQuestion.correctOptionId 
                  ? 'border-green-200 bg-green-50 text-green-800' 
                  : 'border-red-200 bg-red-50 text-red-800'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  {answers[currentQuestion.id] === currentQuestion.correctOptionId 
                    ? <><CheckCircle size={20} /> Respuesta Correcta</>
                    : <><XCircle size={20} /> Respuesta Incorrecta</>
                  }
                </div>
                <p className="mt-1 text-sm">
                  Tú elegiste: <strong>{answers[currentQuestion.id] || 'Omitida'}</strong>. 
                  La correcta es: <strong>{currentQuestion.correctOptionId}</strong>.
                </p>
              </div>
            )}

            {/* Question Card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
              <div className="mb-6 flex items-start justify-between">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-primary">
                  {currentQuestion.subject}
                </span>
                <button className="text-gray-300 hover:text-yellow-400">
                  <Flag size={20} />
                </button>
              </div>
              
              <h3 className="mb-8 text-xl font-medium leading-relaxed text-dark md:text-2xl">
                {currentQuestion.text}
              </h3>

              <div className="flex flex-col gap-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.id;
                  const isCorrect = showSolucionario && currentQuestion.correctOptionId === option.id;
                  const isWrong = showSolucionario && isSelected && !isCorrect;

                  let styleClass = "border-gray-200 hover:border-primary/50 hover:bg-blue-50"; // default
                  
                  if (showSolucionario) {
                    if (isCorrect) styleClass = "border-green-500 bg-green-50 text-green-900";
                    else if (isWrong) styleClass = "border-red-500 bg-red-50 text-red-900";
                    else styleClass = "border-gray-200 opacity-60";
                  } else if (isSelected) {
                    styleClass = "border-primary bg-primary/10 text-primary ring-1 ring-primary";
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      disabled={showSolucionario}
                      className={`group flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${styleClass}`}
                    >
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-bold transition-colors ${
                        isSelected || isCorrect ? 'border-transparent bg-white shadow-sm' : 'border-gray-300 bg-gray-50 text-gray-500 group-hover:border-primary group-hover:text-primary'
                      }`}>
                        {option.id}
                      </div>
                      <span className="text-base md:text-lg">{option.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box */}
              {showSolucionario && (
                <div className="mt-8 rounded-xl bg-gray-50 p-6">
                  <h4 className="mb-2 flex items-center gap-2 font-bold text-dark">
                    <AlertCircle size={18} className="text-primary" />
                    Explicación
                  </h4>
                  <p className="text-sub">{currentQuestion.explanation}</p>
                </div>
              )}
            </div>

            {/* Bottom Nav */}
            <div className="mt-8 flex items-center justify-between">
              <button 
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-2 rounded-lg px-4 py-2 font-bold text-sub hover:bg-white hover:text-dark disabled:opacity-50"
              >
                <ChevronLeft size={20} /> Anterior
              </button>
              
              <button 
                onClick={() => setCurrentQuestionIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
                disabled={currentQuestionIndex === totalQuestions - 1}
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2 font-bold text-white hover:bg-primary-dark disabled:bg-gray-300"
              >
                Siguiente <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </main>

        {/* Sidebar Navigation */}
        <aside className={`fixed right-0 top-16 z-20 h-[calc(100vh-64px)] w-80 transform border-l border-gray-200 bg-white transition-transform lg:relative lg:translate-x-0 ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex h-full flex-col">
            <div className="border-b border-gray-100 p-4">
              <h3 className="font-bold text-dark">Navegación</h3>
              <div className="mt-2 flex gap-4 text-xs text-sub">
                <div className="flex items-center gap-1"><div className="h-3 w-3 rounded-full bg-primary/20 border border-primary"></div> Respondida</div>
                <div className="flex items-center gap-1"><div className="h-3 w-3 rounded-full bg-white border border-gray-300"></div> Sin responder</div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid grid-cols-5 gap-2">
                {MOCK_QUESTIONS.map((q, idx) => {
                  const isAnswered = !!answers[q.id];
                  const isCurrent = currentQuestionIndex === idx;
                  let statusClass = "bg-white border-gray-200 text-sub hover:border-gray-300";

                  if (showSolucionario) {
                     const isCorrect = answers[q.id] === q.correctOptionId;
                     statusClass = isCorrect ? "bg-green-100 border-green-500 text-green-700" : "bg-red-100 border-red-500 text-red-700";
                  } else if (isAnswered) {
                    statusClass = "bg-primary/10 border-primary text-primary font-bold";
                  }
                  
                  if (isCurrent) {
                    statusClass += " ring-2 ring-primary ring-offset-1";
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setCurrentQuestionIndex(idx);
                        setShowSidebar(false); // Close mobile sidebar on select
                      }}
                      className={`flex h-10 w-full items-center justify-center rounded-lg border text-sm transition-all ${statusClass}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {!showSolucionario && !isFinished && (
              <div className="bg-gray-50 p-4 lg:hidden">
                 <button 
                  onClick={finishQuiz}
                  className="w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-bold text-white shadow-md hover:bg-red-700"
                >
                  Finalizar Ensayo
                </button>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default QuizPage;