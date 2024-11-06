import React from 'react';
import LoginForm from '../components/login-form/LoginForm';
import styles from '../styles/authPage.module.css';
import SignUpForm from '../components/sign-up-form/SignUpForm';
import { useLocation } from 'react-router-dom';
import { SIGN_UP_ROUTE } from '../routes/routes';

const AuthPage = () => {
  const location = useLocation();

  return (
    <main>
      <div className={styles.formWrapper}>
        {location.pathname === SIGN_UP_ROUTE ? <SignUpForm /> : <LoginForm />}
      </div>
    </main>
  );
};

export default AuthPage;
