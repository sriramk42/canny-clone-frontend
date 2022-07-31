import React, { createContext, useState } from 'react';
import localData from '../data.json';

export const FeatureReqContext = createContext();

export function FeatureReqProvider({ children }) {
  const [featureReqs, setFeatureReqs] = useState(
    JSON.parse(localStorage.getItem('featureReqs')) || localData.featureRequests
  );
  console.log(featureReqs)

  const updateFeatureReqs = (featureReqs) => {
    console.log(featureReqs);
    localStorage.setItem('featureReqs', JSON.stringify(featureReqs));

    setFeatureReqs(featureReqs);
  };

  return (
    <FeatureReqContext.Provider value={[featureReqs, updateFeatureReqs]}>{children}</FeatureReqContext.Provider>
  );
}
