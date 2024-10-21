import React from 'react';
import styles from './sideMenu.module.css';
import SideMenuItem from './side-menu-item/SideMenuItem';
import { NavigationMenuItems } from '../../constants/constants';

const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.itemsContainer}>
        {NavigationMenuItems.map((item) => (
          <SideMenuItem
            key={item.title}
            title={item.title}
            items={item.items}
          />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
