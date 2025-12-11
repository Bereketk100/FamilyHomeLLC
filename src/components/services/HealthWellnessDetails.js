import React, { useEffect } from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const HealthWellnessDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'Health & Wellness Support';
  const description = 'Medication reminders and assistance, wellness monitoring, care coordination, and transportation to appointments — supporting total health.';
  const features = [
    'Medication assistance and reminders',
    'Vitals and wellness monitoring',
    'Care coordination with providers',
    'Appointment scheduling and transportation',
    'Health records and communication support',
  ];
  const image = '/photo3.png';

  return <ServiceDetailsLayout title={title} description={description} features={features} image={image} />;
};

export default HealthWellnessDetails;
