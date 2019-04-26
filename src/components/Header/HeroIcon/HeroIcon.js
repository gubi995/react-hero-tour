import React from 'react';

import icon from '../../../assets/icons/hero-icon.svg';
import classes from './HeroIcon.module.scss';

const HeroIcon = () => {
  return <img className={classes.HeroIcon} src={icon} alt="Logo" />;
};

export default HeroIcon;
