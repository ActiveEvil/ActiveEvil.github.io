import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Frame from './containers/Frame';
import { fetchCharacterData } from './actions/Swapi';
import style from './global.css';

store.dispatch(fetchCharacterData('https://swapi.co/api/people/'));

ReactDOM.render(
  <Provider store={store}>
    <Frame/>
  </Provider>,
  document.getElementById('sw-app')
);
