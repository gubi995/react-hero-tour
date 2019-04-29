import React from 'react';

import classes from './HeroSearch.module.scss';

const HeroSearch = props => {
  const heroesNames = props.filteredHeroes;
  let searchItems;

  if (heroesNames) {
    searchItems = heroesNames.map((heroName, index) => {
      let itemClasses = [classes.SearchResultItem];

      if (index === props.selectedItemIndex) {
        itemClasses.push(classes.selected);
      }

      return (
        <div
          key={index}
          className={itemClasses.join(' ')}
          onClick={() => props.clicked(index)}
        >
          {heroName}
        </div>
      );
    });
  }

  return (
    <React.Fragment>
      <input
        type="text"
        onChange={event => props.changed(event)}
        onKeyDown={event => props.keyDown(event)}
        value={props.value}
      />
      {props.opened && (
        <div
          className={
            heroesNames && heroesNames.length !== 0
              ? classes.SearchResultContainer
              : null
          }
        >
          {searchItems}
        </div>
      )}
    </React.Fragment>
  );
};

export default HeroSearch;
