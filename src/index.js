import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { configureStore } from './store/index';
import reportWebVitals from './reportWebVitals';

const store = configureStore();
console.log('Store >>>> ', store);
console.log('Current State >>>> ', store.getState()); // JSON with posts as array

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
