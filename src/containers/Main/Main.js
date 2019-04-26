import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../../components/Dashboard/Dashboard';
import Detail from '../../components/Detail/Detail';
import Heroes from '../../components/Heroes/Heroes';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import classes from './Main.module.scss';

class Main extends Component {
  render() {
    return (
      <div className={classes.Main}>
        <Switch>
          <Redirect from="/" to="/dashboard" exact />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/detail" component={Detail} />
          <Route path="/heroes" component={Heroes} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;
