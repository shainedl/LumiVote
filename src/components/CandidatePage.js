// src/components/CandidatePage.js
import React from 'react';
import { Link } from 'react-router';
import AthletesMenu from './CandidatesMenu';
import candidates from '../data/candidates';

export default class CandidatePage extends React.Component {
	render() {
		const id = this.props.params.id;
		const candidate = candidates.filter((candidate) => candidate.id === id)[0];
		return (
			<div className="candidate-full">
				<CandidatesMenu candidates={candidates}/>
				<div className="candidate">
					<header style={headerStyle}/>
					<div className="picture-container">
						<img src={`/img/${candidate.image}`}/>
						<h2 className="name">{candidate.name}</h2>
					</div>
					<section className="description">
					</section>
				</div>
				<div className="navigateBack">
					<Link to="/">« Back to the index</Link>
				</div>
			</div>
		);
	}
}