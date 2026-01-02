import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Cylinder, TorusKnot, Line } from '@react-three/drei';
import * as THREE from 'three';
import '../../types';

// 1. Pendulum Visualization
export const PendulumVis = () => {
  const groupRef = useRef<THREE.Group>(null);
  const lineRef = useRef<THREE.Line>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      // Simple Harmonic Motion approximation
      const angle = Math.sin(t * 2) * 0.5; 
      groupRef.current.rotation.z = angle;
    }
  });

  return (
    <group position={[0, 1.5, 0]}>
      {/* Pivot point */}
      <Box args={[1, 0.2, 0.2]} position={[0, 0, 0]}>
         <meshStandardMaterial color="#fbbf24" />
      </Box>
      
      {/* Swinging Arm */}
      <group ref={groupRef}>
        {/* String */}
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 3]} />
          <meshStandardMaterial color="white" />
        </mesh>
        {/* Bob */}
        <Sphere args={[0.4, 32, 32]} position={[0, -3, 0]}>
          <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.2} />
        </Sphere>
      </group>
    </group>
  );
};

// 2. Elasticity/Spring Visualization
export const ElasticityVis = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      // Stretch and squash
      const scaleY = 1 + Math.sin(t * 3) * 0.3;
      meshRef.current.scale.y = scaleY;
      meshRef.current.position.y = (scaleY * 2) / 2 - 2; // Keep bottom fixed-ish
    }
  });

  return (
    <group position={[0, 0, 0]}>
       {/* Top fixed plate */}
       <Box args={[2, 0.2, 2]} position={[0, 2, 0]}>
         <meshStandardMaterial color="#555" />
       </Box>
       
       {/* The "Spring" (represented abstractly by a segmented cylinder for simplicity) */}
       <mesh ref={meshRef} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 2, 16, 8, true]} />
          <meshStandardMaterial color="#fbbf24" wireframe />
       </mesh>

        {/* Load/Weight */}
       <Box args={[1, 1, 1]} position={[0, -2.5, 0]}>
         <meshStandardMaterial color="white" />
       </Box>
    </group>
  );
};

// 3. Atom/Orbit Visualization (General Physics)
export const AtomVis = () => {
  const electron1 = useRef<THREE.Mesh>(null);
  const electron2 = useRef<THREE.Mesh>(null);
  const electron3 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if(electron1.current) {
        electron1.current.position.x = Math.sin(t) * 2;
        electron1.current.position.z = Math.cos(t) * 2;
    }
    if(electron2.current) {
        electron2.current.position.y = Math.sin(t * 1.5) * 2;
        electron2.current.position.z = Math.cos(t * 1.5) * 2;
    }
    if(electron3.current) {
        electron3.current.position.x = Math.cos(t * 1.2) * 2;
        electron3.current.position.y = Math.sin(t * 1.2) * 2;
    }
  });

  return (
    <group>
      {/* Nucleus */}
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.5} />
      </Sphere>
      
      {/* Electrons */}
      <Sphere ref={electron1} args={[0.2]}>
        <meshStandardMaterial color="white" />
      </Sphere>
      <Sphere ref={electron2} args={[0.2]}>
        <meshStandardMaterial color="white" />
      </Sphere>
      <Sphere ref={electron3} args={[0.2]}>
        <meshStandardMaterial color="white" />
      </Sphere>
      
      {/* Orbital paths (visual cues) */}
      <TorusKnot args={[1.8, 0.02, 128, 8]} rotation={[Math.PI/2, 0, 0]}>
        <meshBasicMaterial color="#333" transparent opacity={0.3} />
      </TorusKnot>
    </group>
  );
};

// 4. Wave Visualization
export const WaveVis = () => {
    const pointsRef = useRef<THREE.Points>(null);
    
    // Create grid of points
    const count = 1000;
    const positions = new Float32Array(count * 3);
    for(let i=0; i<count; i++) {
        positions[i*3] = (i / count) * 10 - 5; // x spread
        positions[i*3+1] = 0; // y
        positions[i*3+2] = 0; // z
    }

    useFrame(({ clock }) => {
        if(pointsRef.current) {
            const t = clock.getElapsedTime();
            const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
            
            for(let i=0; i<count; i++) {
                const x = positions[i*3];
                // Wave equation
                positions[i*3+1] = Math.sin(x * 2 + t * 5); 
            }
            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute 
                    attach="attributes-position" 
                    count={count} 
                    array={positions} 
                    itemSize={3} 
                />
            </bufferGeometry>
            <pointsMaterial size={0.1} color="#fbbf24" />
        </points>
    )
}