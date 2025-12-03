import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FirewatchDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: "24/7 Vigilant Patrols",
      description: "Round-the-clock monitoring and inspection of premises for potential fire hazards",
      icon: "🔍"
    },
    {
      title: "Real-time Reporting",
      description: "Detailed patrol logs and incident reports with immediate updates to management",
      icon: "📊"
    },
    {
      title: "Emergency Response",
      description: "Rapid response protocols and immediate coordination with emergency services",
      icon: "🚨"
    },
    {
      title: "Regulatory Compliance",
      description: "Strict adherence to local fire safety regulations and standards",
      icon: "✓"
    }
  ];

  const situations = [
    "Fire alarm systems are down or under maintenance",
    "Sprinkler systems are inactive or being serviced",
    "During construction or renovation projects",
    "High-risk periods requiring extra vigilance",
    "System failures requiring temporary coverage",
    "Long-term fire prevention needs",
    "Special events with large gatherings",
    "During hot work operations (welding, cutting, etc.)",
    "When backup systems are being tested",
    "During power outages affecting safety systems",
    "Temporary shutdown of automatic fire detection",
    "Post-incident monitoring and protection",
    "During facility system upgrades",
    "When conducting fire safety assessments"
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-12">
        <button 
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-blue-500 hover:text-blue-400"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Firewatch Security Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional fire prevention and monitoring services to protect your property 24/7
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gray-900 p-8 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-6">When You Need Us</h3>
              <div className="grid grid-cols-1 gap-4">
                {situations.map((situation, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{situation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold mb-4">Comprehensive Protection</h2>
            <p className="text-gray-300 leading-relaxed">
              At SecureAI Private Security Services, we provide professional Firewatch Security Services to safeguard businesses, construction sites, and properties from fire hazards. Our highly trained personnel ensure your property remains protected through vigilant monitoring and rapid response capabilities.
            </p>
            <div className="h-[500px] overflow-hidden rounded-lg shadow-xl"> {/* Increased height */}
              <img 
                src="/secure3.jpeg" 
                alt="Firewatch Security" 
                className="w-full h-full object-cover object-center object-top" /* Added object-top */
              />
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ensure Your Property's Safety Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us to learn how our Firewatch Security Services can protect your property and ensure compliance with fire safety standards.
          </p>
          <button 
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }} 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirewatchDetails;
