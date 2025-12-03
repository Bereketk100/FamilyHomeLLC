import React, { useState, useRef, useEffect } from 'react';
import GoogleReviews from './GoogleReviews';
import ServiceCard from './ServiceCard';
import ContactForm from './ContactForm';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const reviewsRef = useRef(null);
  const missionRef = useRef(null);
  const evergreenImages = ['/white1.png','/white2.png','/white3.png','/white4.png','/white5.png'];
  const willowImages = ['/blue1.jpeg','/blue2.jpeg','/blue3.jpeg','/blue4.jpeg','/blue5.jpeg','/blue6.jpeg','/blue7.jpeg'];
  const [evergreenIndex, setEvergreenIndex] = useState(0);
  const [willowIndex, setWillowIndex] = useState(0);

  const nextEvergreen = () => setEvergreenIndex((i) => (i + 1) % evergreenImages.length);
  const prevEvergreen = () => setEvergreenIndex((i) => (i - 1 + evergreenImages.length) % evergreenImages.length);
  const nextWillow = () => setWillowIndex((i) => (i + 1) % willowImages.length);
  const prevWillow = () => setWillowIndex((i) => (i - 1 + willowImages.length) % willowImages.length);

  const scrollToSection = (ref, tabName) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tabName);
  };
  const services = [
    {
      title: '24-Hour Personal Care',
      description:
        'Assistance with bathing, grooming, dressing, hygiene, mobility, transfers, and ambulation.',
      path: '/services/personal-care',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v7h6v-7c0-1.657-1.343-3-3-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21h14" />
        </svg>
      ),
    },
    {
      title: 'Health & Wellness Support',
      description:
        'Medication assistance, monitoring, coordination with providers, appointments and transportation.',
      path: '/services/health-wellness',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6M5 7h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
        </svg>
      ),
    },
    {
      title: 'Behavioral & Emotional Support',
      description:
        'Patience-based communication, redirection, positive strategies, support for anxiety and trauma.',
      path: '/services/behavioral-emotional',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8a6 6 0 016 6h-3a3 3 0 00-6 0H6a6 6 0 016-6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l.01 0" />
        </svg>
      ),
    },
    {
      title: 'Meal Preparation & Nutrition',
      description:
        'Fresh, balanced meals, texture modification, hydration monitoring and meal supervision.',
      path: '/services/meals-nutrition',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10h16M6 20h12M8 4h8" />
        </svg>
      ),
    },
    {
      title: 'Household Services',
      description: 'Laundry, housekeeping, clean and organized living environment.',
      path: '/services/household',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 7v14h14V7M7 11h10" />
        </svg>
      ),
    },
    {
      title: 'Community Integration',
      description: 'Outings, shopping trips, social activities, walks and recreation.',
      path: '/services/community',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l6 6-6 6-6-6 6-6z" />
        </svg>
      ),
    },
    {
      title: 'Emergency & Safety Support',
      description:
        '24/7 supervision, fall prevention, safety protocols for medical/behavioral situations.',
      path: '/services/emergency-safety',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Individualized Care Plans',
      description:
        'Personalized care plans tailored to physical, emotional, and social needs.',
      path: '/services/care-plans',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    }
  ];

  // Scroll reveal effect for sections
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('reveal-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-sky-50 text-slate-800">
      {/* Navigation Banner */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur shadow z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="Family Home LLC Logo" className="h-14 md:h-16 w-auto" />
              <span className="ml-2 text-xl font-bold text-sky-700">Family Home LLC</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-sky-700"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection(homeRef, 'home')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'home' ? 'text-sky-700' : 'text-slate-600 hover:text-sky-700'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef, 'services')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'services' ? 'text-sky-700' : 'text-slate-600 hover:text-sky-700'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef, 'about')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'about' ? 'text-sky-700' : 'text-slate-600 hover:text-sky-700'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection(contactRef, 'contact')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'contact' ? 'text-sky-700' : 'text-slate-600 hover:text-sky-700'
                }`}
              >
                Contact Us
              </button>
              <button 
                onClick={() => scrollToSection(missionRef, 'mission')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'mission' ? 'text-sky-700' : 'text-slate-600 hover:text-sky-700'
                }`}
              >
                Our Mission
              </button>
            </div>
          </div>

          {/* Mobile navigation menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                <button
                  onClick={() => {
                    scrollToSection(homeRef, 'home');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-sky-700 hover:bg-sky-50 rounded-md"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection(servicesRef, 'services');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-sky-700 hover:bg-sky-50 rounded-md"
                >
                  Services
                </button>
                
                <button
                  onClick={() => {
                    scrollToSection(aboutRef, 'about');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-sky-700 hover:bg-sky-50 rounded-md"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    scrollToSection(contactRef, 'contact');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-sky-700 hover:bg-sky-50 rounded-md"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => {
                    scrollToSection(missionRef, 'mission');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-sky-700 hover:bg-sky-50 rounded-md"
                >
                  Our Mission
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Section */}
        <section ref={homeRef} className="relative w-full min-h-screen flex items-center justify-center text-center px-6 pb-32">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-sky-50" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <img
              src="/logo.png"
              alt="Family Home LLC Logo"
              className="mx-auto mb-8 w-[14rem] md:w-[20rem] lg:w-[24rem] drop-shadow-2xl"
            />
            <p className="text-2xl md:text-3xl mb-10 text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium italic">
              Compassionate, person-centered 24-hour residential care in Gresham, Oregon.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <button
                onClick={() => scrollToSection(servicesRef, 'services')}
                className="bg-transparent hover:bg-sky-50 py-3 px-8 md:py-4 md:px-10 rounded-full text-sky-700 font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 border-2 border-sky-500 hover:border-sky-600 shadow-md hover:shadow-lg"
              >
                View Services
              </button>
              <button
                onClick={() => scrollToSection(contactRef, 'contact')}
                className="bg-transparent hover:bg-sky-50 py-3 px-8 md:py-4 md:px-10 rounded-full text-sky-700 font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 border-2 border-sky-500 hover:border-sky-600 shadow-md hover:shadow-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section ref={missionRef} className="section-padding bg-gradient-to-b from-sky-50 to-white reveal">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-block mb-6">
                  <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-100 to-sky-200 shadow-xl mb-4 mx-auto">
                    <svg className="w-10 h-10 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                  <span className="bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500 bg-clip-text text-transparent">Our Mission</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                  To provide safe, compassionate, and person-centered residential care that promotes independence, dignity, and well-being in a warm, home-like environment.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="card-white p-8 text-center">
                  <div className="icon-badge mx-auto mb-4">
                    <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Safety First</h3>
                  <p className="text-slate-600 leading-relaxed">24/7 supervision and protocols ensuring every resident feels secure in their home.</p>
                </div>
                
                <div className="card-white p-8 text-center">
                  <div className="icon-badge mx-auto mb-4">
                    <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Person-Centered</h3>
                  <p className="text-slate-600 leading-relaxed">Individualized care plans tailored to unique needs, preferences, and goals.</p>
                </div>
                
                <div className="card-white p-8 text-center">
                  <div className="icon-badge mx-auto mb-4">
                    <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Home Environment</h3>
                  <p className="text-slate-600 leading-relaxed">Warm, welcoming spaces where residents thrive and families find peace of mind.</p>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-10 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Vision</h3>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  We envision a community where every person—regardless of ability—can live a fulfilling life. We aim to expand our homes, strengthen services, and continuously improve quality of care so residents feel empowered and families feel supported.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Growth Flow Chart removed for cleaner layout */}

        {/* Services Section */}
        <section ref={servicesRef} className="section-padding bg-sky-50 reveal">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200 shadow-lg mb-3 mx-auto">
                  <svg className="w-8 h-8 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500 bg-clip-text text-transparent">Our Services</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                Comprehensive care tailored to each resident's unique needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Homes Section */}
        <section ref={aboutRef} className="section-padding bg-gradient-to-b from-white via-sky-50/30 to-white reveal">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-100 to-sky-200 shadow-xl mb-4 mx-auto">
                  <svg className="w-10 h-10 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500 bg-clip-text text-transparent">Our Homes</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Two beautiful locations in Gresham, Oregon. Over a decade of compassionate, person-centered care.
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="glass-card rounded-3xl p-8 md:p-10 mb-16">
                <p className="text-slate-700 text-lg md:text-xl leading-relaxed text-center">
                  Family Home LLC is a compassionate, person-centered residential care provider in Gresham, Oregon. With over a decade of hands-on experience, our Executive Director brings a background in caregiving, adult foster home management, and leadership in residential services—supported by a bachelor's degree and deep dedication to serving individuals with diverse needs.
                </p>
              </div>

              <div className="space-y-16 mb-16">
                {/* Location 1 */}
                <div className="card-white p-10 md:p-12 rounded-3xl shadow-2xl">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-start gap-4">
                      <div>
                        <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-bold uppercase tracking-wider mb-3">Location 1</div>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">Willow Parkway Home</h3>
                        <p className="text-slate-600 mt-2 flex items-start gap-2">
                          <svg className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243" />
                          </svg>
                          <span className="text-slate-700">2101 SW Willow Pkwy, Gresham, OR 97080</span>
                        </p>
                      </div>
                    </div>
                    <div className="icon-badge !w-16 !h-16 flex-shrink-0">
                      <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">Nestled in a peaceful neighborhood with beautiful sidewalks and convenient access to Safeway, Walmart, and local shops—ideal for quiet living, outdoor walks, and community activities.</p>
                  
                  {/* Slideshow with Hover Controls */}
                  <div className="relative mb-6 group">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-sky-200 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 min-h-[500px] max-h-[700px]">
                      <img 
                        src={evergreenImages[evergreenIndex]} 
                        alt={`Willow Parkway Home`} 
                        className="w-full h-auto max-h-[700px] object-contain transition-opacity duration-700" 
                      />
                    </div>
                    
                    {/* Navigation Arrows - Visible on Hover */}
                    <button
                      onClick={prevEvergreen}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-sky-700 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                      aria-label="Previous photo"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextEvergreen}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-sky-700 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                      aria-label="Next photo"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <div className="absolute top-4 right-4 bg-sky-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {evergreenIndex + 1} / {evergreenImages.length}
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {evergreenImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setEvergreenIndex(i)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === evergreenIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to photo ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Google Map */}
                  <div className="rounded-2xl overflow-hidden border-2 border-sky-200 shadow-lg">
                    <iframe title="Evergreen Map" className="w-full h-80" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=2101+SW+Willow+Pkwy,+Gresham,+OR+97080&output=embed"></iframe>
                  </div>
                </div>
                
                {/* Location 2 */}
                <div className="card-white p-10 md:p-12 rounded-3xl shadow-2xl">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-start gap-4">
                      <div>
                        <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-bold uppercase tracking-wider mb-3">Location 2</div>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">21st Drive Home</h3>
                        <p className="text-slate-600 mt-2 flex items-start gap-2">
                          <svg className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243" />
                          </svg>
                          <span className="text-slate-700">3894 SE 21st Drive, Gresham, OR 97080</span>
                        </p>
                      </div>
                    </div>
                    <div className="icon-badge !w-16 !h-16 flex-shrink-0">
                      <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">Close to Fred Meyer, Safeway, WinCo, medical centers, urgent care clinics, pharmacies, and movie theaters—offering comfort, convenience, and access to essential services.</p>
                  
                  {/* Slideshow with Hover Controls */}
                  <div className="relative mb-6 group">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-sky-200 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 min-h-[500px] max-h-[700px]">
                      <img 
                        src={willowImages[willowIndex]} 
                        alt={`21st Drive Home`} 
                        className="w-full h-auto max-h-[700px] object-contain transition-opacity duration-700" 
                      />
                    </div>
                    
                    {/* Navigation Arrows - Visible on Hover */}
                    <button
                      onClick={prevWillow}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-sky-700 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                      aria-label="Previous photo"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextWillow}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-sky-700 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                      aria-label="Next photo"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <div className="absolute top-4 right-4 bg-sky-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {willowIndex + 1} / {willowImages.length}
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {willowImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setWillowIndex(i)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === willowIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to photo ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Google Map */}
                  <div className="rounded-2xl overflow-hidden border-2 border-sky-200 shadow-lg">
                    <iframe title="Willow Map" className="w-full h-80" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=3894+SE+21st+Drive,+Gresham,+OR+97080&output=embed"></iframe>
                  </div>
                </div>

              </div>

              <div className="glass-card rounded-3xl p-10 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Comprehensive Care for Diverse Needs</h3>
                <p className="text-slate-600 text-lg leading-relaxed max-w-4xl mx-auto">
                  We support residents with a wide range of physical, developmental, and mental health needs, including intellectual disabilities, mobility limitations, Alzheimer’s, dementia, PTSD, and other complex conditions. Our priority is the safety, well-being, and happiness of each resident—24 hours a day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <div ref={reviewsRef} className="reveal">
          <GoogleReviews />
        </div>

        {/* Contact Us Section */}
        <section ref={contactRef} id="contact" className="section-padding bg-white reveal">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200 shadow-lg mb-3 mx-auto">
                  <svg className="w-8 h-8 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500 bg-clip-text text-transparent">Contact Us</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                Get in touch with our team. We're here to help and answer any questions.
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-sky-50 p-6 rounded-xl border border-sky-200">
                  <h3 className="text-xl font-semibold text-sky-800 mb-2">Fast Contact</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">Share a few details and our team will respond promptly—usually within the same business day.</p>
                  <div className="mt-4 text-sm space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243" /></svg>
                      <p className="text-slate-600">Address:<br /><span className="text-slate-800">Gresham, OR — Two locations serving the community</span></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18" /></svg>
                      <p className="text-slate-600">For general inquiries use the form. For urgent matters, start your message with "URGENT".</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-sky-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v7h6v-7c0-1.657-1.343-3-3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21h14" /></svg>
                      <p className="text-slate-600">All messages are monitored securely—your information is confidential.</p>
                    </div>
                  </div>
                  <a href="#reviews" className="inline-block mt-6 text-sky-700 hover:text-sky-600 text-sm underline decoration-sky-600/40">See client feedback →</a>
                </div>
                <div className="bg-sky-50 p-6 rounded-xl border border-sky-200">
                  <h3 className="text-lg font-semibold text-sky-800 mb-2">Why choose Family Home LLC?</h3>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li className="flex items-start gap-2"><span className="text-sky-600">•</span> Compassionate 24-hour support</li>
                    <li className="flex items-start gap-2"><span className="text-sky-600">•</span> Person-centered care plans</li>
                    <li className="flex items-start gap-2"><span className="text-sky-600">•</span> Safe, welcoming home environments</li>
                  </ul>
                </div>
              </div>
              <div className="max-w-lg mx-auto w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section - Enhanced */}
        {/* Our Team Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-white reveal">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-100 to-sky-200 shadow-xl mb-4 mx-auto">
                  <svg className="w-10 h-10 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500 bg-clip-text text-transparent">Our Team</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Experienced, compassionate professionals dedicated to exceptional care every day.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Executive Director */}
              <div className="card-white p-10 md:p-12 rounded-3xl shadow-xl group hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="icon-badge !w-16 !h-16 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">Leadership</div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Executive Director</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Over 10 years of diverse caregiving experience, including roles as a caregiver, Adult Foster Home provider, and now Executive Director. With a bachelor's degree and a strong commitment to serving individuals with physical, developmental, and mental health needs, he leads with compassion, integrity, and dedication.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>10+ Years Experience</span>
                  </div>
                </div>
              </div>

              {/* Care Team */}
              <div className="card-white p-10 md:p-12 rounded-3xl shadow-xl group hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="icon-badge !w-16 !h-16 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">Caregivers</div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Care Team</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Family Home LLC is staffed with trained, compassionate caregivers who prioritize the safety and well-being of every resident. Our team brings expertise, empathy, and dedication to every interaction, creating a warm and supportive environment.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>24/7 Dedicated Care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Floating Contact Button */}
      <a
        href="#contact"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-6 py-4 rounded-full shadow-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-sky-500/50 flex items-center gap-2 z-50"
        aria-label="Quick contact shortcut"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Contact Us</span>
      </a>
    </div>
  );
};

export default MainPage;
