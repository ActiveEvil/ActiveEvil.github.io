import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { characters = [], uiEventHandlers} = this.props;

    if (characters.length) {
      return (
        <ul className={style.list}>
          {characters.map((character, index) => (
            <li
              className={style.item}
              key={index}
            >
              <a
                className={style.link}
                onClick={() => uiEventHandlers.handleCharacterSelection(character)}
              >
                {character.name}
              </a>
            </li>
          ))}
        </ul>
      );
    }

    return null;
  }
}

Results.propTypes = {
  characters: PropTypes.array,
  uiEventHandlers: PropTypes.objectOf(PropTypes.func),
};

export default Results;
