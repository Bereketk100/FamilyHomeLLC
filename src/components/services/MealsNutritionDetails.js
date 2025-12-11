import React, { useEffect } from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const MealsNutritionDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = 'Meal Preparation & Nutrition';
  const description = 'Wholesome, fresh meals tailored to preferences and needs, texture modifications as required, and hydration monitoring throughout the day.';
  const features = [
    'Daily fresh meals and snacks',
    'Dietary preferences and restrictions honored',
    'Texture modification (puree/soft) when needed',
    'Hydration reminders and monitoring',
    'Safe food handling and kitchen standards',
  ];
  const image = '/photo6.png';

  return <ServiceDetailsLayout title={title} description={description} features={features} image={image} />;
};

export default MealsNutritionDetails;
