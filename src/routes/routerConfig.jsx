import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import AuthPage from '../pages/AuthPage.jsx';
import { HOME_ROUTE, LOGIN_ROUTE } from './routes.js';
import Layout from '../layout.jsx';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,

    children: [
      {
        path: HOME_ROUTE,
        element: <HomePage />,
      },
      {
        path: LOGIN_ROUTE,
        element: <AuthPage />,
      },
    ],
  },
]);
