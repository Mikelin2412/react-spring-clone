import React from 'react';
import springLogo from '../../assets/spring-framework-logo.png';
import styles from './logo.module.css';

const Logo = () => {
  return (
    <a href="/">
      <img
        className={styles.logo}
        src={springLogo}
        alt="spring-framework-logo"
      />
    </a>
  );
};

export default Logo;
