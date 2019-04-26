import React from 'react';

import classes from './Cards.module.scss';
import Card from './Card/Card';

const Cards = props => {
  const heroNames = props.heroes;
  const cardsClasses = [classes.Cards];
  let cards;

  if (heroNames && heroNames.length !== 0) {
    cards = heroNames.map((heroName, index) => (
      <Card key={index} name={heroName} />
    ));
  } else {
    cards = <p style={{ fontWeight: 'bold' }}>No available hero</p>;
    cardsClasses.push(classes.NoItem);
  }

  return <div className={cardsClasses.join(' ')}>{cards}</div>;
};

export default Cards;
