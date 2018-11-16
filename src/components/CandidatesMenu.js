import React from 'react';
import { Route, Link } from 'react-router-dom';

const shortName = (fullname) => {
  const [name, surname] = fullname.split(' ');
  return `${name[0]}. ${surname}`;
};

const CandidateMenuLink = ({ id, to, label }) => (
  <Route path={`/candidate/${id}`}>
    {({ match }) => (
      <Link to={to} className={match ? 'active' : ''}>{label}</Link>
    )}
  </Route>
);

export const CandidatesMenu = ({ candidates }) => (
  <nav className="candidates-menu">
    {
      candidates.map(candidate =>
        <CandidateMenuLink key={candidate.id} id={candidate.id} to={`/candidate/${candidate.id}`} label={shortName(candidate.name)} />,
      )
    }
  </nav>
);

export default CandidatesMenu;