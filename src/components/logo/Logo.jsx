import React from 'react';
import styles from './logo.module.css';

const Logo = () => {
  return (
    <a href="/">
      <img
        className={styles.logo}
        src="/src/assets/spring-framework-logo.png"
        alt="spring-framework-logo"
      />
    </a>
  );
};

export default Logo;
