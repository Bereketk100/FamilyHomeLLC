import React, { useEffect } from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const HouseholdDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'Household Services';
  const description = 'Warm, tidy home environment with laundry, housekeeping, and daily organization — supporting comfort and peace of mind.';
  const features = [
    'Laundry and linen care',
    'Routine housekeeping and tidying',
    'Room organization and safety checks',
    'Clean, calm environment standards',
    'Supplies management and restocking',
  ];
  const image = '/familyhome-care-5.jpg';

  return <ServiceDetailsLayout title={title} description={description} features={features} image={image} />;
};

export default HouseholdDetails;
