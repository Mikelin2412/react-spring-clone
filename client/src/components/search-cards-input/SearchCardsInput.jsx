import React from 'react';
import styles from './searchCardsInput.module.css';

const SearchCardsInput = ({ type, placeholder, handleChange }) => {
  return (
    <input
      className={styles.searchInput}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchCardsInput;
