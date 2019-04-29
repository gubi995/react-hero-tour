import React, { Component } from 'react';

import classes from './Dashboard.module.scss';
import Cards from './Cards/Cards';
import HeroSearch from './HeroSearch/HeroSearch';
import * as constants from '../../shared/constants';

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
    inputValue: '',
    selectedItemIndex: 0
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
      filteredHeroes: filteredHeroes,
      selectedItemIndex: 0
    });
  };

  selectedItemIndexHandler = event => {
    const keyCode = event.keyCode;
    const selectedItemIndex = this.state.selectedItemIndex;

    if (
      keyCode === constants.DOWN_ARROW_KEY_CODE &&
      selectedItemIndex < this.state.filteredHeroes.length - 1
    ) {
      this.setState(prevState => ({
        selectedItemIndex: prevState.selectedItemIndex + 1
      }));
    } else if (
      keyCode === constants.UP_ARROW_KEY_CODE &&
      selectedItemIndex > 0
    ) {
      this.setState(prevState => ({
        selectedItemIndex: prevState.selectedItemIndex - 1
      }));
    }
  };

  render() {
    return (
      <div className={classes.Dashboard}>
        <h2 className={classes.TopHeroesCaption}>TOP HEROES</h2>
        <Cards heroes={this.state.heroes} />
        <h3>Hero Search</h3>
        <HeroSearch
          filteredHeroes={this.state.filteredHeroes}
          selectedItemIndex={this.state.selectedItemIndex}
          changed={this.filterHeroHandler}
          keyDown={this.selectedItemIndexHandler}
          value={this.state.inputValue}
        />
      </div>
    );
  }
}

export default Dashboard;
