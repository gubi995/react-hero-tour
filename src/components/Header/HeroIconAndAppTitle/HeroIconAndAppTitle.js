import React from 'react';
import { withRouter } from 'react-router-dom';

import HeroIcon from '../HeroIcon/HeroIcon';
import classes from './HeroIconAndAppTitle.module.scss';

const HeroIconAndAppTitle = props => {
  const navigateToDashboard = () => {
    props.history.push('/dashboard');
  };

  return (
    <div className={classes.HeroIconAndAppTitle} onClick={navigateToDashboard}>
      <HeroIcon />
      <span className={classes.Title}>Tour of Heros</span>
    </div>
  );
};

export default withRouter(HeroIconAndAppTitle);
