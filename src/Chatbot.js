import React, { useState, useRef, useEffect } from 'react';

const CHAT_ICON = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#fff"/>
    <path d="M7 7h10M7 11h7" stroke="#38bdf8"/>
  </svg>
);

const SECTIONS = [
  {
    title: 'Services I Offer',
    questions: [
      {
        q: 'What do you do exactly?',
        a: 'I build modern websites, integrate AI tools, automate workflows, and design clean branding — all under one roof.'
      },
      {
        q: 'Can you build e-commerce sites too?',
        a: 'Yup, fully functional online stores with payment, cart, and everything. You’ll be ready to sell from day one.'
      },
      {
        q: 'Do you only build websites?',
        a: 'Nope, I also help businesses automate boring tasks and add smart features using AI.'
      },
      {
        q: 'Can you design logos or brand kits?',
        a: 'Yes, clean and minimalist branding is part of the package if you need it.'
      },
    ]
  },
  {
    title: 'My Work & Process',
    questions: [
      {
        q: 'Can I see some of your work?',
        a: 'For sure — I’ve linked a few projects in the portfolio section. Real results, not just pretty UI.'
      },
      {
        q: 'How do you usually work with clients?',
        a: 'Simple — you tell me the goal, I take care of the tech. I keep things fast, clear, and collaborative.'
      },
      {
        q: 'Do you use templates or custom code?',
        a: 'I mix both. If speed matters, templates help. If uniqueness matters, custom code all the way.'
      },
      {
        q: 'How long does it take to finish a website?',
        a: 'Depends on the scope. A basic site takes 1–2 weeks. Something bigger? We’ll plan it right.'
      },
    ]
  },
  {
    title: 'Tech & Tools',
    questions: [
      {
        q: 'What tech stack do you use?',
        a: 'React, Next.js, Tailwind, Node, Firebase — and GPT for the smart stuff.'
      },
      {
        q: 'Can you connect APIs?',
        a: 'Absolutely. I love plugging systems together to save time and boost productivity.'
      },
      {
        q: 'Is the website mobile-friendly?',
        a: '100%. Everything I build works smoothly on mobile, tablet, and desktop.'
      },
      {
        q: 'Will it be fast and SEO-optimized?',
        a: 'Speed is my default. SEO too — structure, meta tags, performance, the whole deal.'
      },
    ]
  },
  {
    title: 'Work With Me',
    questions: [
      {
        q: 'Why should I hire you?',
        a: 'I don’t just build — I think like a partner. I care about your growth, not just your site.'
      },
      {
        q: 'What’s the cost?',
        a: 'Depends on the project, but I keep it fair. Tell me your budget, and I’ll make it work smart.'
      },
      {
        q: 'How do we get started?',
        a: 'Just say hi in the contact section or drop me a message — I’ll take it from there.'
      },
      {
        q: 'Do you offer ongoing support?',
        a: 'Yup, I’ve got your back even after launch — updates, fixes, and improvements.'
      },
    ]
  },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState('sections'); // 'sections' | 'questions'
  const [selectedSection, setSelectedSection] = useState(null); // section index
  const [selectedQuestion, setSelectedQuestion] = useState(null); // question index
  const modalRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
        setStep('sections');
        setSelectedSection(null);
        setSelectedQuestion(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Prevent scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Reset question when section changes
  useEffect(() => {
    setSelectedQuestion(null);
  }, [selectedSection]);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-7 right-7 z-[200] bg-gradient-to-br from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-[#0F172A] rounded-full w-14 h-14 flex items-center justify-center shadow-xl border-4 border-white/30 transition-all duration-200"
        onClick={() => setOpen(true)}
        aria-label="Open chatbot"
        style={{ boxShadow: '0 4px 32px 0 #0F172A33' }}
      >
        {CHAT_ICON}
      </button>
      {/* Chatbot Modal */}
      {open && (
        <div className="fixed bottom-24 right-7 z-[300] flex items-end justify-end pointer-events-none select-none">
          <div
            ref={modalRef}
            className="pointer-events-auto select-auto w-80 max-w-[92vw] bg-[#10182a] border border-[#1e293b] rounded-2xl shadow-2xl flex flex-col animate-fade-in"
            style={{ minHeight: 0, maxHeight: 420 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#1e293b] bg-gradient-to-r from-[#18223a] to-[#10182a] rounded-t-2xl">
              <span className="text-base font-bold text-white">Chatbot</span>
              <button className="text-white/70 hover:text-cyan-400 text-xl font-bold transition" onClick={() => setOpen(false)} aria-label="Close chatbot">×</button>
            </div>
            {/* Body */}
            <div className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar" style={{ minHeight: 0 }}>
              {/* Bot intro message */}
              {step === 'sections' && (
                <div className="mb-4">
                  <div className="rounded-lg bg-[#18223a] text-white/90 px-4 py-3 text-sm shadow mb-2">Hi! I'm your assistant. Select a section to get started.</div>
                  <div className="flex flex-col gap-2 mt-4">
                    {SECTIONS.map((section, idx) => (
                      <button
                        key={section.title}
                        className="w-full text-left px-4 py-3 rounded-xl font-semibold text-white bg-[#151e33] hover:bg-cyan-900/40 border border-[#1e293b] shadow-sm transition-all duration-150"
                        onClick={() => { setStep('questions'); setSelectedSection(idx); }}
                      >
                        {section.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {/* Questions and answers */}
              {step === 'questions' && selectedSection !== null && (
                <div>
                  {/* Back link */}
                  <button
                    className="mb-3 text-cyan-300 hover:text-cyan-400 text-sm font-semibold flex items-center gap-1"
                    onClick={() => { setStep('sections'); setSelectedSection(null); setSelectedQuestion(null); }}
                  >
                    <span style={{fontSize: '1.1em'}}>&larr;</span> Back to sections
                  </button>
                  {/* Questions list */}
                  <div className="flex flex-col gap-2">
                    {SECTIONS[selectedSection].questions.map((qa, qidx) => (
                      <div key={qa.q}>
                        <button
                          className={`w-full text-left px-4 py-3 rounded-xl font-semibold border shadow-sm transition-all duration-150 ${selectedQuestion === qidx ? 'bg-cyan-400 text-[#0F172A] border-cyan-300' : 'bg-[#151e33] text-white border-[#1e293b] hover:bg-cyan-900/40'}`}
                          onClick={() => setSelectedQuestion(qidx)}
                        >
                          {qa.q}
                        </button>
                        {selectedQuestion === qidx && (
                          <div className="mt-2 mb-2 rounded-lg bg-[#18223a] text-white/90 px-4 py-3 text-sm shadow animate-fade-in">
                            {qa.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 