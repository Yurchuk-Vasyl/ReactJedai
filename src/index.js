import React from 'react';

import { Provider } from 'react-redux';

import store from '@store/store';

import { ThemeProvider } from '@context/ThemeProvider';

import ReactDOM from 'react-dom/client';
import App from './containers/App/App';

import './styles/null.css';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
