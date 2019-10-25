import React from 'react';

import classes from './HeroItem.module.scss';

const HeroItem = ({ hero, deleteHandler }) => {
  return (
    <div className={classes.HeroItem}>
      <div className={classes.HeroId}>{hero.id}</div>
      <div className={classes.HeroName}>
        {hero.name}
        <div
          className={classes.DeleteButton}
          onClick={() => deleteHandler(hero.id)}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
