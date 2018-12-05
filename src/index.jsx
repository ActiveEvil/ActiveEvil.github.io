import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Frame from './containers/Frame';
import Search from './containers/Search';
import { fetchCharacterData } from './actions/Swapi';

store.dispatch(fetchCharacterData('https://swapi.co/api/people/?search=r'));

ReactDOM.render(
  <Provider store={store}>
    <Frame>
      <Search/>
    </Frame>
  </Provider>,
  document.getElementById('sw-app')
);
