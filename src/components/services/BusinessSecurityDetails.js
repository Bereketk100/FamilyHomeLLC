import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessSecurityDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: "AI-Powered Protection",
      description: "Advanced threat detection and monitoring using cutting-edge AI technology",
      icon: "🤖"
    },
    {
      title: "24/7 Surveillance",
      description: "Round-the-clock monitoring and security patrols for continuous protection",
      icon: "👁️"
    },
    {
      title: "Access Control",
      description: "Sophisticated access management systems for enhanced security",
      icon: "🔐"
    },
    {
      title: "Real-time Reporting",
      description: "Comprehensive security reports and instant incident notifications",
      icon: "📊"
    }
  ];

  const services = [
    "Corporate Office Security",
    "Retail Store Protection",
    "Warehouse Security",
    "Industrial Facility Safeguarding",
    "Access Control Management",
    "Real-time Surveillance Monitoring",
    "Routine Security Patrols",
    "Emergency Response Protocols",
    "Fire Watch Services",
    "Asset Protection",
    "Personnel Security",
    "Threat Assessment & Prevention",
    "Security System Integration",
    "Custom Security Planning"
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
          <h1 className="text-5xl font-bold mb-6">Business Security Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI-driven security solutions for businesses of all sizes
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gray-900 p-8 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-6">Our Security Solutions</h3>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold mb-4">Comprehensive Business Protection</h2>
            <p className="text-gray-300 leading-relaxed">
              At SecureAI, we specialize in providing cutting-edge security solutions tailored to protect businesses of all sizes. Our AI-driven security approach, combined with highly trained security professionals, ensures round-the-clock protection for your property, assets, and personnel.
            </p>
            <div className="h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/secure2.jpeg" 
                alt="Business Security" 
                className="w-full h-full object-cover object-center object-top"
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
          <h2 className="text-3xl font-bold mb-4">Secure Your Business Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with SecureAI and experience a new standard in business security—where innovation meets reliability.
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

export default BusinessSecurityDetails;
