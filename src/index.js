import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './container/App';
import 'tw-elements';
import './i18next';
import * as registerServiceWorker from './registerServiceWorker';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// reportWebVitals();
registerServiceWorker.unregister();
