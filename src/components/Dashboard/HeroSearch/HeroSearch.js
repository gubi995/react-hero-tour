import React from 'react';

import classes from './HeroSearch.module.scss';

const HeroSearch = props => {
  const heroesNames = props.filteredHeroes;
  let searchItems;

  if (heroesNames) {
    searchItems = heroesNames.map((heroName, index) => (
      <div key={index} className={classes.SearchResultItem}>
        {heroName}
      </div>
    ));
  }

  return (
    <React.Fragment>
      <input
        type="text"
        onChange={event => props.changed(event)}
        value={props.value}
      />
      <div
        className={
          heroesNames && heroesNames.length !== 0
            ? classes.SearchResultContainer
            : null
        }
      >
        {searchItems}
      </div>
    </React.Fragment>
  );
};

export default HeroSearch;
