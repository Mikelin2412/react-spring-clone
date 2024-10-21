import React from 'react';
import SideDropdownItem from '../side-dropdown-item/SideDropdownItem';
import styles from './sideDropdownMenu.module.css';

const SideDropdownMenu = ({ data }) => {
  return (
    <ul className={styles.dropdownList}>
      {data.map((item) => (
        <SideDropdownItem key={item.name} name={item.name} link={item.link} />
      ))}
    </ul>
  );
};

export default SideDropdownMenu;
