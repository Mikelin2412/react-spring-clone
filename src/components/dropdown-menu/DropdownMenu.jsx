import React from 'react';
import DropdownMenuItem from '../dropdown-menu-item/DropdownMenuItem';
import styles from './dropdownMenu.module.css';
import classNames from 'classnames';

const DropdownMenu = ({ isHovered, items }) => {
  const dropdownClasses = classNames(
    styles.navBarDropdownMenu,
    styles.dropdownMenu,
    {
      [styles.open]: isHovered,
    },
  );

  return (
    <ul className={dropdownClasses}>
      {items.map((item) => (
        <DropdownMenuItem key={item.name} data={item} />
      ))}
    </ul>
  );
};

export default DropdownMenu;
