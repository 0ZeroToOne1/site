'use client';

import RevealText from '../motion/RevealText';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

function SquareOutline() {
  const ref = useRef<THREE.Points>(null);
  const segments = 100;
  const spacing = 1 / segments;
  const positions: number[] = [];

  for (let i = 0; i <= segments; i++) positions.push(-0.5 + i * spacing, 0.5, 0);
  for (let i = 0; i <= segments; i++) positions.push(0.5, 0.5 - i * spacing, 0);
  for (let i = 0; i <= segments; i++) positions.push(0.5 - i * spacing, -0.5, 0);
  for (let i = 0; i <= segments; i++) positions.push(-0.5, -0.5 + i * spacing, 0);

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={new Float32Array(positions)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#2B72FF" size={0.01} sizeAttenuation />
    </points>
  );
}

function FloatingPixel({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const p = scrollYProgress.get();
    const angle = p * Math.PI * 2;
    const r = 0.3 + 0.1 * Math.sin(p * Math.PI);
    const x = 0.5 + r * Math.cos(angle);
    const y = 0.5 + r * Math.sin(angle);
    if (ref.current) ref.current.position.set(x, y, 0);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.01, 12, 12]} />
      <meshBasicMaterial color="#00D4FF" />
    </mesh>
  );
}

export default function ParticlesBackground({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="absolute inset-0 z-[1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight />
        <SquareOutline />
        <FloatingPixel scrollYProgress={scrollYProgress} />
      </Canvas>
    </MotionCard>
  );
}
