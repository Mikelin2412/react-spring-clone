import React, { useEffect } from 'react';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkAuth } from './store/auth/authActions.js';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
