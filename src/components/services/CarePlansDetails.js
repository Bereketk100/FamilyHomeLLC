import React, { useEffect } from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const CarePlansDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'Individualized Care Plans';
  const description = 'Personalized plans that integrate physical, emotional, and social needs — reviewed regularly with families and providers.';
  const features = [
    'Assessment-driven personalized planning',
    'Goals across physical, emotional, social domains',
    'Family and provider collaboration',
    'Regular reviews and updates',
    'Outcome tracking and communication',
  ];
  const image = '/photo9.png';

  return <ServiceDetailsLayout title={title} description={description} features={features} image={image} />;
};

export default CarePlansDetails;
