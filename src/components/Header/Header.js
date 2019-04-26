import React from 'react';

import classes from './Header.module.scss';
import HeroIconAndAppTitle from './HeroIconAndAppTitle/HeroIconAndAppTitle';
import NavigationItems from './NavigationItems/NavigationItems';

const Header = () => {
  return (
    <header className={classes.Header}>
      <HeroIconAndAppTitle />
      <NavigationItems />
    </header>
  );
};

export default Header;
