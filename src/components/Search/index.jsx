import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import style from './style.css';

class Search extends React.Component {
  render() {
    return (
      <input
        className={style.search}
        id={'search'}
        name={'search'}
        type={'search'}
        placeholder={'Search for Star Wars Characters...'}
        aria-label={'Search for Star Wars Characters'}
      />
    );
  }
}

// Header.propTypes = {
//   children: PropTypes.element.isRequired,
// };

export default Search;
