import React, { useState, useEffect, useRef } from "react";

const skills = [
  {
    title: "Web Developer",
    desc: "Building modern, scalable web applications.",
    more: "Expert in React, Node.js, REST APIs, and responsive design."
  },
  {
    title: "Web Designer",
    desc: "Crafting beautiful, user-friendly interfaces.",
    more: "Skilled in Figma, Adobe XD, and creating seamless UX/UI."
  },
  {
    title: "AI Trainer",
    desc: "Training and integrating AI for smart solutions.",
    more: "Experience with machine learning, NLP, and automation workflows."
  },
  {
    title: "Graphic Designer",
    desc: "Designing stunning graphics and brand assets.",
    more: "Proficient in Photoshop, Illustrator, and brand identity creation."
  },
  {
    title: "Python",
    desc: "Automating and analyzing with Python expertise.",
    more: "Data analysis, scripting, and backend development with Python."
  },
];

export default function MacbookMockup() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % skills.length);
        setFade(true);
      }, 900);
    }, 2500);
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  // Larger dimensions for the SVG and screen
  const svgWidth = 600;
  const svgHeight = 420;
  const screenX = 50;
  const screenY = 50;
  const screenW = 500;
  const screenH = 280;

  // Responsive card sizing for mobile
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;

  const cardStyle = isDesktop
    ? {
        letterSpacing: 1,
        transition: 'opacity 0.9s cubic-bezier(0.4,0,0.2,1), background 0.3s, border 0.3s, transform 0.3s',
        cursor: 'pointer',
        minWidth: 420,
        maxWidth: 520,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'auto',
      }
    : {
        letterSpacing: 1,
        transition: 'opacity 0.9s cubic-bezier(0.4,0,0.2,1), background 0.3s, border 0.3s, transform 0.3s',
        cursor: 'pointer',
        minWidth: 0,
        maxWidth: '140px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'auto',
        maxHeight: '80px',
        overflow: 'auto',
      };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg md:max-w-2xl mx-auto relative" style={{ minHeight: svgHeight, maxWidth: isDesktop ? undefined : '95vw' }}>
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        width={isDesktop ? svgWidth : '100%'}
        height={isDesktop ? svgHeight : 'auto'}
        className="drop-shadow-2xl"
        style={{ maxWidth: isDesktop ? '100%' : '95vw', height: isDesktop ? svgHeight : 'auto' }}
      >
        <defs>
          <linearGradient id="macBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        {/* Blue shadow */}
        <ellipse cx={svgWidth / 2} cy={svgHeight - 24} rx={180} ry={18} fill="#0f172a" opacity="0.18" />
        {/* Laptop base */}
        <rect x="100" y={svgHeight - 58} width={svgWidth - 200} height="28" rx="12" fill="url(#macBody)" />
        {/* Laptop body */}
        <rect x="20" y="20" width={svgWidth - 40} height={screenH + 60} rx="22" fill="url(#macBody)" stroke="#334155" strokeWidth="4" />
        {/* Screen area */}
        <rect x={screenX} y={screenY} width={screenW} height={screenH} rx="12" fill="#111827" stroke="#334155" strokeWidth="3" />
        {/* Window dots */}
        <circle cx={screenX + 24} cy={screenY + 20} r="7" fill="#38bdf8" />
        <circle cx={screenX + 54} cy={screenY + 20} r="7" fill="#fbbf24" />
        <circle cx={screenX + 84} cy={screenY + 20} r="7" fill="#ef4444" />
      </svg>
      {/* Animated single skill card inside the screen, slightly offset */}
      <div
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        style={{ minHeight: svgHeight }}
      >
        <div
          style={{
            position: "absolute",
            left: screenX,
            top: screenY,
            width: screenW,
            height: screenH,
            pointerEvents: 'none',
            display: isDesktop ? undefined : 'flex',
            alignItems: isDesktop ? undefined : 'center',
            justifyContent: isDesktop ? undefined : 'flex-start',
          }}
        >
          {isDesktop ? (
            <span
              className={`transition-all duration-300 select-none pointer-events-auto ${fade ? "opacity-100" : "opacity-0"} ${paused ? "bg-white/20 border-white/40 scale-105" : "bg-white/10 border-white/20"} backdrop-blur-md border rounded-2xl px-20 text-2xl py-6 text-white shadow-lg text-center font-bold flex flex-col items-center justify-center`}
              style={cardStyle}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {skills[idx].title}
              <span className="block text-base font-normal text-white/80 mt-3" style={{letterSpacing: 0}}>{skills[idx].desc}</span>
              <span className="block text-sm font-normal text-white/60 mt-2" style={{letterSpacing: 0}}>{skills[idx].more}</span>
            </span>
          ) : (
            <span
              className={`transition-all duration-300 select-none pointer-events-auto ${fade ? "opacity-100" : "opacity-0"} ${paused ? "bg-white/20 border-white/40 scale-105" : "bg-white/10 border-white/20"} backdrop-blur-md border rounded-2xl px-1 py-1 text-xs text-white shadow-lg text-center font-bold flex flex-col items-center justify-center mt-7 ml-2`}
              style={{
                width: '210px',
                maxWidth: '210px',
                minWidth: 0,
                maxHeight: '110px',
                overflowY: 'auto',
                pointerEvents: 'auto',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
              }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {skills[idx].title}
              <span className="block text-xs font-normal text-white/80 mt-1" style={{letterSpacing: 0}}>{skills[idx].desc}</span>
              <span className="block text-xs font-normal text-white/60 mt-1" style={{letterSpacing: 0}}>{skills[idx].more}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
} 