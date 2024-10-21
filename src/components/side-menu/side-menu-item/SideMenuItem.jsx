import React from 'react';
import SideDropdownMenu from '../side-dropdown-menu/SideDropdownMenu';
import styles from './sideMenuItem.module.css';

const SideMenuItem = ({ title, items }) => {
  return <div className={styles.itemBody}>
    <span className={styles.title}>{title}</span>
    <SideDropdownMenu data={items} />
  </div>;
};

export default SideMenuItem;
