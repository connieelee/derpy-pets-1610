import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from './Main';
import Home from './Home';
import AnimalsList from './AnimalsList';
import AnimalProfile from './AnimalProfile';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/:filter" component={AnimalsList} />
      <Route path="/:filter/:id" component={AnimalProfile} />
    </Route>
  </Router>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
