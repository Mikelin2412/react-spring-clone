import React from 'react';
import styles from './card.module.css';
import CardInfoBlock from './card-info-block/CardInfoBlock';

const Card = ({ title, imageSrc, description, cardUrl }) => {
  return (
    <a className={styles.card} href={cardUrl}>
      <div className={styles.cardBody}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={imageSrc} alt={title} />
        </div>
        <CardInfoBlock title={title} description={description} />
      </div>
    </a>
  );
};

export default Card;
