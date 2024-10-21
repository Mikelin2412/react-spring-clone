import React from 'react';
import styles from './cardsContainer.module.css';
import { TablesInfo } from '../../constants/constants';
import Card from '../card/Card';

const CardsContainer = () => {
  return (
    <div className={styles.cardsContainer}>
      {TablesInfo.map((cardInfo) => (
        <Card
          title={cardInfo.title}
          imageSrc={cardInfo.imageSrc}
          description={cardInfo.description}
          cardUrl={cardInfo.cardUrl}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
