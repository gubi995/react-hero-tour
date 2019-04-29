import React from 'react';

import classes from './AddHero.module.scss';

const AddHero = props => {
  return (
    <div className={classes.AddHero}>
      <p>Hero name:</p>
      <input
        type="text"
        onChange={event => props.changed(event)}
        value={props.heroName}
      />
      <button onClick={() => props.addHandler(props.heroName)}>Add</button>
    </div>
  );
};

export default AddHero;
