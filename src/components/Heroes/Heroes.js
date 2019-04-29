import React, { Component } from 'react';

import AddHero from './AddHero/AddHero';
import HeroItems from './HeroItems/HeroItems';

class Heroes extends Component {
  state = {
    heroes: [
      { id: 1, name: 'Batman' },
      { id: 2, name: 'Flash' },
      { id: 3, name: 'Superman' },
      { id: 4, name: 'Green lantern' },
      { id: 5, name: 'Aquaman' },
      { id: 6, name: 'Spider-Man' }
    ],
    newHeroInputValue: ''
  };

  addHeroHandler = name => {
    this.setState({
      heroes: this.state.heroes.concat({
        id: Math.floor(Math.random() * 100),
        name: name
      }),
      newHeroInputValue: ''
    });
  };

  deleteHeroHandler = id => {
    this.setState({
      heroes: this.state.heroes.filter(hero => hero.id !== id)
    });
  };

  newHeroInputChangeHandler = event => {
    this.setState({
      newHeroInputValue: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>My Heroes</h2>
        <AddHero
          addHandler={this.addHeroHandler}
          heroName={this.state.newHeroInputValue}
          changed={this.newHeroInputChangeHandler}
        />
        <HeroItems
          heroes={this.state.heroes}
          deleteHandler={this.deleteHeroHandler}
        />
      </React.Fragment>
    );
  }
}

export default Heroes;
