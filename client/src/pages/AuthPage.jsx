import React from 'react';
import LoginForm from '../components/login-form/LoginForm';
import styles from '../styles/authPage.module.css';

const AuthPage = () => {
  return (
    <main>
      <div className={styles.formWrapper}>
        <LoginForm />
      </div>
    </main>
  );
};

export default AuthPage;
