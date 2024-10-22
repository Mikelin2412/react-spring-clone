import React from 'react';
import styles from './dropdownMenuItem.module.css';

const DropdownMenuItem = ({ data }) => {
  return (
    <li>
      <a className={styles.dropdownItemLink} href={data.link}>
        {data.name}
      </a>
    </li>
  );
};

export default DropdownMenuItem;
