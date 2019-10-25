import React from 'react';

import classes from './HeroSearch.module.scss';

const HeroSearch = ({
  filteredHeroes,
  selectedItemIndex,
  value,
  opened,
  clicked,
  changed,
  keyDown
}) => {
  const heroes = filteredHeroes;
  let searchItems;

  if (heroes) {
    searchItems = heroes.map((hero, index) => {
      let itemClasses = [classes.SearchResultItem];

      if (index === selectedItemIndex) {
        itemClasses.push(classes.selected);
      }

      return (
        <div
          key={index}
          className={itemClasses.join(' ')}
          onClick={() => clicked(index)}
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
        onChange={event => changed(event)}
        onKeyDown={event => keyDown(event)}
        value={value}
      />
      {opened && (
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
