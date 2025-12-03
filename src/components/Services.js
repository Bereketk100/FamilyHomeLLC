import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/firewatch" className="transform transition-transform hover:scale-105">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Firewatch</h3>
            <p className="text-gray-700">Professional firewatch services to ensure safety and compliance.</p>
          </div>
        </Link>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Service 1</h3>
          <p className="text-gray-700">Description of Service 1.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Service 2</h3>
          <p className="text-gray-700">Description of Service 2.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Service 3</h3>
          <p className="text-gray-700">Description of Service 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
