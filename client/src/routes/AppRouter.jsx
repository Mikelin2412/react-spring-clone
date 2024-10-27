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
