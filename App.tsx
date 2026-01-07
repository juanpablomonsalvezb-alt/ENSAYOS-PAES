import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import PlansPage from './pages/PlansPage';
import QuizPage from './pages/QuizPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        {/* We hide Navbar on QuizPage for better immersion, but keeping it simple for now I'll render it everywhere except Quiz */}
        <RoutesWithLayout />
      </div>
    </HashRouter>
  );
};

// Helper component to conditionally render layout
const RoutesWithLayout = () => {
  const location = useLocation();
  const isQuiz = location.pathname.includes('/ensayo/');

  return (
    <>
      {!isQuiz && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/planes" element={<PlansPage />} />
          <Route path="/ensayo/:id" element={<QuizPage />} />
        </Routes>
      </main>
      {!isQuiz && <Footer />}
    </>
  );
};

export default App;