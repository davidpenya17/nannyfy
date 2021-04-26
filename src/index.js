import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootContainer = document.getElementById('root');

if (rootContainer) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootContainer
  );
}

reportWebVitals();
