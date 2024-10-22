import React from 'react';
import styles from './cardInfoBlock.module.css';

const CardInfoBlock = ({ title, description }) => {
  return (
    <div className={styles.infoBlock}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default CardInfoBlock;
