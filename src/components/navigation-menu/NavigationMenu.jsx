import React from 'react';
import NavigationMenuItem from './navigation-menu-item/NavigationMenuItem';
import { NavigationMenuItems } from '../../constants/constants';
import styles from './navigationMenu.module.css';

const NavigationMenu = () => {
  return (
    <div className={styles.navigationMenu}>
      {NavigationMenuItems.map((item) => (
        <NavigationMenuItem
          key={item.title}
          title={item.title}
          items={item.items}
        />
      ))}
    </div>
  );
};

export default NavigationMenu;
