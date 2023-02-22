import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import PropState from './context/Prop/PropState'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PropState>
    <App />
    </PropState>
   
  </React.StrictMode>
);

