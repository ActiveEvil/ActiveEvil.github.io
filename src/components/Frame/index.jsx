import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../../containers/Search';
import Results from '../../containers/Results';
import Profile from '../../containers/Profile';
import style from './style.css';

class Frame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoading, children } = this.props;

    if (isLoading) {
      return (
        <section className={style.loader}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path className={style.arc1} d="m56.29 64.274a15.597 15.597 0 0 1 -10.624 0.70854m-4.8727-2.3939a15.597 15.597 0 0 1 -5.2875 -6.8329m-1.1008-5.7556a15.597 15.597 0 0 1 13.067 -15.391m7.6951 0.67322a15.597 15.597 0 0 1 10.342 13.04" fill="none" stroke="#6a8cfd" strokeWidth="12"/>
            <path className={style.arc2} d="m19.681 37.143a32.935 32.935 0 0 1 38.098 -19.148m25.035 29.145a32.935 32.935 0 0 1 -64.125 13.064" fill="none" stroke="#fff" strokeWidth="10"/>
            <path className={style.arc3} d="m38.799 9.8769a42.367 42.367 0 0 1 38.331 7.4578m14.899 40.578a42.367 42.367 0 0 1 -37.233 34.227 42.367 42.367 0 0 1 -43.487 -25.819 42.367 42.367 0 0 1 12.225 -49.074" fill="none" stroke="#3652FE" strokeWidth="8"/>
          </svg>
        </section>
      );
    }

    return (
      <section className={style.frame}>
        <Search/>
        <section className={style.container}>
          <Results/>
          <Profile/>
        </section>
      </section>
    );
  }
}

Frame.propTypes = {
  isLoading: PropTypes.bool,
};

export default Frame;
