import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store/store.js';
import AppRouter from './routes/AppRouter.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const store = configureStore();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>,
);
