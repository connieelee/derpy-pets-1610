import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import data from '../public/data';
import store from './redux/store';
import { selectAnimal } from './redux/action-creators';

import MainContainer from './containers/MainContainer';
import Home from './components/Home';
import AnimalsList from './components/AnimalsList';
import AnimalProfile from './components/AnimalProfile';

const onProfileEnter = function(nextState) {
  const { filter, id } = nextState.params;
  const findAnimalById = animal => animal.id === +id;
  const animal = data[filter].find(findAnimalById);
  store.dispatch(selectAnimal(animal));
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={MainContainer}>
        <IndexRoute component={Home} />
        <Route path="/:filter" component={AnimalsList} />
        <Route
          path="/:filter/:id"
          onEnter={onProfileEnter}
          component={AnimalProfile}
        />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
