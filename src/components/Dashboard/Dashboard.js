import React from 'react';

import classes from './Dashboard.module.scss';
import Cards from './Cards/Cards';
import HeroSearch from './HeroSearch/HeroSearch';

const Dashboard = () => {
  const topHeroes = ['Batman', 'Flash', 'Superman', 'Green lantern', 'Aquaman'];

  return (
    <div className={classes.Dashboard}>
      <h2 className={classes.TopHeroesCaption}>TOP HEROES</h2>
      <Cards heroes={topHeroes} />
      <h3>Hero Search</h3>
      <HeroSearch heroes={topHeroes} />
    </div>
  );
};

export default Dashboard;
