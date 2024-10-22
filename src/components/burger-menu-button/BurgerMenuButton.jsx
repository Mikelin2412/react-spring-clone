import React from 'react';
import styles from './burgerMenuButton.module.css';
import classNames from 'classnames';

const BurgerMenuButton = ({ isOpen, handleClick }) => {
  const buttonClassName = classNames(styles.burgerMenuButton, {
    [styles.active]: isOpen,
  });

  return (
    <div
      className={buttonClassName}
      onClick={() => handleClick(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerMenuButton;
