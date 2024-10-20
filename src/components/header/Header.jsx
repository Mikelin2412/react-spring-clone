import React from 'react';
import styles from './header.module.css';
import Logo from '../logo/Logo';
import NavigationMenu from '../navigation-menu/NavigationMenu';

const Header = () => {
  return (<header className={styles.header}>
    <nav className={styles.navBar}>
      <Logo />
      <NavigationMenu />
    </nav>
  </header>);
};

export default Header;
