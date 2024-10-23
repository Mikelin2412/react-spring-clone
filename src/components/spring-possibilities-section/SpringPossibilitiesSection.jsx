import React, { useState } from 'react';
import styles from './springPossibilitiesSection.module.css';
import SearchCardsInput from '../search-cards-input/SearchCardsInput';
import CardsWrapper from '../cards-wrapper/CardsWrapper';
import CardsContainer from '../cards-container/CardsContainer';
import useDebounce from '../../hooks/useDebounce';

const SpringPossibilitiesSection = () => {
  const [inputValue, setInputValue] = useState('');
  const searchSuitableCards = useDebounce(
    (e) => setInputValue(e.target.value),
    300,
  );

  return (
    <section className={styles.springPossibilitiesSection}>
      <SearchCardsInput
        type="text"
        placeholder="Search..."
        handleChange={searchSuitableCards}
      />
      <CardsWrapper>
        <CardsContainer searchInputValue={inputValue} />
      </CardsWrapper>
    </section>
  );
};

export default SpringPossibilitiesSection;
