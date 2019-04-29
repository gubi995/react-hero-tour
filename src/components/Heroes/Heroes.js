import React from 'react';

import AddHero from './AddHero/AddHero';

const Heroes = () => {
  return (
    <React.Fragment>
      <h2>My Heroes</h2>
      <AddHero />
      <div>Hero List Items</div>
    </React.Fragment>
  );
};

export default Heroes;
