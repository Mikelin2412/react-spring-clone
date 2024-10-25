import React, { useState } from 'react';
import styles from './loginForm.module.css';
import { useDispatch } from 'react-redux';
import { authorizeUser, unauthorizeUser } from '../../store/auth/authActions';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../routes/routes';
import { KEYS } from '../../constants/constants';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasAccess, setHasAccess] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (username === KEYS.username && password === KEYS.password) {
      dispatch(authorizeUser(true));
      navigate(HOME_ROUTE);
    } else {
      setHasAccess(false);
      dispatch(unauthorizeUser(false));
    }
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
      {!hasAccess ? (
        <span className={styles.warningMessage}>You don't have access!</span>
      ) : null}
    </form>
  );
};

export default Form;
