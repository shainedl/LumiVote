'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class CandidatesMenu extends React.Component {
  render() {
    return (
      <nav className="candidates-menu">
        {this.props.candidates.map(menuCandidate => {
          return <Link key={menuCandidate.id} to={`/candidate/${menuCandidate.id}`} activeClassName="active">
            {menuCandidate.name}
          </Link>;
        })}
      </nav>
    );
  }
}