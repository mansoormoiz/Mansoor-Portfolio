import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

const faces = [
  { label: "Frontend & Backend Developer", color: "#0F172A" },
  { label: "Web Designer", color: "#FFFFFF" },
  { label: "AI Trainer", color: "#0F172A" },
  { label: "Graphic Designer", color: "#FFFFFF" },
  { label: "Python Specialist", color: "#0F172A" },
  { label: "Let's Build Together", color: "#FFFFFF" },
];

function CubeFace({ position, rotation, label, color, hovered }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[3.5, 3.5]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.95}
        emissive={hovered ? "#38bdf8" : color}
        emissiveIntensity={hovered ? 0.3 : 0}
      />
      <Html center style={{ pointerEvents: "none" }}>
        <div
          style={{
            color: color === "#FFFFFF" ? "#0F172A" : "#FFFFFF",
            fontWeight: 800,
            fontSize: "1.2rem",
            textAlign: "center",
            textShadow: color === "#FFFFFF" ? "0 2px 8px #0F172A44" : "0 2px 8px #0008",
            letterSpacing: 1,
            padding: 8,
            userSelect: "none",
            borderRadius: 8,
            background: color === "#FFFFFF" ? "rgba(255,255,255,0.7)" : "rgba(15,23,42,0.7)",
            boxShadow: hovered ? "0 0 24px #38bdf8" : undefined,
            transition: "box-shadow 0.2s",
          }}
        >
          {label}
        </div>
      </Html>
    </mesh>
  );
}

function RotatingCube() {
  const mesh = useRef();
  const [hoveredFace, setHoveredFace] = useState(null);

  useFrame(() => {
    if (!hoveredFace) {
      mesh.current.rotation.y += 0.01;
      mesh.current.rotation.x += 0.004;
    }
  });

  // Cube face positions and rotations
  const cubeFaces = [
    // Front
    { position: [0, 0, 2], rotation: [0, 0, 0] },
    // Right
    { position: [2, 0, 0], rotation: [0, Math.PI / 2, 0] },
    // Back
    { position: [0, 0, -2], rotation: [0, Math.PI, 0] },
    // Left
    { position: [-2, 0, 0], rotation: [0, -Math.PI / 2, 0] },
    // Top
    { position: [0, 2, 0], rotation: [-Math.PI / 2, 0, 0] },
    // Bottom
    { position: [0, -2, 0], rotation: [Math.PI / 2, 0, 0] },
  ];

  return (
    <group ref={mesh}>
      {faces.map((face, i) => (
        <CubeFace
          key={i}
          {...cubeFaces[i]}
          label={face.label}
          color={face.color}
          hovered={hoveredFace === i}
        />
      ))}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
    </group>
  );
}

export default function Cube3D() {
  // Mobile fallback: show a simple slider of faces
  const [isMobile, setIsMobile] = useState(false);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [faceIdx, setFaceIdx] = useState(0);

  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-64 h-64 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-md shadow-inner mb-4">
          <span className="text-slate-200 text-lg font-bold text-center px-4">
            {faces[faceIdx].label}
          </span>
        </div>
        <div className="flex gap-2">
          {faces.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === faceIdx ? "bg-white" : "bg-slate-500"}`}
              onClick={() => setFaceIdx(i)}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} style={{ width: 380, height: 380 }}>
      <OrbitControls enablePan={false} enableZoom={false} />
      <RotatingCube />
    </Canvas>
  );
} 