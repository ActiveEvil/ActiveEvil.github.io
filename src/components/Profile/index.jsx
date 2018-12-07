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
                <th scope={'row'}>Homeworld</th>
                <td>{character.homeworld}</td>
              </tr>
              <tr>
                <th scope={'row'}>Born</th>
                <td>{character.birth_year}</td>
              </tr>
              <tr>
                <th scope={'row'}>Species</th>
                <td>{character.species}</td>
              </tr>
              <tr>
                <th scope={'row'}>Gender</th>
                <td>{character.gender}</td>
              </tr>
              <tr>
                <th scope={'row'}>Height</th>
                <td>{character.height}cm</td>
              </tr>
              <tr>
                <th scope={'row'}>Weight</th>
                <td>{character.mass}kg</td>
              </tr>
              <tr>
                <th scope={'row'}>Hair colour</th>
                <td>{character.hair_color}</td>
              </tr>
              <tr>
                <th scope={'row'}>Eye colour</th>
                <td>{character.eye_color}</td>
              </tr>
              <tr>
                <th scope={'row'}>Appears in</th>
                <td>
                  {character.films.map((film, index) => (
                    <span
                      key={index}
                      className={style.film}
                    >
                      {film}
                    </span>
                  ))}
                </td>
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
