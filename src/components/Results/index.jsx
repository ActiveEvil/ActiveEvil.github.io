import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { characters = [] } = this.props;

    if (characters.length) {
      return (
        <section className={style.container}>
          <ul className={style.list}>
            {characters.map((character, index) => (
              <li
                className={style.item}
                key={index}
              >
                <a className={style.link}>{character.name}</a>
              </li>
            ))}
          </ul>
        </section>
      );
    }

    return null;
  }
}

Results.propTypes = {
  characters: PropTypes.array,
};

export default Results;
