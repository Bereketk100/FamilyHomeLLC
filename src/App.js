import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalCareDetails from './components/services/PersonalCareDetails';
import HealthWellnessDetails from './components/services/HealthWellnessDetails';
import BehavioralEmotionalDetails from './components/services/BehavioralEmotionalDetails';
import MealsNutritionDetails from './components/services/MealsNutritionDetails';
import HouseholdDetails from './components/services/HouseholdDetails';
import EmploymentDsaDetails from './components/services/EmploymentDsaDetails';
import CommunityDetails from './components/services/CommunityDetails';
import EmergencySafetyDetails from './components/services/EmergencySafetyDetails';
import CarePlansDetails from './components/services/CarePlansDetails';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services/personal-care" element={<PersonalCareDetails />} />
        <Route path="/services/health-wellness" element={<HealthWellnessDetails />} />
        <Route path="/services/behavioral-emotional" element={<BehavioralEmotionalDetails />} />
        <Route path="/services/meals-nutrition" element={<MealsNutritionDetails />} />
        <Route path="/services/household" element={<HouseholdDetails />} />
        <Route path="/services/employment-dsa" element={<EmploymentDsaDetails />} />
        <Route path="/services/community" element={<CommunityDetails />} />
        <Route path="/services/emergency-safety" element={<EmergencySafetyDetails />} />
        <Route path="/services/care-plans" element={<CarePlansDetails />} />
      </Routes>
    </Router>
  );
};

export default App;