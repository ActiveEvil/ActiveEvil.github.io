import React from 'react';
import ReactDOM from 'react-dom';
import Frame from './components/Frame';
import Search from './components/Search';

ReactDOM.render(
  <Frame>
    <Search/>
  </Frame>,
  document.getElementById('sw-app')
);
