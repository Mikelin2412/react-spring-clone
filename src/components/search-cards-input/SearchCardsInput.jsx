import React from 'react';
import styles from './searchCardsInput.module.css';

const SearchCardsInput = ({ type, placeholder }) => {
  return (
    <input
      className={styles.searchInput}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default SearchCardsInput;
