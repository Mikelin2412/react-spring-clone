import React, { useEffect, useState } from 'react';
import Logo from '../logo/Logo';
import NavigationMenu from '../navigation-menu/NavigationMenu';
import BurgerMenuButton from '../burger-menu-button/BurgerMenuButton';
import SideMenu from '../side-menu/SideMenu';
import styles from './header.module.css';

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  
  useEffect(() => {
    document.body.style.overflow = isSideMenuOpen ? 'hidden' : 'auto';
  }, [isSideMenuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Logo />
        <NavigationMenu />
        <BurgerMenuButton
          handleClick={setIsSideMenuOpen}
          isOpen={isSideMenuOpen}
        />
        <SideMenu isOpen={isSideMenuOpen} />
      </nav>
    </header>
  );
};

export default Header;
