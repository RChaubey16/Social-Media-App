import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import { configureStore } from './store/index';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

// calling the store from the store/index file
const store = configureStore();
console.log('Store >>>> ', store);
console.log('Current State >>>> ', store.getState()); // JSON with posts as array

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
