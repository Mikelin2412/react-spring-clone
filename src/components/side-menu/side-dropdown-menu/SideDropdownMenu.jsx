import React from 'react';
import SideDropdownItem from '../side-dropdown-item/SideDropdownItem';
import styles from './sideDropdownMenu.module.css';
import classNames from 'classnames';

const SideDropdownMenu = ({ data, isOpen }) => {
  const dropdownListClassName = classNames(styles.dropdownList, {
    [styles.active]: isOpen,
  });

  return (
    <ul className={dropdownListClassName}>
      {data.map((item) => (
        <SideDropdownItem key={item.name} name={item.name} link={item.link} />
      ))}
    </ul>
  );
};

export default SideDropdownMenu;
