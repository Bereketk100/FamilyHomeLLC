import React, { useEffect } from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const CommunityDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'Community Integration';
  const description = 'Meaningful outings, shopping trips, social activities, and recreation — fostering connection, purpose, and joy.';
  const features = [
    'Outings and local activities',
    'Shopping trips and errands',
    'Walks and outdoor recreation',
    'Social engagement and events',
    'Transportation and support coordination',
  ];
  const image = '/photo10.png';

  return <ServiceDetailsLayout title={title} description={description} features={features} image={image} />;
};

export default CommunityDetails;
