import React from 'react';
import { Link } from 'react-router-dom';

export default class CandidatePreview extends React.Component {
  render() {
    return (
      <Link to={`/candidate/${this.props.id}`}>
        <div className="candidate-preview">
          <img src={`/assets/images/${this.props.image}`} alt="Candidate"/>
          <h2 className="name">{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}