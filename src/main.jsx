import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '../assets/vendor/js/bootstrap.js';
import '../assets/vendor/js/helpers.js';
import '../assets/vendor/js/menu.js';
import '../assets/css/demo.css';
import '../assets/vendor/css/core.css';
import '../assets/vendor/css/pages/page-auth.css';
import '../assets/vendor/css/pages/page-icons.css';
import '../assets/vendor/css/pages/page-misc.css';
import '../assets/vendor/fonts/iconify-icons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
