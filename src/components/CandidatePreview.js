'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class CandidatePreview extends React.Component {
  render() {
    return (
      <Link to={`/candidate/${this.props.id}`}>
        <div className="candidate-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}