import React from 'react';

import HeroItem from './HeroItem/HeroItem';
import classes from './HeroItems.module.scss';

const HeroItems = ({ heroes, deleteHandler }) => {
  return (
    <div className={classes.HeroItems}>
      {heroes.map(hero => (
        <HeroItem hero={hero} key={hero.id} deleteHandler={deleteHandler} />
      ))}
    </div>
  );
};

export default HeroItems;
