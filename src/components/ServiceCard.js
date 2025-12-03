import { useNavigate } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';

const ServiceCard = ({ title, description, icon, path }) => {
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Handle non-browser/testing environments (jsdom) where IntersectionObserver isn't available
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      el.classList.add('sr-visible');
      return; // Skip observer setup in tests
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible');
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="service-card card-white p-6 flex flex-col h-full opacity-0 translate-y-8 transition-all duration-700 will-change-transform group cursor-pointer"
      onClick={() => navigate(path)}
    >
      <div className="icon-badge mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2 text-center group-hover:text-sky-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed text-center flex-grow">{description}</p>
      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="text-sky-600 font-semibold text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
          <span>Learn More</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <style>{`
        .service-card.sr-visible { opacity:1; transform:translateY(0); }
      `}</style>
    </div>
  );
};

export default ServiceCard;
