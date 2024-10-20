import React from 'react';
import DropdownMenuItem from '../dropdown-menu-item/DropdownMenuItem';
import styles from './dropdownMenu.module.css';
import classNames from 'classnames';

const DropdownMenu = ({items}) => {
  return <ul className={classNames(styles.navBarDropdownMenu, styles.dropdownMenu)}>
    {
      items.map(item => <DropdownMenuItem key={item.name} data={item} />)
    }
  </ul>;
};

export default DropdownMenu;
