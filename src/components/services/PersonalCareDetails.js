import React, { useEffect } from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const PersonalCareDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = '24-Hour Personal Care';
  const description = 'Compassionate, continuous support with bathing, grooming, dressing, hygiene, mobility and safe transfers — tailored to each resident\'s needs.';
  const features = [
    'Bathing, grooming, dressing, and hygiene assistance',
    'Mobility support and safe transfers',
    'Toileting and continence care',
    'Night supervision and on-call support',
    'Dignity-first, resident-centered approach',
  ];
  const image = '/familyhome-care-1.jpg';

  return <ServiceDetailsLayout title={title} description={description} features={features} image={image} />;
};

export default PersonalCareDetails;
