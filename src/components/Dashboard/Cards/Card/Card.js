import React from 'react';

import classes from './Card.module.scss';

const Card = ({ name }) => {
  return <div className={classes.Card}>{name}</div>;
};

export default Card;
