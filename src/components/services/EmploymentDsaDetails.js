import React, { useEffect } from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const EmploymentDsaDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'Employment & DSA Programs';
  const description = 'Support residents in accessing employment and DSA programs, coordinating with case managers, job coaches, and DSA providers to help residents find and maintain work while progressing toward their individual goals.';
  const features = [
    'Coordination with case managers, job coaches, and DSA providers',
    'Job readiness support, scheduling, and interview logistics',
    'Transportation and reminders for employment and DSA programs',
    'On-the-job check-ins and progress updates for families and teams',
    'Workplace skills practice: time management, communication, routines',
  ];
  const image = '/photo5.png';

  return <ServiceDetailsLayout title={title} description={description} features={features} image={image} />;
};

export default EmploymentDsaDetails;
