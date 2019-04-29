import React from 'react';

import HeroItem from './HeroItem/HeroItem';
import classes from './HeroItems.module.scss';

const HeroItems = props => {
  return (
    <div className={classes.HeroItems}>
      {props.heroes.map(hero => (
        <HeroItem
          hero={hero}
          key={hero.id}
          deleteHandler={props.deleteHandler}
        />
      ))}
    </div>
  );
};

export default HeroItems;
