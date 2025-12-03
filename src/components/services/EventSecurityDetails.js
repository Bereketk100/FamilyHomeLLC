import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EventSecurityDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: "Crowd Management",
      description: "Expert crowd control and flow management for events of all sizes",
      icon: "👥"
    },
    {
      title: "Access Control",
      description: "Sophisticated entry screening and ID verification",
      icon: "🎫"
    },
    {
      title: "VIP Protection",
      description: "Specialized security for high-profile guests and areas",
      icon: "⭐"
    },
    {
      title: "Rapid Response",
      description: "Swift incident management and emergency coordination",
      icon: "⚡"
    }
  ];

  const features = [
    "Entry Screening & Access Control",
    "Professional Crowd Management",
    "VIP Protection Services",
    "Bag & ID Verification",
    "Strategic Security Patrols",
    "Emergency Response Planning",
    "Event Staff Coordination",
    "Incident Management",
    "Guest Services Support",
    "Perimeter Security",
    "CCTV Monitoring",
    "Command Center Operations",
    "Radio Communication Systems",
    "Risk Assessment & Planning"
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
          <h1 className="text-5xl font-bold mb-6">Event Security Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional event security solutions ensuring safety and seamless operations
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gray-900 p-8 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-6">Security Solutions</h3>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold mb-4">Event Protection</h2>
            <p className="text-gray-300 leading-relaxed">
              At SecureAI Private Security Services, we provide top-tier Event Security Services to keep your event safe, organized, and running smoothly. Whether it's a corporate gathering, private party, festival, or large public event, our trained security professionals ensure everything goes off without a hitch.
            </p>
            <div className="h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/secure15.jpeg" 
                alt="Event Security" 
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
          <h2 className="text-3xl font-bold mb-4">Secure Your Event Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us to learn how we can help make your event both secure and stress-free.
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

export default EventSecurityDetails;
