import React, { Component } from 'react';

import classes from './Dashboard.module.scss';
import Cards from './Cards/Cards';
import HeroSearch from './HeroSearch/HeroSearch';
import * as keyCodes from '../../shared/keyCodes';

class Dashboard extends Component {
  state = {
    heroes: [
      { id: 1, name: 'Batman' },
      { id: 2, name: 'Flash' },
      { id: 3, name: 'Superman' },
      { id: 4, name: 'Green lantern' },
      { id: 5, name: 'Aquaman' },
      { id: 6, name: 'Spider-Man' }
    ],
    filteredHeroes: [],
    inputValue: '',
    selectedItemIndex: 0,
    searchContainerOpened: false
  };

  filterHeroHandler = event => {
    let inputValue = event.target.value;
    let filteredHeroes;

    if (inputValue) {
      filteredHeroes = this.state.heroes.filter(hero =>
        hero.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    this.setState({
      inputValue: inputValue,
      filteredHeroes: filteredHeroes,
      selectedItemIndex: 0,
      searchContainerOpened: true
    });
  };

  keyDownEventHandler = event => {
    const keyCode = event.keyCode;

    switch (keyCode) {
      case keyCodes.DOWN_ARROW:
        this.increaseSelectedItemIndex();
        break;
      case keyCodes.UP_ARROW:
        this.decreaseSelectedItemIndex();
        break;
      case keyCodes.ENTER:
        this.selectItem();
        break;
      default:
        break;
    }
  };

  increaseSelectedItemIndex = () => {
    if (this.state.selectedItemIndex < this.state.filteredHeroes.length - 1) {
      this.setState(prevState => ({
        selectedItemIndex: prevState.selectedItemIndex + 1,
        searchContainerOpened: true
      }));
    }
  };

  decreaseSelectedItemIndex = () => {
    if (this.state.selectedItemIndex > 0) {
      this.setState(prevState => ({
        selectedItemIndex: prevState.selectedItemIndex - 1,
        searchContainerOpened: true
      }));
    }
  };

  selectItem = () => {
    this.setState(prevState => ({
      inputValue: prevState.filteredHeroes[prevState.selectedItemIndex].name,
      searchContainerOpened: false
    }));
  };

  itemClickHandler = index => {
    this.setState({
      inputValue: this.state.filteredHeroes[index].name,
      searchContainerOpened: false
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
          selectedItemIndex={this.state.selectedItemIndex}
          changed={this.filterHeroHandler}
          keyDown={this.keyDownEventHandler}
          clicked={this.itemClickHandler}
          value={this.state.inputValue}
          opened={this.state.searchContainerOpened}
        />
      </div>
    );
  }
}

export default Dashboard;
