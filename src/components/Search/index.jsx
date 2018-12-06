import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { uiEventHandlers } = this.props;
    
    return (
      <input
        className={style.search}
        id={'search'}
        name={'search'}
        type={'search'}
        placeholder={'Search for Star Wars Characters...'}
        aria-label={'Search for Star Wars Characters...'}
        onChange={e => uiEventHandlers.handleSearchInput(e.target.value)}
      />
    );
  }
}

Search.propTypes = {
  uiEventHandlers: PropTypes.objectOf(PropTypes.func),
};

export default Search;
