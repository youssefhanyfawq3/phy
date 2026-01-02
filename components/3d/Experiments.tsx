import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { Sphere, Box, Cylinder, Text, Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { CheckCircle, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';

// Add type support for Three.js elements in JSX
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

// --- Types ---
interface LabProps {
  onSuccess?: () => void;
}

// --- PENDULUM LAB ---

const PendulumScene: React.FC<{ length: number }> = ({ length }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Physics constants
  const g = 9.8;
  const angularFreq = Math.sqrt(g / length);
  const maxAngle = Math.PI / 6; // 30 degrees

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      // Theta(t) = ThetaMax * cos(w*t)
      const angle = maxAngle * Math.cos(angularFreq * t);
      groupRef.current.rotation.z = angle;
    }
  });

  return (
    <group position={[0, 2, 0]}>
      {/* Static Pivot */}
      <Box args={[0.4, 0.1, 0.4]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#555" />
      </Box>

      {/* Swinging Part */}
      <group ref={groupRef}>
        {/* String - Origin is at the top */}
        <mesh position={[0, -length / 2, 0]}>
          <cylinderGeometry args={[0.01, 0.01, length]} />
          <meshStandardMaterial color="white" />
        </mesh>
        
        {/* Bob */}
        <Sphere args={[0.3]} position={[0, -length, 0]}>
          <meshStandardMaterial color="#fbbf24" metalness={0.6} roughness={0.2} />
        </Sphere>
      </group>
      
      {/* Ground reference */}
       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]}>
         <planeGeometry args={[10, 10]} />
         <shadowMaterial opacity={0.3} />
       </mesh>
    </group>
  );
};

export const PendulumLab: React.FC<LabProps> = () => {
  const [length, setLength] = useState(1.0);
  const [success, setSuccess] = useState(false);

  // Target: Period approx 2.0s -> Length approx 1.0m (0.98m to 1.02m)
  const T = 2 * Math.PI * Math.sqrt(length / 9.8);
  const targetPeriod = 2.0;

  useEffect(() => {
    if (Math.abs(T - targetPeriod) < 0.05 && !success) {
      setSuccess(true);
    } else if (Math.abs(T - targetPeriod) >= 0.05 && success) {
        setSuccess(false);
    }
  }, [length, T, success]);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-1/2 h-[400px] bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 relative shadow-inner">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <PendulumScene length={length} />
          <OrbitControls enableZoom={false} />
          <gridHelper position={[0, -1.5, 0]} args={[10, 10, 0x444444, 0x222222]} />
        </Canvas>
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-3 py-1 rounded text-xs text-yellow-400 font-mono">
            LIVE SIMULATION
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <div className="space-y-2">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Experiment Controls
                {success && <CheckCircle className="text-green-500" size={20} />}
            </h3>
            <p className="text-gray-400 text-sm">
                Task: Adjust the pendulum length to achieve a Period (T) of exactly <span className="text-white font-bold">2.00 seconds</span>.
            </p>
        </div>

        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl space-y-6">
            <div>
                <div className="flex justify-between mb-2 text-sm">
                    <span className="text-gray-300">Length (L)</span>
                    <span className="text-yellow-400 font-mono">{length.toFixed(2)} m</span>
                </div>
                <input
                    type="range"
                    min="0.1"
                    max="2.5"
                    step="0.01"
                    value={length}
                    onChange={(e) => setLength(parseFloat(e.target.value))}
                    className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                />
            </div>

            <div className="pt-4 border-t border-zinc-800">
                <div className="flex justify-between items-center">
                     <span className="text-gray-400">Calculated Period (T):</span>
                     <span className={`font-mono text-2xl font-bold ${success ? 'text-green-400' : 'text-white'}`}>
                        {T.toFixed(2)} s
                     </span>
                </div>
                <p className="text-xs text-gray-500 mt-2 font-mono">Formula: T = 2π√(L/g)</p>
            </div>
            
            {success && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/50 p-3 rounded-lg text-green-200 text-sm flex items-center gap-2"
                >
                    <CheckCircle size={16} />
                    Great job! A 1-meter pendulum has a period of ~2 seconds.
                </motion.div>
            )}
        </div>
      </div>
    </div>
  );
};

// --- SPRING LAB ---

const SpringScene: React.FC<{ mass: number }> = ({ mass }) => {
    // k = 50 N/m
    const k = 50;
    const g = 9.8;
    // F = mg = kx => x = mg/k
    const extension = (mass * g) / k;
    
    // Visual scaling. Let's say rest length is 2 units.
    const restLength = 1.5;
    const currentLength = restLength + extension;
    
    return (
        <group position={[0, 2.5, 0]}>
             {/* Ceiling */}
            <Box args={[2, 0.1, 1]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#555" />
            </Box>
            
            {/* Spring */}
            {/* We scale a cylinder to represent the spring */}
            <mesh position={[0, -currentLength / 2, 0]}>
                 {/* Creating a visual coil effect with wireframe */}
                <cylinderGeometry args={[0.3, 0.3, currentLength, 16, 10]} />
                <meshStandardMaterial color="#fbbf24" wireframe />
            </mesh>
            
            {/* Mass Box */}
            <Box args={[0.8, 0.8, 0.8]} position={[0, -currentLength - 0.4, 0]}>
                <meshStandardMaterial color={mass > 3 ? "#ef4444" : "#3b82f6"} />
            </Box>
            <Text 
                position={[0, -currentLength - 0.4, 0.5]} 
                fontSize={0.3} 
                color="white"
            >
                {mass}kg
            </Text>
        </group>
    )
}

export const SpringLab: React.FC = () => {
    const [mass, setMass] = useState(1);
    const k = 50; // N/m
    const g = 9.8;
    const extension = (mass * g) / k;
    const force = mass * g;

    return (
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2 h-[400px] bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 relative shadow-inner">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <SpringScene mass={mass} />
              <OrbitControls enableZoom={false} />
              <gridHelper position={[0, -3, 0]} args={[10, 10, 0x444444, 0x222222]} />
            </Canvas>
          </div>
    
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Hooke's Law Lab</h3>
                <p className="text-gray-400 text-sm">
                    Investigate how Force (Weight) affects extension.
                    <br/> Spring Constant (k) = 50 N/m.
                </p>
            </div>
    
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl space-y-6">
                <div>
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="text-gray-300">Mass (m)</span>
                        <span className="text-blue-400 font-mono">{mass} kg</span>
                    </div>
                    <input
                        type="range"
                        min="0.5"
                        max="5"
                        step="0.5"
                        value={mass}
                        onChange={(e) => setMass(parseFloat(e.target.value))}
                        className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-blue-400"
                    />
                </div>
    
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                    <div>
                         <span className="text-gray-400 text-xs uppercase block mb-1">Force (F = mg)</span>
                         <span className="text-white font-mono text-xl">{force.toFixed(1)} N</span>
                    </div>
                    <div>
                         <span className="text-gray-400 text-xs uppercase block mb-1">Extension (x = F/k)</span>
                         <span className="text-yellow-400 font-mono text-xl">{extension.toFixed(2)} m</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
}

export const ExperimentContainer: React.FC<{ type: 'pendulum_lab' | 'spring_lab' }> = ({ type }) => {
    return (
        <div className="mt-16 pt-10 border-t border-zinc-800">
             <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-yellow-400 pl-4">Interactive Lab</h2>
             {type === 'pendulum_lab' && <PendulumLab />}
             {type === 'spring_lab' && <SpringLab />}
        </div>
    )
}