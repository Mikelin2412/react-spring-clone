import React from 'react';
import styles from './header.module.css';
import Logo from '../logo/Logo';
import NavigationMenu from '../navigation-menu/NavigationMenu';
import BurgerMenuButton from '../burger-menu-button/BurgerMenuButton';
import SideMenu from '../side-menu/SideMenu';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Logo />
        <NavigationMenu />
        <BurgerMenuButton />
        <SideMenu />
      </nav>
    </header>
  );
};

export default Header;
