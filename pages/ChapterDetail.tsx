import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CHAPTERS } from '../constants';
import HeroScene from '../components/3d/HeroScene';
import { ExperimentContainer } from '../components/3d/Experiments';
import { ArrowLeft } from 'lucide-react';

const ChapterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const chapter = CHAPTERS.find((c) => c.id === id);

  if (!chapter) {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
            <h1 className="text-2xl">Chapter not found</h1>
        </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black">
      {/* 3D Background - Specific to chapter */}
      <div className="fixed top-0 left-0 w-full h-[40vh] z-0 opacity-60">
         <HeroScene mode={chapter.visualization || 'atom'} />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      <div className="relative z-10 pt-[30vh] px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
            <Link to="/chapters" className="inline-flex items-center text-yellow-400 hover:text-white mb-6 transition-colors bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-800">
                <ArrowLeft size={16} className="mr-2" /> Back to Chapters
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-black/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">{chapter.title}</h1>
                <p className="text-xl text-yellow-400 mb-12 font-mono border-l-2 border-yellow-500 pl-4">{chapter.description}</p>

                <div className="space-y-16">
                    {chapter.content.map((section, idx) => (
                        <div key={idx} className="border-b border-zinc-800 pb-12 last:border-0 last:pb-0">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                {section.heading}
                            </h2>
                            {section.body && <p className="text-gray-300 leading-relaxed text-lg mb-8">{section.body}</p>}
                            
                            {section.formulas && (
                                <div className="bg-zinc-900/50 border border-yellow-500/20 p-6 rounded-xl mb-8 relative overflow-hidden group hover:border-yellow-500/40 transition-colors">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <div className="text-6xl font-bold text-yellow-500">∑</div>
                                    </div>
                                    <h4 className="text-yellow-500 text-sm font-bold uppercase tracking-wider mb-4">Key Formulas</h4>
                                    <ul className="space-y-4">
                                        {section.formulas.map((f, i) => (
                                            <li key={i} className="font-mono text-lg md:text-xl text-white bg-black/30 p-3 rounded border border-zinc-800">{f}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {section.listItems && (
                                <ul className="grid gap-3 text-gray-300">
                                    {section.listItems.map((item, i) => {
                                        const [label, val] = item.split(':');
                                        return (
                                            <li key={i} className="flex items-start bg-zinc-900/30 p-3 rounded-lg border border-zinc-800/50">
                                                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                                                <span>
                                                    <span className="text-white font-medium">{label}</span>
                                                    {val && <span className="text-gray-400">:{val}</span>}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Experiment Section Integration */}
                {chapter.experimentType && (
                    <ExperimentContainer type={chapter.experimentType} />
                )}

            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetail;