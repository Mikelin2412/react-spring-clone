import React from 'react';
import styles from './navigationItem.module.css';
import DropdownMenu from '../dropdown-menu/DropdownMenu';

const NavigationMenuItem = ({ title, items }) => {
  return <div className={styles.navigationMenuItem}>
    <span className={styles.navigationMenuItemTitle}>{title}</span>
    <DropdownMenu items={items} />
  </div>;
};

export default NavigationMenuItem;
