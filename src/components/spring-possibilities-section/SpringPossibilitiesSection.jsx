import React from 'react';
import styles from './springPossibilitiesSection.module.css';
import SearchCardsInput from '../search-cards-input/SearchCardsInput';
import CardsWrapper from '../cards-wrapper/CardsWrapper';
import CardsContainer from '../cards-container/CardsContainer';

const SpringPossibilitiesSection = () => {
  return (
    <section className={styles.springPossibilitiesSection}>
      <SearchCardsInput type="text" placeholder="Search..." />
      <CardsWrapper>
        <CardsContainer />
      </CardsWrapper>
    </section>
  );
};

export default SpringPossibilitiesSection;
