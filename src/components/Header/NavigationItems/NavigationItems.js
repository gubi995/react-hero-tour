import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';

const NavigationItems = () => {
  return (
    <nav className={classes.NavigationItems}>
      <NavigationItem to="/dashboard">Dashboard</NavigationItem>
      <NavigationItem to="/heroes">Heroes</NavigationItem>
    </nav>
  );
};

export default NavigationItems;
