import React, { useState } from 'react';
import styles from './sideMenu.module.css';
import SideMenuItem from './side-menu-item/SideMenuItem';
import { NavigationMenuItems } from '../../constants/constants';
import classNames from 'classnames';

const SideMenu = ({ isOpen }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const handleMenuOpening = (index) => {
    setOpenItemId(index === openItemId ? null : index);
  };

  return (
    <div
      className={classNames(styles.sideMenu, {
        [styles.active]: isOpen,
      })}
    >
      <div className={styles.itemsContainer}>
        {NavigationMenuItems.map((item, index) => (
          <SideMenuItem
            key={item.title}
            title={item.title}
            items={item.items}
            isOpen={openItemId === index}
            handleClick={() => handleMenuOpening(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
