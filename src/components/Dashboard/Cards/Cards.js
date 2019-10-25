import React from 'react';

import classes from './Cards.module.scss';
import Card from './Card/Card';

const Cards = ({ heroes }) => {
  const cardsClasses = [classes.Cards];
  let cards;

  if (heroes && heroes.length !== 0) {
    cards = heroes.map(hero => <Card key={hero.id} name={hero.name} />);
  } else {
    cards = <p style={{ fontWeight: 'bold' }}>No available hero</p>;

    cardsClasses.push(classes.NoItem);
  }

  return <div className={cardsClasses.join(' ')}>{cards}</div>;
};

export default Cards;
