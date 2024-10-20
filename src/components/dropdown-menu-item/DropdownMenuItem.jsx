import React from 'react';
import styles from './dropdownMenuItem.module.css'

const DropdownMenuItem = ({ data }) => {
  return (
    <li className={styles.dropdownItem}>
      <a className={styles.dropdownItemLink} href={data.link}>
        {data.name}
      </a>
    </li>
  );
};

export default DropdownMenuItem;
