import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroScene from '../components/3d/HeroScene';
import { ArrowRight, BookOpen, PenTool } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene mode="default" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            <span className="text-white">PHYSICS</span>
            <span className="text-yellow-400">MASTER</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Master Mechanical Physics, Elasticity, and Thermodynamics through 
            interactive 3D visualizations and simplified learning materials.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chapters">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-full shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:bg-yellow-300 transition-colors"
              >
                <BookOpen size={20} />
                Start Learning
              </motion.button>
            </Link>
            
            <Link to="/quiz">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors"
              >
                <PenTool size={20} />
                Take Quiz
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
            <div className="p-6 bg-black/50 border border-yellow-500/30 rounded-xl backdrop-blur-sm">
                <h3 className="text-yellow-400 text-xl font-bold mb-2">Interactive 3D</h3>
                <p className="text-gray-400">Visualize complex concepts like Pendulums and Waves in real-time.</p>
            </div>
            <div className="p-6 bg-black/50 border border-yellow-500/30 rounded-xl backdrop-blur-sm">
                <h3 className="text-yellow-400 text-xl font-bold mb-2">Simplified Notes</h3>
                <p className="text-gray-400">Content condensed from the source material for easy memorization.</p>
            </div>
            <div className="p-6 bg-black/50 border border-yellow-500/30 rounded-xl backdrop-blur-sm">
                <h3 className="text-yellow-400 text-xl font-bold mb-2">Exam Preparation</h3>
                <p className="text-gray-400">Practice with questions derived directly from previous exams.</p>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;