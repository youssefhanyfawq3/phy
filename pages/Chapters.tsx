import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CHAPTERS } from '../constants';
import { ArrowRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

const Chapters: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-10 border-l-4 border-yellow-400 pl-4"
        >
          Course Content
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6"
        >
          {CHAPTERS.map((chapter) => (
            <motion.div key={chapter.id} variants={item}>
              <Link to={`/chapters/${chapter.id}`} className="group block">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] hover:bg-zinc-900/80">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 mb-2">
                        {chapter.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-white transition-colors">
                        {chapter.description}
                      </p>
                    </div>
                    <ArrowRight className="text-zinc-600 group-hover:text-yellow-400 transition-colors transform group-hover:translate-x-2" size={24} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Chapters;