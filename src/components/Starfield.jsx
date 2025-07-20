import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Stars = () => {
  const group = useRef();

  // Generate random positions once
  const positions = useMemo(() => {
    const starCount = 1000;
    const posArray = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 1200;
    }
    return posArray;
  }, []);

  // Rotate slowly
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="white" size={1.5} sizeAttenuation />
      </points>
    </group>
  );
};

export default function Starfield() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,            
        pointerEvents: 'none' 
      }}
      camera={{ position: [0, 0, 500], fov: 75 }}
    >
      <Stars />
    </Canvas>
  );
}