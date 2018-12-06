import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { character } = this.props;
    if (character) {
      return (
        <section className={style.container}>
          <h2 className={style.title}>{character.name}</h2>
          <table>
            <tbody>
              <tr>
                <td>Born</td>
                <td>{character.birth_year}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{character.gender}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{character.height}</td>
              </tr>
              <tr>
                <td>Hair colour</td>
                <td>{character.hair_color}</td>
              </tr>
              <tr>
                <td>Eye colour</td>
                <td>{character.eye_color}</td>
              </tr>
            </tbody>
          </table>
        </section>
      );
    }

    return null;
  }
}

Profile.propTypes = {
  character: PropTypes.objectOf(PropTypes.any),
};

export default Profile;
