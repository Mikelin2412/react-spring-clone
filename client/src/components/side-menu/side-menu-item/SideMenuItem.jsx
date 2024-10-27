import React from 'react';
import SideDropdownMenu from '../side-dropdown-menu/SideDropdownMenu';
import styles from './sideMenuItem.module.css';
import classNames from 'classnames';

const SideMenuItem = ({ title, items, handleClick, isOpen }) => {
  return (
    <div className={styles.itemBody}>
      <span
        className={classNames(styles.title, { [styles.open]: isOpen })}
        onClick={handleClick}
      >
        {title}
      </span>
      <SideDropdownMenu data={items} isOpen={isOpen} />
    </div>
  );
};

export default SideMenuItem;
