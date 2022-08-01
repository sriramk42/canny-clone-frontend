import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FeatureReqProvider } from './context/FeatureReqContext';
import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <FeatureReqProvider>
        <App />
      </FeatureReqProvider>
    </UserProvider>
  </React.StrictMode>
);