import React, { useRef, useEffect, useState } from "react";
import MacbookMockup from "./MacbookMockup";
import Chatbot from './Chatbot';

function useInView(threshold = 0.2) {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const skills = [
  { label: "Web Developer" },
  { label: "Web Designer" },
  { label: "AI Trainer" },
  { label: "Python Developer" },
  { label: "Graphic Designer" },
];

// Service data
const services = [
  { icon: "🌐", name: "Website Building", desc: "Custom, scalable, and fast websites for your business or brand.", details: "I build high-performance, SEO-optimized websites using the latest technologies. Your site will be responsive, secure, and tailored to your brand.", stats: { projects: 30, years: 4 } },
  { icon: "🤖", name: "Chatbot Building", desc: "Conversational AI chatbots for support, sales, and automation.", details: "I create smart chatbots that automate support, qualify leads, and boost engagement. Integrations with WhatsApp, Messenger, and web.", stats: { projects: 12, years: 3 } },
  { icon: "🎨", name: "Website Designing", desc: "Modern, user-focused web design for a stunning online presence.", details: "Beautiful, intuitive UI/UX design in Figma or Adobe XD. I focus on conversion, accessibility, and brand impact.", stats: { projects: 25, years: 5 } },
  { icon: "🏷️", name: "Branding", desc: "Logo, color, and identity design to make your brand memorable.", details: "From logos to full brand guidelines, I help you stand out and connect with your audience.", stats: { projects: 18, years: 4 } },
  { icon: "⚡", name: "Workflow Automation", desc: "Automate repetitive tasks and boost productivity with smart workflows.", details: "Zapier, Make, and custom scripts to automate your business processes and save time.", stats: { projects: 20, years: 3 } },
  { icon: "🧠", name: "AI Integration", desc: "Integrate AI into your business for smarter, data-driven solutions.", details: "I integrate AI for analytics, automation, and personalization—OpenAI, GPT, and more.", stats: { projects: 10, years: 2 } },
];

// More realistic fake projects
const allProjects = [
  {
    name: "Online Learning Platform",
    service: "Website Building",
    desc: "A modern learning management system for online courses."
  },
  {
    name: "E-commerce Chatbot",
    service: "Chatbot Building",
    desc: "WhatsApp chatbot for a local e-commerce store."
  },
  {
    name: "Legal Services Website",
    service: "Website Designing",
    desc: "Clean, accessible design for a law consultancy."
  },
  {
    name: "Career Platform Branding",
    service: "Branding",
    desc: "Logo and brand kit for a youth career platform."
  },
  {
    name: "Logistics Automation System",
    service: "Workflow Automation",
    desc: "Automated shipment tracking for a logistics startup."
  },
  {
    name: "Retail Analytics Dashboard",
    service: "AI Integration",
    desc: "AI-powered sales analytics for a retail dashboard."
  },
  // More for Show More
  {
    name: "Grocery Portal",
    service: "Website Building",
    desc: "Online grocery portal for a local supermarket."
  },
  {
    name: "Travel Assistant Chatbot",
    service: "Chatbot Building",
    desc: "Travel assistant chatbot for a travel agency."
  },
  {
    name: "Real Estate Website",
    service: "Website Designing",
    desc: "Modern real estate website for a property advisor."
  },
  {
    name: "Marketing Identity Kit",
    service: "Branding",
    desc: "Brand refresh for a digital marketing freelancer."
  },
  {
    name: "Team Task Automation",
    service: "Workflow Automation",
    desc: "Automated reminders for a remote team."
  },
  {
    name: "Personalized Shopping AI",
    service: "AI Integration",
    desc: "Personalized product recommendations for an online store."
  },
];

// More realistic testimonials with a mix of Pakistani and international names
const testimonials = [
  {
    name: "Ayesha Khan",
    project: "Online Learning Platform",
    feedback: "The LMS is user-friendly and has made online teaching so much easier for our team."
  },
  {
    name: "Ali Raza",
    project: "E-commerce Chatbot",
    feedback: "Our customers love the WhatsApp chatbot. It’s boosted our sales and support!"
  },
  {
    name: "Jessica Smith",
    project: "Legal Services Website",
    feedback: "The new design is professional and easy for our clients to use."
  },
  {
    name: "Bilal Ahmed",
    project: "Career Platform Branding",
    feedback: "Our new brand identity is fresh and connects with our audience. Great work!"
  },
  {
    name: "Priya Patel",
    project: "Logistics Automation System",
    feedback: "Shipment tracking is now seamless and saves us hours every week."
  },
  {
    name: "Chris Miller",
    project: "Retail Analytics Dashboard",
    feedback: "The AI analytics help us make smarter business decisions."
  },
  {
    name: "Sana Malik",
    project: "Grocery Portal",
    feedback: "Our customers love the new portal. It’s beautiful and easy to use."
  },
  {
    name: "Daniel Kim",
    project: "Travel Assistant Chatbot",
    feedback: "Travel bookings are up and our team is less stressed."
  },
  {
    name: "Omar Farooq",
    project: "Real Estate Website",
    feedback: "The new site stands out and brings in more leads."
  },
  {
    name: "Fatima Noor",
    project: "Marketing Identity Kit",
    feedback: "Our brand is now consistent and looks amazing everywhere."
  },
  {
    name: "Ava Wilson",
    project: "Team Task Automation",
    feedback: "Reminders are automatic and our team never misses a deadline."
  },
  {
    name: "Ethan Clark",
    project: "Personalized Shopping AI",
    feedback: "Personalized recommendations have increased our sales."
  },
];

// Helper to get initials from name
function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

// Accent color by service
const serviceColors = {
  'Website Building': 'from-cyan-400 to-blue-500',
  'Chatbot Building': 'from-purple-400 to-cyan-400',
  'Website Designing': 'from-pink-400 to-purple-400',
  'Branding': 'from-yellow-400 to-pink-400',
  'Workflow Automation': 'from-green-400 to-cyan-400',
  'AI Integration': 'from-blue-400 to-purple-400',
};
const serviceIcons = {
  'Website Building': '🌐',
  'Chatbot Building': '🤖',
  'Website Designing': '🎨',
  'Branding': '🏷️',
  'Workflow Automation': '⚡',
  'AI Integration': '🧠',
};

// Pricing logic data - removed unused variables

// Grouped services with sub-services and prices
const groupedServices = [
  {
    group: 'Web Development',
    subServices: [
      { label: 'Basic Website', price: 100 },
      { label: 'E-commerce Site', price: 250 },
      { label: 'Custom Web App', price: 500 },
      { label: 'Website Design', price: 50 },
      { label: 'Monthly Maintenance', price: 10 },
    ],
  },
  {
    group: 'Workflow Automation',
    subServices: [
      { label: 'Database Syncing', price: 100 },
      { label: 'Process Automation', price: 100 },
      { label: 'Custom Automation', price: 150 },
      { label: 'Automation Support', price: 20 },
    ],
  },
  {
    group: 'AI Integration',
    subServices: [
      { label: 'AI Chatbot', price: 100 },
      { label: 'Monthly AI Analytics', price: 75 },
      { label: 'AI Integration', price: 50 },
    ],
  },
  {
    group: 'Branding',
    subServices: [
      { label: 'Logo Design', price: 30 },
      { label: 'Brand Strategy', price: 75 },
      { label: 'Visual Identity', price: 75 },
      { label: 'Marketing Materials', price: 50 },
    ],
  },
];

export default function App() {
  // About section animation
  const [aboutRef, aboutInView] = useInView(0.2);
  const [modalService, setModalService] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (modalService !== null) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [modalService]);

  // Portfolio state
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? allProjects : allProjects.slice(0, 6);
  // Testimonial carousel state
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  // Responsive: 1 card on mobile, 3 on desktop
  const [testimonialsToShow, setTestimonialsToShow] = useState(window.innerWidth >= 1024 ? 3 : 1);
  useEffect(() => {
    const handleResize = () => setTestimonialsToShow(window.innerWidth >= 1024 ? 3 : 1);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const totalTestimonials = testimonials.length;
  const visibleTestimonials = testimonials.slice(testimonialIndex, testimonialIndex + testimonialsToShow).concat(
    testimonialIndex + testimonialsToShow > totalTestimonials
      ? testimonials.slice(0, (testimonialIndex + testimonialsToShow) % totalTestimonials)
      : []
  );
  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - testimonialsToShow + totalTestimonials) % totalTestimonials);
  };
  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + testimonialsToShow) % totalTestimonials);
  };
  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + testimonialsToShow) % totalTestimonials);
    }, 3500);
    return () => clearInterval(interval);
  }, [testimonialsToShow, totalTestimonials]);

  // Smooth scroll to portfolio
  const handleScrollToPortfolio = (e) => {
    e.preventDefault();
    const section = document.getElementById('portfolio');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add scroll to contact handler
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pricing calculator state
  const [selectedSubServices, setSelectedSubServices] = useState([]);
  // Add/remove sub-service
  const handleSubServiceChange = (label, price, checked) => {
    if (checked) setSelectedSubServices([...selectedSubServices, { label, price }]);
    else setSelectedSubServices(selectedSubServices.filter(s => s.label !== label));
  };
  const handleRemoveSubService = (label) => {
    setSelectedSubServices(selectedSubServices.filter(s => s.label !== label));
  };
  const handleResetInvoice = () => setSelectedSubServices([]);
  const total = selectedSubServices.reduce((sum, s) => sum + s.price, 0);

  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    if (formStatus === 'success') {
      const timer = setTimeout(() => setFormStatus(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };
  const handleContactSubmit = async e => {
    e.preventDefault();
    setFormStatus('pending');
    
    // Check if we're in development mode
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    if (isDevelopment) {
      // Simulate form submission for local development
      setTimeout(() => {
        setFormStatus('success');
        setForm({ name: '', email: '', projectType: '', message: '' });
        console.log('Form submitted locally:', form);
      }, 1000);
      return;
    }
    
    // Production: Use Netlify Forms
    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('projectType', form.projectType);
    formData.append('message', form.message);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setFormStatus('success');
        setForm({ name: '', email: '', projectType: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  // 1. Add hamburger menu state at the top of App function
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white font-sans relative overflow-x-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="opacity-10" style={{position: 'absolute', top: 0, left: 0}}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* Navbar */}
      <nav className="sticky top-6 z-50 mx-auto w-[98%] max-w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between px-6 py-3 shadow-lg">
        <span className="text-3xl font-extrabold tracking-wide text-white drop-shadow-lg">Mansoor Moiz</span>
        {/* Hamburger for mobile */}
        <button className="lg:hidden flex items-center justify-center ml-auto text-white text-3xl focus:outline-none" onClick={() => setNavOpen(!navOpen)} aria-label="Open navigation menu">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          <button className="text-white/80 hover:text-white transition font-medium text-lg">Home</button>
          <a href="#about" className="text-white/80 hover:text-white transition font-medium text-lg">About</a>
          <a href="#services" className="text-white/80 hover:text-white transition font-medium text-lg">Services</a>
          <a href="#portfolio" className="text-white/80 hover:text-white transition font-medium text-lg">Work</a>
          <a href="#calculator" className="text-white/80 hover:text-white transition font-medium text-lg">Calculator</a>
          <a href="#contact" className="text-white/80 hover:text-white transition font-medium text-lg">Contact</a>
          <button className="ml-6 px-6 py-2 rounded-lg bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold shadow transition backdrop-blur text-lg" onClick={handleScrollToContact}>Get a Quote</button>
        </div>
        {/* Mobile nav links (dropdown) */}
        {navOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md border-b border-white/20 flex flex-col items-center gap-4 py-6 z-50 animate-fade-in">
            <button className="text-[#0F172A] hover:text-cyan-600 transition font-semibold text-lg" onClick={() => setNavOpen(false)}>Home</button>
            <a href="#about" className="text-[#0F172A] hover:text-cyan-600 transition font-semibold text-lg" onClick={() => setNavOpen(false)}>About</a>
            <a href="#services" className="text-[#0F172A] hover:text-cyan-600 transition font-semibold text-lg" onClick={() => setNavOpen(false)}>Services</a>
            <a href="#portfolio" className="text-[#0F172A] hover:text-cyan-600 transition font-semibold text-lg" onClick={() => setNavOpen(false)}>Work</a>
            <a href="#calculator" className="text-[#0F172A] hover:text-cyan-600 transition font-semibold text-lg" onClick={() => setNavOpen(false)}>Calculator</a>
            <a href="#contact" className="text-[#0F172A] hover:text-cyan-600 transition font-semibold text-lg" onClick={() => setNavOpen(false)}>Contact</a>
            <button className="mt-2 px-6 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold shadow transition text-lg" onClick={(e) => { setNavOpen(false); handleScrollToContact(e); }}>Get a Quote</button>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto min-h-[80vh] px-4 sm:px-6 gap-12 relative z-10 pt-10 pb-8 mb-6 w-full max-w-full">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start gap-8 justify-center pl-2 md:pl-12 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-lg">Mansoor Moiz</h1>
          <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold text-white/90">I build intelligent, elegant, and scalable digital solutions.</h2>
          <p className="text-base sm:text-lg md:text-2xl text-white/80 max-w-2xl">From code to concept — I create websites, automations, and brand identities that drive growth.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full">
            <button onClick={handleScrollToPortfolio} className="w-full sm:w-auto px-8 py-3 rounded-xl bg-white text-[#0F172A] hover:bg-[#1E293B] hover:text-white font-bold shadow transition border border-white/20 text-xl">🚀 View My Work</button>
            <a href="#contact" className="w-full sm:w-auto px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-white border border-white/20 shadow transition text-xl text-center">📞 Get a Quote</a>
          </div>
        </div>
        {/* Right Side: Macbook Mockup */}
        <div className="flex-1 flex items-center justify-center min-h-[180px] sm:min-h-[320px] w-full relative mt-4 max-w-full md:max-w-none">
          <div className="flex items-center justify-center w-full h-full max-w-xs md:max-w-full">
            <MacbookMockup />
          </div>
        </div>
      </section>
      {/* Subtle Divider */}
      <div className="w-full flex justify-center z-10">
        <div className="h-1 w-2/3 bg-white/10 rounded-full backdrop-blur-sm" />
      </div>
      {/* About Me Section */}
      <section
        id="about"
        ref={aboutRef}
        className="relative z-10 max-w-7xl mx-auto pt-8 pb-16 px-2 sm:px-4 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-8 min-h-[70vh] w-full max-w-full"
      >
        {/* Left: Image with glassmorphism, floating and hover effect */}
        <div className={`flex-1 flex items-center justify-center transition-all duration-700 mt-8 md:mt-16 w-full` + (aboutInView ? ' opacity-100 translate-x-0' : ' opacity-0 -translate-x-12')}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white/10 backdrop-blur-md w-full max-w-xs sm:max-w-md md:max-w-xl h-48 sm:h-64 md:h-[24rem] flex items-center justify-center animate-float group transition-transform duration-500 md:ml-8">
            <img
              src="/about%20me.png"
              alt="Mansoor Moiz"
              className="w-full h-full object-cover group-hover:scale-105 group-hover:shadow-2xl transition-transform duration-500"
              onError={e => { e.target.onerror = null; e.target.src = 'https://randomuser.me/api/portraits/men/32.jpg'; }}
            />
          </div>
        </div>
        {/* Vertical Divider */}
        <div className="hidden md:block h-64 w-px bg-white/10 mx-8 rounded-full" />
        {/* Right: Details with animation */}
        <div className={`flex-1 flex flex-col gap-4 md:gap-6 items-start justify-center transition-all duration-700 w-full` + (aboutInView ? ' opacity-100 translate-x-0' : ' opacity-0 translate-x-12')}>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2">About Me</h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 mb-2">Mansoor Moiz — Full Stack Developer & Designer</h3>
          <p className="text-base sm:text-lg text-white/80 max-w-xl mb-2">
            Hi! I’m Mansoor, a passionate developer and designer who loves turning ideas into beautiful, scalable digital products. I blend code, creativity, and business insight to help brands and startups launch products that are as delightful as they are powerful. Let’s build something amazing together!
          </p>
          {/* Skills as rectangular cards, 3 in first row, 2 centered in second row */}
          <div className="flex flex-col gap-2 w-full mt-2">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full">
              {skills.slice(0, 3).map((skill, i) => (
                <div key={i} className="flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-full sm:w-44 h-12 sm:h-14 shadow text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:border-cyan-400 text-center">
                  {skill.label}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full">
              {skills.slice(3, 5).map((skill, i) => (
                <div key={i} className="flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-full sm:w-44 h-12 sm:h-14 shadow text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:border-cyan-400 text-center">
                  {skill.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Subtle Divider */}
      <div className="w-full flex justify-center z-10">
        <div className="h-1 w-2/3 bg-white/10 rounded-full backdrop-blur-sm" />
      </div>
      {/* Services Section */}
      <section id="services" className="relative z-10 max-w-7xl mx-auto pt-12 pb-20 px-6 min-h-[70vh] flex flex-col items-center w-full max-w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Services</h2>
        <p className="text-lg text-white/70 mb-10 text-center max-w-2xl">I offer a full suite of digital services to help you grow, automate, and stand out online. Every solution is tailored to your needs, with a focus on quality, design, and results.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-start bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl text-white transition-all duration-300 group cursor-pointer hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-blue-500/10 hover:border-cyan-400 hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <div className="text-xl font-bold mb-2 text-center">{service.name}</div>
              <div className="text-base text-white/80 text-center mb-4">{service.desc}</div>
              <button
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-cyan-400/20 border border-white/20 text-white font-semibold shadow transition backdrop-blur scale-100 hover:scale-105 text-sm mb-2"
                onClick={() => setModalService(i)}
              >
                Details
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Service Modal rendered at root level to avoid overlap/clipping */}
      {modalService !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative bg-white/40 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl p-8 max-w-lg w-full mx-4 flex flex-col items-center animate-fade-in">
            <button
              className="absolute top-4 right-4 text-[#1e293b]/70 hover:text-cyan-500 text-2xl font-bold transition"
              onClick={() => setModalService(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="text-5xl mb-4">{services[modalService].icon}</div>
            <div className="text-2xl font-extrabold mb-2 text-[#1e293b] text-center">{services[modalService].name}</div>
            <div className="text-base font-bold text-[#1e293b] text-center mb-4">{services[modalService].details}</div>
            <div className="flex flex-row justify-center gap-8 mb-4">
              <div className="flex flex-col items-center">
                <span className="text-lg font-extrabold text-cyan-500">{services[modalService].stats.projects}+</span>
                <span className="text-xs font-semibold text-[#1e293b]/60">Projects</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-extrabold text-cyan-500">{services[modalService].stats.years}+</span>
                <span className="text-xs font-semibold text-[#1e293b]/60">Years Exp.</span>
              </div>
            </div>
            {/* Placeholder for testimonial/example */}
            <div className="w-full bg-white/70 rounded-xl p-4 text-[#1e293b]/80 text-sm text-center italic font-semibold mt-2">
              “This service helped us launch faster and look amazing!”
            </div>
          </div>
        </div>
      )}
      {/* Portfolio Section */}
      <div className="w-full flex justify-center z-10">
        <div className="h-1 w-2/3 bg-white/10 rounded-full backdrop-blur-sm" />
      </div>
      <section id="portfolio" className="relative z-10 max-w-7xl mx-auto pt-12 pb-20 px-6 min-h-[70vh] flex flex-col items-center w-full max-w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Portfolio</h2>
        <p className="text-lg text-white/70 mb-10 text-center max-w-2xl">A showcase of my recent work across web, AI, branding, and automation. Every project is crafted for impact and results.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mb-6">
          {visibleProjects.map((project, i) => (
            <div
              key={i}
              className={`relative flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow text-white transition-all duration-300 group hover:scale-105 hover:border-cyan-400 w-96 h-52 mx-auto overflow-hidden`}
            >
              {/* Horizontal accent bar */}
              <div className={`w-full h-2 bg-gradient-to-r ${serviceColors[project.service]} group-hover:blur-[2px] group-hover:brightness-125 transition-all duration-300`} />
              <div className="flex-1 flex flex-col justify-center px-8 py-4 w-full">
                <div className="flex items-center justify-between w-full mb-2">
                  <div className="text-xl font-bold text-left">{project.name}</div>
                  <span className="text-3xl opacity-60 ml-2">{serviceIcons[project.service]}</span>
                </div>
                <div className="text-base text-cyan-400 font-semibold mb-1 text-left">{project.service}</div>
                <div className="text-lg text-white/80 text-left">{project.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          {!showAllProjects && (
            <button onClick={() => setShowAllProjects(true)} className="px-6 py-1.5 rounded-lg bg-white/10 hover:bg-cyan-400/20 border border-white/20 text-white font-semibold shadow transition backdrop-blur scale-100 hover:scale-105 text-sm">Show More</button>
          )}
          {showAllProjects && (
            <button onClick={() => setShowAllProjects(false)} className="px-6 py-1.5 rounded-lg bg-white/10 hover:bg-cyan-400/20 border border-white/20 text-white font-semibold shadow transition backdrop-blur scale-100 hover:scale-105 text-sm">Show Less</button>
          )}
        </div>
        {/* Testimonials Section - Horizontal Carousel */}
        <div className="w-full flex justify-center z-10 mt-16">
          <div className="h-1 w-2/3 bg-white/10 rounded-full backdrop-blur-sm" />
        </div>
        <div className="w-full max-w-3xl mx-auto mt-10 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">What Clients Say</h3>
          <div className="relative w-full flex items-center justify-center">
            {/* Left Arrow */}
            <div className="flex items-center h-full">
              <button onClick={handlePrevTestimonial} className="z-10 bg-white/10 hover:bg-cyan-400/20 border border-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center shadow transition backdrop-blur focus:outline-none mr-4">
                <span className="text-xl">&#8592;</span>
              </button>
            </div>
            {/* Testimonial Cards */}
            <div className="flex flex-row gap-6 w-full justify-center overflow-hidden">
              {visibleTestimonials.map((t, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl w-full max-w-xs flex flex-col items-center transition-all duration-500 mx-auto">
                  {/* Animated avatar with initials */}
                  <div className="w-12 h-12 rounded-full mb-2 flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white text-lg font-bold animate-pulse shadow-lg">
                    {getInitials(t.name)}
                  </div>
                  <div className="text-base font-bold text-white mb-1">{t.name}</div>
                  <div className="text-xs text-cyan-400 font-semibold mb-1">{t.project}</div>
                  <div className="text-sm text-white/90 text-center italic">“{t.feedback}”</div>
                </div>
              ))}
            </div>
            {/* Right Arrow */}
            <div className="flex items-center h-full">
              <button onClick={handleNextTestimonial} className="z-10 bg-white/10 hover:bg-cyan-400/20 border border-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center shadow transition backdrop-blur focus:outline-none ml-4">
                <span className="text-xl">&#8594;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Calculator Section */}
      <div className="w-full flex justify-center z-10">
        <div className="h-1 w-2/3 bg-white/10 rounded-full backdrop-blur-sm" />
      </div>
      <section id="calculator" className="relative z-10 max-w-7xl mx-auto pt-12 pb-20 px-6 min-h-[70vh] flex flex-col items-center w-full max-w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Pricing Calculator</h2>
        <p className="text-lg text-white/70 mb-10 text-center max-w-2xl">Select your services and get an instant, transparent quote. Add or remove features to see your live invoice.</p>
        {/* Unified glassmorphism container */}
        <div className="w-full flex justify-center">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-4 sm:p-8 flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-sm md:max-w-4xl overflow-hidden relative animate-fade-in min-h-[600px] md:h-[500px]">
            {/* Services Selection */}
            <div className="flex-1 flex flex-col min-w-0 md:min-w-[340px] max-w-full md:max-w-lg w-full relative h-full" style={{ minHeight: 0 }}>
              {/* Floating header */}
              <div className="rounded-xl bg-white/20 backdrop-blur-lg shadow px-4 sm:px-6 py-3 sm:py-4 mb-4 font-bold text-base sm:text-lg text-white/90 border border-white/10">Choose your service</div>
              {/* Scrollable services list */}
              <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-3 sm:gap-4 pr-1 sm:pr-2">
                {groupedServices.map((group, idx) => (
                  <div key={group.group} className={`rounded-xl border-2 ${idx % 2 === 0 ? 'border-cyan-400/40 bg-white/10' : 'border-blue-400/30 bg-white/5'} shadow-sm p-4 flex flex-col gap-3`}>
                    <div className="text-sm sm:text-base font-semibold text-cyan-400 mb-1">{group.group}</div>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {group.subServices.map(sub => (
                        <button
                          key={sub.label}
                          className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-200 ${selectedSubServices.find(s => s.label === sub.label)
                            ? 'bg-cyan-400/80 text-[#0F172A] border-cyan-400 shadow scale-105'
                            : 'bg-white/10 text-white/80 border-white/20 hover:bg-cyan-400/20 hover:text-cyan-300'}`}
                          onClick={() => handleSubServiceChange(sub.label, sub.price, !selectedSubServices.find(s => s.label === sub.label))}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Invoice */}
            <div className="flex-1 flex flex-col min-w-0 md:min-w-[340px] max-w-full md:max-w-lg w-full relative h-full" style={{ minHeight: 0 }}>
              {/* Floating header */}
              <div className="rounded-xl bg-white/20 backdrop-blur-lg shadow px-4 sm:px-6 py-3 sm:py-4 mb-4 font-bold text-base sm:text-lg text-white/90 border border-white/10 text-center">INVOICE</div>
              {/* Scrollable invoice list */}
              <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-3 sm:gap-4 pr-1 sm:pr-2">
                {selectedSubServices.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-32 sm:h-40 text-white/60">
                    <span className="mb-4"><svg width='40' height='40' fill='none' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' fill='#38bdf8' fillOpacity='.15'/><path d='M12 8v4m0 4h.01' stroke='#38bdf8' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/></svg></span>
                    <span>Select services to see your quote</span>
                  </div>
                ) : (
                  <ul className="flex flex-col gap-2 sm:gap-3 mb-4">
                    {selectedSubServices.map(s => (
                      <li key={s.label} className="flex items-center justify-between bg-white/5 rounded-xl px-3 sm:px-4 py-2 sm:py-3 hover:bg-cyan-400/10 transition text-xs sm:text-base">
                        <div className="flex flex-col">
                          <span className="text-white/90 font-medium">{s.label}</span>
                          <span className="text-cyan-400 text-sm font-semibold">${s.price}</span>
                        </div>
                        <button onClick={() => handleRemoveSubService(s.label)} className="ml-2 text-white/60 hover:text-red-400 text-lg font-bold">×</button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Sticky total and reset */}
              <div className="w-full px-2 mt-4">
                <div className="flex items-center justify-between w-full mb-4 rounded-lg bg-white/10 px-3 sm:px-4 py-2 sm:py-3 border border-white/10">
                  <span className="text-sm sm:text-base font-bold text-white">Total</span>
                  <span className="text-lg sm:text-xl font-extrabold text-cyan-400">${total}</span>
                </div>
                <button onClick={handleResetInvoice} className="w-full px-4 sm:px-8 py-2 rounded-xl bg-white/10 hover:bg-cyan-400/10 text-white font-semibold shadow transition border border-white/20 text-sm sm:text-base backdrop-blur-lg">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Contact Section */}
       <div className="w-full flex justify-center z-10">
         <div className="h-1 w-2/3 bg-white/10 rounded-full backdrop-blur-sm" />
       </div>
       <section id="contact" className="relative z-10 max-w-7xl mx-auto pt-12 pb-20 px-6 min-h-[90vh] flex flex-col items-center w-full max-w-full">
         <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Let's Build Something Amazing</h2>
         <p className="text-lg text-white/70 mb-12 text-center max-w-2xl">Ready to transform your ideas into reality? I'm here to help you create something extraordinary. Let's start the conversation.</p>
         
         {/* Main Contact Container */}
         <div className="w-full flex justify-center">
           <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 w-full max-w-6xl overflow-hidden relative animate-fade-in">
             <div className="flex flex-col lg:flex-row gap-8">
               {/* Left Side - Contact Form */}
               <div className="flex-1 flex flex-col">
                 <div className="rounded-xl bg-white/20 backdrop-blur-lg shadow px-6 py-4 mb-6 font-bold text-xl text-white/90 border border-white/10">Send me a message</div>
                 
                 <form className="flex flex-col gap-6" onSubmit={handleContactSubmit} name="contact" data-netlify="true">
                   <input type="hidden" name="form-name" value="contact" />
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="relative group">
                       <input
                         type="text"
                         name="name"
                         value={form.name}
                         onChange={handleInputChange}
                         placeholder="Your Name"
                         className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 font-medium transition-all duration-300 focus:outline-none focus:border-cyan-400 focus:bg-white/15 focus:scale-[1.02] group-hover:border-cyan-400/50"
                         required
                       />
                       <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none"></div>
                     </div>
                     
                     <div className="relative group">
                       <input
                         type="email"
                         name="email"
                         value={form.email}
                         onChange={handleInputChange}
                         placeholder="Your Email"
                         className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 font-medium transition-all duration-300 focus:outline-none focus:border-cyan-400 focus:bg-white/15 focus:scale-[1.02] group-hover:border-cyan-400/50"
                         required
                       />
                       <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none"></div>
                     </div>
                   </div>
                    
                   <div className="relative group">
                     <input
                       type="text"
                       name="projectType"
                       value={form.projectType}
                       onChange={handleInputChange}
                       placeholder="Project Type (Website, AI, Branding, etc.)"
                       className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 font-medium transition-all duration-300 focus:outline-none focus:border-cyan-400 focus:bg-white/15 focus:scale-[1.02] group-hover:border-cyan-400/50"
                     />
                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none"></div>
                   </div>
                    
                   <div className="relative group">
                     <textarea
                       name="message"
                       value={form.message}
                       onChange={handleInputChange}
                       placeholder="Tell me about your project, goals, and vision. What are you looking to achieve?"
                       rows="6"
                       className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 font-medium transition-all duration-300 focus:outline-none focus:border-cyan-400 focus:bg-white/15 focus:scale-[1.02] group-hover:border-cyan-400/50 resize-none"
                       required
                     ></textarea>
                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none"></div>
                   </div>
                    
                   <button
                     type="submit"
                     className="w-full px-8 py-4 rounded-xl bg-white text-[#0F172A] hover:bg-[#1E293B] hover:text-white font-bold shadow transition border border-white/20 text-xl"
                     disabled={formStatus === 'pending'}
                   >
                     {formStatus === 'pending' ? 'Sending...' : '🚀 Send Message & Start Project'}
                   </button>
                   {formStatus === 'success' && <div className="text-green-400 font-bold mt-2">Thank you! Your message has been sent.</div>}
                   {formStatus === 'error' && <div className="text-red-400 font-bold mt-2">Something went wrong. Please try again later.</div>}
                 </form>
               </div>
               
               {/* Right Side - Social & Contact Info */}
               <div className="flex-1 flex flex-col">
                 <div className="rounded-xl bg-white/20 backdrop-blur-lg shadow px-6 py-4 mb-6 font-bold text-xl text-white/90 border border-white/10 text-center">Connect with me</div>
                 
                 {/* Social Links */}
                 <div className="flex flex-col gap-6 mb-8">
                   {/* Instagram */}
                   <a 
                     href="https://instagram.com/mansoor__moiz" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="group relative overflow-hidden bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-md border border-pink-400/30 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-pink-400 hover:shadow-pink-400/25"
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-purple-600/0 group-hover:from-pink-500/10 group-hover:to-purple-600/10 transition-all duration-300"></div>
                     <div className="relative flex items-center gap-4">
                       <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                         📸
                       </div>
                       <div className="flex flex-col">
                         <span className="text-white font-bold text-lg">Instagram</span>
                         <span className="text-pink-300 font-medium">@mansoor__moiz</span>
                         <span className="text-white/60 text-sm">Follow for updates & behind-the-scenes</span>
                       </div>
                       <div className="ml-auto text-pink-400 text-2xl group-hover:translate-x-2 transition-transform duration-300">
                         →
                       </div>
                     </div>
                   </a>
                    
                   {/* LinkedIn */}
                   <a 
                     href="https://www.linkedin.com/in/mansoor-moiz-87764a374/" 
          target="_blank"
          rel="noopener noreferrer"
                     className="group relative overflow-hidden bg-gradient-to-r from-blue-500/20 to-cyan-600/20 backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-blue-400/25"
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-600/0 group-hover:from-blue-500/10 group-hover:to-cyan-600/10 transition-all duration-300"></div>
                     <div className="relative flex items-center gap-4">
                       <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                         💼
                       </div>
                       <div className="flex flex-col">
                         <span className="text-white font-bold text-lg">LinkedIn</span>
                         <span className="text-blue-300 font-medium">Mansoor Moiz</span>
                         <span className="text-white/60 text-sm">Professional network & portfolio</span>
                       </div>
                       <div className="ml-auto text-blue-400 text-2xl group-hover:translate-x-2 transition-transform duration-300">
                         →
                       </div>
                     </div>
                   </a>
                    
                   {/* Phone */}
                   <a 
                     href="tel:+923357555253" 
                     className="group relative overflow-hidden bg-gradient-to-r from-green-500/20 to-emerald-600/20 backdrop-blur-md border border-green-400/30 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-green-400 hover:shadow-green-400/25"
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-600/0 group-hover:from-green-500/10 group-hover:to-emerald-600/10 transition-all duration-300"></div>
                     <div className="relative flex items-center gap-4">
                       <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                         📞
                       </div>
                       <div className="flex flex-col">
                         <span className="text-white font-bold text-lg">Phone</span>
                         <span className="text-green-300 font-medium">+92 335 7555253</span>
                         <span className="text-white/60 text-sm">Call for urgent projects & consultations</span>
                       </div>
                       <div className="ml-auto text-green-400 text-2xl group-hover:translate-x-2 transition-transform duration-300">
                         →
                       </div>
                     </div>
                   </a>
                 </div>
                 
                 {/* Quick Stats */}
                 <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
                     <div className="text-2xl font-bold text-cyan-400">24h</div>
                     <div className="text-white/80 text-sm">Response Time</div>
                   </div>
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
                     <div className="text-2xl font-bold text-cyan-400">100%</div>
                     <div className="text-white/80 text-sm">Client Satisfaction</div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         
         {/* Floating Elements */}
         <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
         <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
         <div className="absolute top-1/2 left-5 w-16 h-16 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
       </section>
    <Chatbot />
    </div>
  );
}
