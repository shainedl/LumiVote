import React, { Component } from 'react';
import Questions from './questions';
import Result from './result';

export default class Quiz extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="site-title">
          <a href="/">New York State Attorney General</a>
        </h1>
        <h2 className="site-title-dark">
          <a href="/">Which candidate is most closely aligned with my views?</a>
        </h2>
        <Questions />
        <Result />
      </div>
    );
  }
}
