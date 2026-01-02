import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_QUESTIONS } from '../constants';
import { GameState } from '../types';
import { CheckCircle, XCircle, RefreshCw, Trophy } from 'lucide-react';
import HeroScene from '../components/3d/HeroScene';

const Quiz: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleStart = () => {
    setGameState(GameState.PLAYING);
    setCurrentQuestionIndex(0);
    setScore(0);
    resetQuestionState();
  };

  const resetQuestionState = () => {
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      resetQuestionState();
    } else {
      setGameState(GameState.FINISHED);
    }
  };

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-30">
            <HeroScene mode="atom" />
        </div>

      <div className="max-w-3xl w-full relative z-10 pt-20 pb-10">
        <AnimatePresence mode="wait">
          
          {/* START SCREEN */}
          {gameState === GameState.START && (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="bg-zinc-900/90 backdrop-blur-md border border-yellow-500/30 p-10 rounded-2xl text-center shadow-2xl"
            >
              <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
              <h1 className="text-5xl font-bold text-white mb-4">Physics Mastery Quiz</h1>
              <p className="text-xl text-gray-400 mb-8">
                Test your knowledge on Units, Errors, Mechanics, and Thermal Physics. 
                <br/> {QUIZ_QUESTIONS.length} Questions based on previous exams.
              </p>
              <button
                onClick={handleStart}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xl px-10 py-4 rounded-full transition-transform transform hover:scale-105"
              >
                Start Quiz
              </button>
            </motion.div>
          )}

          {/* PLAYING SCREEN */}
          {gameState === GameState.PLAYING && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-zinc-900/95 backdrop-blur-md border border-zinc-700 p-8 rounded-2xl shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-yellow-400 font-mono">Question {currentQuestionIndex + 1}/{QUIZ_QUESTIONS.length}</span>
                <span className="text-white font-mono">Score: {score}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-zinc-800 h-2 rounded-full mb-8 overflow-hidden">
                <motion.div 
                    className="bg-yellow-400 h-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestionIndex) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                {currentQuestion.question}
              </h2>

              <div className="space-y-4">
                {currentQuestion.options.map((option, idx) => {
                  let buttonStyle = "border-zinc-700 hover:bg-zinc-800 text-gray-300";
                  if (isAnswered) {
                    if (idx === currentQuestion.correctAnswer) {
                      buttonStyle = "bg-green-500/20 border-green-500 text-green-400";
                    } else if (idx === selectedOption) {
                      buttonStyle = "bg-red-500/20 border-red-500 text-red-400";
                    } else {
                        buttonStyle = "border-zinc-800 text-gray-600 opacity-50";
                    }
                  } else if (selectedOption === idx) {
                      buttonStyle = "border-yellow-400 text-yellow-400";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-lg font-medium flex justify-between items-center ${buttonStyle}`}
                    >
                      <span>{option}</span>
                      {isAnswered && idx === currentQuestion.correctAnswer && <CheckCircle size={20} />}
                      {isAnswered && idx === selectedOption && idx !== currentQuestion.correctAnswer && <XCircle size={20} />}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-zinc-800/50 rounded-lg border-l-4 border-yellow-500"
                >
                    {currentQuestion.explanation && (
                        <p className="text-gray-300 mb-4">{currentQuestion.explanation}</p>
                    )}
                    <button
                        onClick={handleNext}
                        className="bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'See Results'}
                    </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* FINISHED SCREEN */}
          {gameState === GameState.FINISHED && (
            <motion.div
              key="finished"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900/90 backdrop-blur-md border border-yellow-500/30 p-10 rounded-2xl text-center shadow-2xl"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Quiz Completed!</h2>
              
              <div className="text-8xl font-bold text-yellow-400 mb-4">
                {Math.round((score / QUIZ_QUESTIONS.length) * 100)}%
              </div>
              
              <p className="text-xl text-gray-400 mb-8">
                You answered {score} out of {QUIZ_QUESTIONS.length} correctly.
                {score > 7 ? " Excellent work!" : " Keep studying the chapters!"}
              </p>

              <button
                onClick={handleStart}
                className="flex items-center justify-center gap-2 mx-auto bg-white text-black font-bold text-xl px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                <RefreshCw size={20} />
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;