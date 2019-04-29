import React, { Component } from 'react';

import classes from './Dashboard.module.scss';
import Cards from './Cards/Cards';
import HeroSearch from './HeroSearch/HeroSearch';

class Dashboard extends Component {
  state = {
    heroes: [
      'Batman',
      'Flash',
      'Superman',
      'Green lantern',
      'Aquaman',
      'Spider-Man'
    ],
    filteredHeroes: [],
    inputValue: ''
  };

  filterHeroHandler = event => {
    let inputValue = event.target.value;
    let filteredHeroes;

    if (inputValue) {
      filteredHeroes = this.state.heroes.filter(heroName =>
        heroName.toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    this.setState({
      inputValue: inputValue,
      filteredHeroes: filteredHeroes
    });
  };

  render() {
    return (
      <div className={classes.Dashboard}>
        <h2 className={classes.TopHeroesCaption}>TOP HEROES</h2>
        <Cards heroes={this.state.heroes} />
        <h3>Hero Search</h3>
        <HeroSearch
          filteredHeroes={this.state.filteredHeroes}
          changed={this.filterHeroHandler}
          value={this.state.inputValue}
        />
      </div>
    );
  }
}

export default Dashboard;
