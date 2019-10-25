import React from 'react';

import classes from './AddHero.module.scss';

const AddHero = ({ heroName, changed, addHandler }) => {
  return (
    <div className={classes.AddHero}>
      <p>Hero name:</p>
      <input type="text" onChange={event => changed(event)} value={heroName} />
      <button onClick={() => addHandler(heroName)}>Add</button>
    </div>
  );
};

export default AddHero;
