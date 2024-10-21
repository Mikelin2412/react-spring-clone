import React, { useState } from 'react';
import styles from './navigationItem.module.css';
import DropdownMenu from '../dropdown-menu/DropdownMenu';

const NavigationMenuItem = ({ title, items }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.navBarItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={styles.navigationMenuItemTitle}>{title}</span>
      <DropdownMenu isHovered={isHovered} items={items} />
    </div>
  );
};

export default NavigationMenuItem;
