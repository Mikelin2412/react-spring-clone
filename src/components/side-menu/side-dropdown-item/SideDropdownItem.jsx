import React from 'react';
import styles from './sideDropdownItem.module.css';

const SideDropdownItem = ({ name, link }) => {
  return (
    <li>
      <a className={styles.itemLink} href={link}>
        {name}
      </a>
    </li>
  );
};

export default SideDropdownItem;
