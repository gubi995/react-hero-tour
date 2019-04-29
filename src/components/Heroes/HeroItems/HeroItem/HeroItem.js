import React from 'react';

import classes from './HeroItem.module.scss';

const HeroItem = props => {
  const hero = props.hero;

  return (
    <div className={classes.HeroItem}>
      <div className={classes.HeroId}>{hero.id}</div>
      <div className={classes.HeroName}>
        {hero.name}
        <div
          className={classes.DeleteButton}
          onClick={() => props.deleteHandler(hero.id)}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
