'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useThree as useThreeContext, useShouldRender3D } from '@/components/providers/ThreeProvider';

// Particle colors matching the design system
const COLORS = {
  green: new THREE.Color('#00FF94'),
  purple: new THREE.Color('#7C3AED'),
  blue: new THREE.Color('#3B82F6'),
};

interface ParticleFieldProps {
  count?: number;
  size?: number;
  spread?: number;
  speed?: number;
  mouseInfluence?: number;
}

function Particles({
  count = 5000,
  size = 0.015,
  spread = 15,
  speed = 0.2,
  mouseInfluence = 2,
}: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const { normalizedMouse, isTabVisible } = useThreeContext();
  const { viewport } = useThree();

  // Generate initial particle positions and attributes
  const { positions, colors, velocities, originalPositions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);

    const colorOptions = [COLORS.green, COLORS.purple, COLORS.blue];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Random position in 3D space
      const x = (Math.random() - 0.5) * spread;
      const y = (Math.random() - 0.5) * spread;
      const z = (Math.random() - 0.5) * spread * 0.5; // Less depth

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      // Random velocity for floating motion
      velocities[i3] = (Math.random() - 0.5) * speed * 0.1;
      velocities[i3 + 1] = (Math.random() - 0.5) * speed * 0.1;
      velocities[i3 + 2] = (Math.random() - 0.5) * speed * 0.05;

      // Random color from palette (weighted towards green)
      const colorIndex = Math.random() < 0.5 ? 0 : Math.random() < 0.7 ? 1 : 2;
      const color = colorOptions[colorIndex];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return { positions, colors, velocities, originalPositions };
  }, [count, spread, speed]);

  // Animation frame
  useFrame((state, delta) => {
    if (!pointsRef.current || !isTabVisible) return;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;

    // Mouse position in world space
    const mouseX = normalizedMouse.x * viewport.width * 0.5;
    const mouseY = normalizedMouse.y * viewport.height * 0.5;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Get current position
      let x = positions[i3];
      let y = positions[i3 + 1];
      let z = positions[i3 + 2];

      // Add floating motion
      x += velocities[i3] * delta;
      y += velocities[i3 + 1] * delta;
      z += velocities[i3 + 2] * delta;

      // Add wave motion
      x += Math.sin(time * 0.5 + originalPositions[i3] * 0.5) * 0.001;
      y += Math.cos(time * 0.3 + originalPositions[i3 + 1] * 0.5) * 0.001;

      // Mouse repulsion effect
      const dx = x - mouseX;
      const dy = y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = mouseInfluence;

      if (dist < maxDist && dist > 0) {
        const force = (1 - dist / maxDist) * 0.02;
        x += (dx / dist) * force;
        y += (dy / dist) * force;
      }

      // Gentle return to original position
      x += (originalPositions[i3] - x) * 0.001;
      y += (originalPositions[i3 + 1] - y) * 0.001;
      z += (originalPositions[i3 + 2] - z) * 0.001;

      // Boundary wrap
      const halfSpread = spread * 0.5;
      if (x > halfSpread) x = -halfSpread;
      if (x < -halfSpread) x = halfSpread;
      if (y > halfSpread) y = -halfSpread;
      if (y < -halfSpread) y = halfSpread;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={size}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
      <bufferAttribute
        attach="geometry-attributes-color"
        args={[colors, 3]}
      />
    </Points>
  );
}

// Camera that responds to scroll
function ScrollCamera() {
  const { camera } = useThree();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

      // Subtle camera movement based on scroll
      camera.position.z = 8 + scrollProgress * 2;
      camera.position.y = scrollProgress * -1;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [camera]);

  return null;
}

export function ParticleField3D() {
  const shouldRender = useShouldRender3D();
  const { support } = useThreeContext();

  if (!shouldRender) return null;

  // Adjust particle count based on device capability
  const particleCount = support.particleCount;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={support.quality === 'high' ? [1, 2] : [1, 1.5]}
        gl={{
          antialias: support.quality === 'high',
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <ScrollCamera />
        <Particles count={particleCount} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}

export default ParticleField3D;
