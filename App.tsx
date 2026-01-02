import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Chapters from './pages/Chapters';
import ChapterDetail from './pages/ChapterDetail';
import Quiz from './pages/Quiz';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/chapters/:id" element={<ChapterDetail />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="antialiased text-gray-100 bg-black min-h-screen">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;