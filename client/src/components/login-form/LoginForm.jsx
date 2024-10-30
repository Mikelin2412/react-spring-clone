import React, { useEffect, useState } from 'react';
import styles from './loginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from '../../store/auth/authActions';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../routes/routes';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isAuth, message } = useSelector((state) => state.authorization);
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
      <label className={styles.labelText}>Password:</label>
      <input
        className={styles.input}
        type="password"
        placeholder="Your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.button} type="submit" onClick={handleClick}>
        Login
      </button>
      {message ? (
        <span className={styles.warningMessage}>{message}</span>
      ) : null}
    </form>
  );
};

export default Form;
