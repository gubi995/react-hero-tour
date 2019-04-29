import React from 'react';

import classes from './HeroSearch.module.scss';

const HeroSearch = props => {
  const heroes = props.filteredHeroes;
  let searchItems;

  if (heroes) {
    searchItems = heroes.map((hero, index) => {
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
          {hero.name}
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
            heroes && heroes.length !== 0 ? classes.SearchResultContainer : null
          }
        >
          {searchItems}
        </div>
      )}
    </React.Fragment>
  );
};

export default HeroSearch;
