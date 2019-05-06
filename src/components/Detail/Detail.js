import React from 'react';

import classes from './Detail.module.scss';

const Detail = () => {
  return (
    <div className={classes.Detail}>
      <h2>
        Hero Detail: <span className={classes.HeroName}>Aquaman</span>
      </h2>
      <p>id: 11</p>
      <input type="text" />
      <div className={classes.ButtonContainer}>
        <button>Go back</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default Detail;
