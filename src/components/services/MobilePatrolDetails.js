import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MobilePatrolDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: "AI-Enhanced Tracking",
      description: "Advanced monitoring and real-time location tracking of security patrols",
      icon: "📱"
    },
    {
      title: "Smart Technology",
      description: "Integration of AI analytics and automated reporting systems",
      icon: "🤖"
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous surveillance and security presence around the clock",
      icon: "👁️"
    },
    {
      title: "Instant Reporting",
      description: "Real-time updates and incident reporting through our mobile app",
      icon: "📊"
    }
  ];

  const features = [
    "24/7 Mobile Security Patrols",
    "Strategic Patrol Route Planning",
    "Entry Point Monitoring",
    "Incident Response & Reporting",
    "Access Control Management",
    "Property Manager Portal",
    "Real-time Security Updates",
    "AI-Powered Analytics",
    "Smart Surveillance Integration",
    "Emergency Response Protocols",
    "Community Safety Coordination",
    "Security App Access",
    "Detailed Activity Logs",
    "Custom Security Solutions"
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
          <h1 className="text-5xl font-bold mb-6">Mobile Patrol Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI-enhanced mobile security solutions for comprehensive property protection
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gray-900 p-8 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-6">Key Security Features</h3>
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
            <h2 className="text-3xl font-semibold mb-4">Smart Security Solutions</h2>
            <p className="text-gray-300 leading-relaxed">
              At SecureAI, we understand that the safety of residents, tenants, and property is a top priority. Our AI-enhanced security services provide a strong, visible presence to deter crime, prevent unauthorized access, and ensure a safe living environment for all. Our trained security professionals conduct routine patrols, monitor entry points, and respond swiftly to incidents, ensuring that every aspect of your property remains secure.
            </p>
            <div className="h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/secure4.jpeg" 
                alt="Mobile Patrol Security" 
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
          <h2 className="text-3xl font-bold mb-4">Enhance Your Property Security Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Protect your community with SecureAI's modern, AI-powered security solutions. Experience the future of mobile security patrol.
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

export default MobilePatrolDetails;
