'use strict';

import React from 'react';
import CandidatePreview from './CandidatePreview';
import candidates from '../data/candidates';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="candidates-selector">
          {candidates.map(candidateData => <CandidatePreview key={candidateData.id} {...candidateData} />)}
        </div>
      </div>
    );
  }
}