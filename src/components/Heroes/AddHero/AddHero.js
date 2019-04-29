import React from 'react';

import classes from './AddHero.module.scss';

export default function AddHero() {
  return (
    <div className={classes.AddHero}>
      <p>Hero name:</p>
      <input type="text" />
      <button>Add</button>
    </div>
  );
}
