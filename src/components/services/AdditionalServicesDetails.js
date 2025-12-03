import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdditionalServicesDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: "Real-time Tracking",
      description: "Monitor guard locations and receive instant alerts for out-of-zone activities",
      icon: "📍"
    },
    {
      title: "NFC Verification",
      description: "Checkpoint scanning system for verifiable patrol logging",
      icon: "✓"
    },
    {
      title: "Team Management",
      description: "Comprehensive CRM for scheduling and employee oversight",
      icon: "👥"
    },
    {
      title: "Custom Branding",
      description: "White-label solution with your company's branding",
      icon: "🎨"
    }
  ];

  const features = [
    "Real-time Guard Location Tracking",
    "Automated Patrol Verification",
    "Instant Alert System",
    "NFC Checkpoint Scanning",
    "Employee Scheduling",
    "Incident Reporting & Tracking",
    "Performance Analytics",
    "Team Management Tools",
    "Customizable Dashboards",
    "White-label Branding Options",
    "Mobile App Access",
    "Automated Compliance Reports",
    "Zone Management",
    "Command Center Interface"
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
          <h1 className="text-5xl font-bold mb-6">SecureAI Platform</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary security management software for complete control and visibility
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gray-900 p-8 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-6">Platform Features</h3>
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
            <h2 className="text-3xl font-semibold mb-4">Complete Control & Visibility</h2>
            <p className="text-gray-300 leading-relaxed">
              SecureAI revolutionizes security management by combining cutting-edge technology with real-world insights. Our platform provides total control over your security operations, ensuring every patrol is completed on time and your entire workforce is managed efficiently from one seamless interface.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg shadow-xl bg-gray-900 p-2 h-[600px]">
                <img 
                  src="/secure10.png" 
                  alt="SecureAI Platform Interface" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="rounded-lg shadow-xl bg-gray-900 p-2 h-[600px]">
                <img 
                  src="/secure9.png" 
                  alt="SecureAI Platform Features" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Key Platform Benefits</h2>
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
          <h2 className="text-3xl font-bold mb-4">Transform Your Security Operations</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to take your security management to the next level? Contact us to learn more about the SecureAI platform.
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

export default AdditionalServicesDetails;
