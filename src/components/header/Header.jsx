import React from 'react';
import styles from './header.module.css';
import Logo from '../logo/Logo';
import NavigationMenu from '../navigation-menu/NavigationMenu';
import BurgerMenuButton from '../burger-menu-button/BurgerMenuButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Logo />
        <NavigationMenu />
        <BurgerMenuButton />
      </nav>
    </header>
  );
};

export default Header;
