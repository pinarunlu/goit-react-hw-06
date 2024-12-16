import React from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom' yerine 'react-dom/client' kullanın
import App from './App';
import './index.css';

// React 18 ile 'createRoot' kullanımı
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
