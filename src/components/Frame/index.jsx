import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

class Frame extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <section className={style.frame}>
        {children}
      </section>
    );
  }
}

Frame.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Frame;
