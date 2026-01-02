import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Chapters', path: '/chapters' },
    { name: 'Test Yourself', path: '/quiz' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-yellow-400 font-bold text-2xl tracking-tighter">
              PHYSICS<span className="text-white">MASTER</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Mobile Menu Button - Simplification for this output */}
          <div className="md:hidden">
             <Link to="/chapters" className="text-yellow-400 p-2">Menu</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;