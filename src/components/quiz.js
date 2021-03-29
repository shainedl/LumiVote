//https://github.com/StephenMayeux/quizBuzz

import React, { Component } from 'react';
import Questions from './questions';
import Result from './result';

export default class Quiz extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="logo-background">
          <img className="img-logo" src={`../../../assets/images/logo2.jpg`}/>
        </div>
        <h1 className="site-title">
          <a>New York State Attorney General</a>
        </h1>
        <h2 className="site-title-dark">
          <a>Which candidate is most closely aligned with my views?</a>
        </h2>
        <Questions />
        <Result />
      </div>
    );
  }
}
