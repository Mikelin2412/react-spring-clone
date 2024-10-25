import React from 'react';
import styles from './loginForm.module.css';

const Form = () => {
  return (
    <form className={styles.form}>
      <h3 className={styles.title}>Authorization</h3>
      <label className={styles.labelText}>Login:</label>
      <input className={styles.input} type="text" placeholder="Your login" />
      <label className={styles.labelText}>Password:</label>
      <input
        className={styles.input}
        type="password"
        placeholder="Your password"
      />
      <button className={styles.button} type="submit">Login</button>
    </form>
  );
};

export default Form;
