import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage.jsx';
import { Provider } from 'react-redux';
import configureStore from './store/store.js';

const store = configureStore();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HomePage />
    </Provider>
  </StrictMode>,
);
