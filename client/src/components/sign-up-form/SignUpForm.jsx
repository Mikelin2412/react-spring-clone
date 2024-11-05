import React, { useEffect, useState } from 'react';
import styles from './signUpForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, signUpUser } from '../../store/auth/authActions';
import { Link, useNavigate } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../routes/routes';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(1);
  const { isAuth } = useSelector((state) => state.authorization);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(HOME_ROUTE);
    }
  }, [isAuth]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      signUpUser(username, password, repeatPassword, firstName, lastName, age),
    );
  };

  return (
    <form className={styles.form}>
      <h3 className={styles.title}>Sign Up</h3>
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
      <label className={styles.labelText}>Repeat password:</label>
      <input
        className={styles.input}
        type="password"
        placeholder="Repeat your password"
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <label className={styles.labelText}>First name:</label>
      <input
        className={styles.input}
        type="text"
        placeholder="Your first name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label className={styles.labelText}>Last name:</label>
      <input
        className={styles.input}
        type="text"
        placeholder="Your last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <label className={styles.labelText}>Age:</label>
      <input
        className={styles.input}
        type="number"
        placeholder="Your age"
        min={1}
        onChange={(e) => setAge(e.target.value)}
      />
      <button className={styles.button} type="submit" onClick={handleClick}>
        Sign Up
      </button>
      <Link className={styles.redirectToLogin} to={LOGIN_ROUTE}>
        <span>Have an account?</span>
      </Link>
    </form>
  );
};

export default SignUpForm;
