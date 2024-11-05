import React, { useEffect, useState } from 'react';
import styles from './loginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from '../../store/auth/authActions';
import { Link, useNavigate } from 'react-router-dom';
import { HOME_ROUTE, SIGN_UP_ROUTE } from '../../routes/routes';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isAuth, validationErrors, errorMessage } = useSelector(
    (state) => state.authorization,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(HOME_ROUTE);
    }
  }, [isAuth]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(authUser(username, password));
  };

  return (
    <form className={styles.form}>
      <h3 className={styles.title}>Authorization</h3>
      <label className={styles.labelText}>Username:</label>
      <input
        className={styles.input}
        type="text"
        placeholder="Your username"
        onChange={(e) => setUsername(e.target.value)}
      />
      {validationErrors?.username
        ? validationErrors.username.map((error) => (
            <span className={styles.warningMessage} key={error}>
              {error}
            </span>
          ))
        : null}
      <label className={styles.labelText}>Password:</label>
      <input
        className={styles.input}
        type="password"
        placeholder="Your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {validationErrors?.password
        ? validationErrors.password.map((error) => (
            <span className={styles.warningMessage} key={error}>
              {error}
            </span>
          ))
        : null}
      {errorMessage ? (
        <span className={styles.warningMessage}>{errorMessage}</span>
      ) : null}
      <button className={styles.button} type="submit" onClick={handleClick}>
        Login
      </button>
      <Link className={styles.redirectToSignIn} to={SIGN_UP_ROUTE}>
        <span>Don&apos;t have an account?</span>
      </Link>
    </form>
  );
};

export default LoginForm;
