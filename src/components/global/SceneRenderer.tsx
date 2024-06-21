import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface RandomMeshProps {
  t: React.MutableRefObject<number>;
  color: string;
}

const RandomMesh = ({ t, color }: RandomMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const randomVector = (r: number): [number, number, number] => [
    (Math.random() - 0.5) * r,
    (Math.random() - 0.5) * r,
    (Math.random() - 0.5) * r,
  ];

  const randomEuler = (): [number, number, number] => [
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI,
  ];

  const initialPosition = useMemo(() => randomVector(13), []);
  const initialRotation = useMemo(() => randomEuler(), []);
  const speed = useMemo(() => Math.random(), []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = initialRotation[0] + Math.cos((t.current * speed) / 0.45) / 2;
      meshRef.current.rotation.y = initialRotation[1] + Math.sin(t.current * speed) / 1;
      meshRef.current.rotation.z = initialRotation[2] + Math.cos((t.current * speed) / 0.75) / 2;
    }
  });

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <boxGeometry args={[3, 3, 3]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};


interface SceneProps {
  nameTrigger: string;
}

const Scene = ({ nameTrigger }: SceneProps) => {
  const time = useRef(0);

  useFrame(({ clock }) => {
    time.current = clock.getElapsedTime();
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[13, -9, 35]} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={3} position={[0, 0, 100]} />

      {Array.from({ length: 10 }, (_, i) => (
        <RandomMesh key={i} t={time} color={nameTrigger == "cleo" ? "#6b21a8" : nameTrigger == "vision" ? "#cb00a3" : nameTrigger == "custom" ? "#00ff8b" : "#404040" } />
      ))}
    </>
  );
};

interface Props {
  nameTrigger: string;
}

const SceneRenderer = ({ nameTrigger }: Props) => (
  <Canvas className="h-full w-full">
    <Scene nameTrigger={nameTrigger} />
  </Canvas>
);

export default SceneRenderer;