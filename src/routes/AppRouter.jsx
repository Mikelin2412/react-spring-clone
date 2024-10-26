import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { AUTH_ROUTES, LOGIN_ROUTE, PUBLIC_ROUTES } from './routes';
import Layout from '../layout';

const AppRouter = () => {
  const isAuth = useSelector((state) => state.authorization);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(LOGIN_ROUTE);
    }
  }, [isAuth]);

  return (
    <Routes>
      <Route path="" element={<Layout />}>
        {isAuth &&
          AUTH_ROUTES.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        {PUBLIC_ROUTES.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;

// import { createBrowserRouter } from 'react-router-dom';
// import HomePage from '../pages/HomePage.jsx';
// import AuthPage from '../pages/AuthPage.jsx';
// import { HOME_ROUTE, LOGIN_ROUTE } from './routes.js';
// import Layout from '../layout.jsx';

// export const router = createBrowserRouter([
//   {
//     path: '',
//     element: <Layout />,

//     children: [
//       {
//         path: HOME_ROUTE,
//         element: <HomePage />,
//       },
//       {
//         path: LOGIN_ROUTE,
//         element: <AuthPage />,
//       },
//     ],
//   },
// ]);
