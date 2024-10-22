import React, { useState, useEffect } from 'react';
import styles from './cardsContainer.module.css';
import { TablesInfo } from '../../constants/constants';
import Card from '../card/Card';

const CardsContainer = ({ searchInputValue }) => {
  const [suitableCards, setSuitableCards] = useState(TablesInfo);

  useEffect(() => {
    setSuitableCards(
      TablesInfo.filter((item) =>
        item.title.toLowerCase().includes(searchInputValue.toLowerCase()),
      ),
    );
  }, [searchInputValue]);

  return (
    <div className={styles.cardsContainer}>
      {!suitableCards.length ? (
        <h2 className={styles.noResultText}>No results</h2>
      ) : (
        suitableCards.map((cardInfo) => (
          <Card
            key={cardInfo.title}
            title={cardInfo.title}
            imageSrc={cardInfo.imageSrc}
            description={cardInfo.description}
            cardUrl={cardInfo.cardUrl}
          />
        ))
      )}
    </div>
  );
};

export default CardsContainer;
