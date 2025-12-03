import React, { useEffect } from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const BehavioralEmotionalDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'Behavioral & Emotional Support';
  const description = 'Patient, consistent communication and redirection with positive behavioral strategies to promote calm, dignity, and trust.';
  const features = [
    'Calm, respectful communication',
    'Redirection and de-escalation strategies',
    'Routine-building and positive reinforcement',
    'Personalized coping approaches',
    'Family collaboration and progress updates',
  ];
  const image = '/familyhome-care-3.jpg';

  return <ServiceDetailsLayout title={title} description={description} features={features} image={image} />;
};

export default BehavioralEmotionalDetails;
