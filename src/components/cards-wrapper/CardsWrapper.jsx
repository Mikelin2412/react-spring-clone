import React from 'react';
import styles from './cardsWrapper.module.css';

const CardsWrapper = ({ children }) => {
  return <div className={styles.cardsWrapper}>{children}</div>;
};

export default CardsWrapper;
