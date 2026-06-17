"use client";
import React, { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { Canvas, ThreeElements, useThree } from "@react-three/fiber";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";

interface LaserLineProps {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
  luminosity: number;
}

function LaserLine({ start, end, color, luminosity }: LaserLineProps) {
  const { size } = useThree();

  const line = useMemo(() => {
    const geometry = new LineGeometry();
    geometry.setPositions([...start, ...end]);
    const material = new LineMaterial({
      color,
      linewidth: 3,
      resolution: new THREE.Vector2(size.width, size.height),
    });
    return new Line2(geometry, material);
  }, [start, end, color, size.width, size.height]);

  const mid: [number, number, number] = [
    (start[0] + end[0]) / 2,
    (start[1] + end[1]) / 2,
    (start[2] + end[2]) / 2,
  ];

  return (
    <>
      <primitive object={line} />
      <pointLight position={mid} color={color} intensity={luminosity} distance={8} decay={2} />
    </>
  );
}

function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const Laser = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.2} />
      {/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
      <LaserLine start={[0, 5, 0]} end={[-1, 0, -0.5]} color="#ff3300" luminosity={2} />
      <LaserLine start={[2, -5, 0]} end={[-1, 0, -0.5]} color="#ff3300" luminosity={1} />
      <LaserLine start={[-2, 5, 6]} end={[-1, 0, -0.5]} color="#ff3300" luminosity={5} />
      <Box rotation={[45, 45, 0]} position={[-1, 0, -0.5]} />
    </Canvas>
  );
};

export default Laser;
