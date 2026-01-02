import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { PendulumVis, ElasticityVis, AtomVis, WaveVis } from './Visualizations';
import '../../types';

interface SceneProps {
  mode: 'default' | 'pendulum' | 'elasticity' | 'atom' | 'waves';
}

const SceneContent: React.FC<SceneProps> = ({ mode }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#fbbf24" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="white" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <group>
        {mode === 'default' && (
            <group rotation={[0.5, 0.5, 0]}>
               <AtomVis />
            </group>
        )}
        {mode === 'atom' && <AtomVis />}
        {mode === 'pendulum' && <PendulumVis />}
        {mode === 'elasticity' && <ElasticityVis />}
        {mode === 'waves' && <WaveVis />}
      </group>
    </>
  );
};

const HeroScene: React.FC<SceneProps> = ({ mode }) => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <SceneContent mode={mode} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={mode === 'default'} autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black pointer-events-none" />
    </div>
  );
};

export default HeroScene;