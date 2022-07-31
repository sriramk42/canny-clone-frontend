import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FeatureReqProvider } from './context/FeatureReqContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FeatureReqProvider>
      <App />
    </FeatureReqProvider>
  </React.StrictMode>
);