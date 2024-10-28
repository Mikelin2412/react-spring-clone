import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';

export const HOME_ROUTE = '/';
export const LOGIN_ROUTE = '/login';

export const PUBLIC_ROUTES = [
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
  },
];

export const AUTH_ROUTES = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
];