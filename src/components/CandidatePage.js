//https://github.com/lmammino/judo-heroes-2

import React from 'react';
import { Link } from 'react-router';
import CandidatesMenu from './CandidatesMenu';
import Issue from './Issue';
import candidates from '../data/candidates';

export default class CandidatePage extends React.Component {
    render() {
        <div className="logo-background">
            <img className="img-logo" src={`../../../assets/images/logo2.jpg`}/>
        </div>
        const id = this.props.match.params.id;
        const candidate = candidates.filter((candidate) => candidate.id === id)[0];
        const headerStyle = { backgroundImage: `url(/assets/images/${candidate.cover})` };
        return (
        <div>
            <div className="candidate-full">
                <CandidatesMenu candidates={candidates}/>
                <div className="candidate">
                    <header style={headerStyle}/>
                    <div className="picture-container">
                        <img src={`/assets/images/${candidate.image}`}/>
                        <h2 className="name">{candidate.name}</h2>
                    </div>
                    <section className="issues">
                        <p>The candidate has the following to say about these important issues: </p>
                            <u1>{
                                candidate.issues.map((issue, i) => <Issue key={i} {...issue}/>)
                            }</u1>
                    </section>
                </div>
            </div>
          </div>
        );
    }
}
