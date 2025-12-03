import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const items = [
    { path: '/services/personal-care', title: '24-Hour Personal Care', desc: 'Bathing, grooming, dressing, hygiene, mobility and transfers.' },
    { path: '/services/health-wellness', title: 'Health & Wellness Support', desc: 'Medication assistance, monitoring, coordination, and transportation.' },
    { path: '/services/behavioral-emotional', title: 'Behavioral & Emotional Support', desc: 'Patience-based communication, redirection, positive strategies.' },
    { path: '/services/meals-nutrition', title: 'Meal Preparation & Nutrition', desc: 'Fresh meals, texture modification, hydration monitoring.' },
    { path: '/services/household', title: 'Household Services', desc: 'Laundry, housekeeping, clean and organized environment.' },
    { path: '/services/community', title: 'Community Integration', desc: 'Outings, shopping trips, social activities, walks and recreation.' },
    { path: '/services/emergency-safety', title: 'Emergency & Safety Support', desc: '24/7 supervision, fall prevention, safety protocols.' },
    { path: '/services/care-plans', title: 'Individualized Care Plans', desc: 'Personalized plans for physical, emotional, social needs.' },
  ];
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight headline-sky">Our Services</h2>
        <p className="mt-3 text-slate-600">Compassionate, person-centered support tailored to each resident.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(item => (
          <Link key={item.path} to={item.path} className="transform transition-transform hover:scale-105">
            <div className="card-white p-8 rounded-2xl hover:border-sky-400 transition">
              <h3 className="text-xl font-semibold text-sky-900 mb-2">{item.title}</h3>
              <p className="text-slate-700">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
