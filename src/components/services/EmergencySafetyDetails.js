import React, { useEffect } from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const EmergencySafetyDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'Emergency & Safety Support';
  const description = '24/7 supervision, fall prevention strategies, safety protocols, and immediate response coordination when needed.';
  const features = [
    'Round-the-clock supervision',
    'Fall prevention and safety checks',
    'Emergency response coordination',
    'Clear protocols and documentation',
    'Proactive risk identification',
  ];
  const image = '/familyhome-care-7.jpg';

  return <ServiceDetailsLayout title={title} description={description} features={features} image={image} />;
};

export default EmergencySafetyDetails;
