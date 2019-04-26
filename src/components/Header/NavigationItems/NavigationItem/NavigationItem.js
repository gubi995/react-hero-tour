import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.scss';

const NavigationItem = props => {
  return (
    <NavLink
      className={classes.NavigationItem}
      activeClassName={classes.active}
      {...props}
    >
      {props.children}
    </NavLink>
  );
};

export default NavigationItem;
