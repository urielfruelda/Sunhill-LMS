import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Create a root container and render the App component
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
