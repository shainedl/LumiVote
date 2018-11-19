
import React, { Component } from 'react';

export default class ResourcePage extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="logo-background">
                    <img className="img-logo" src={`../../../assets/images/logo2.jpg`}/>
                </div>
                <div className="home-titles">
                    <a>Links to Outside Sources</a>
                </div>
                <div className="resource-container">
                    <div>
                        <a href="https://www.tishjames2018.com/">Tish James for Attorney General - Official Campaign Website</a>
                    </div>
                    <div>
                        <a href="http://www.wofford4ag.com/">Keith Wofford for Attorney General - Official Campaign Website</a>
                    </div>
                    <div>
                        <a href="http://electchrisgarvey.top">Christopher Garvey for Attorney General - Official Campaign Website</a>
                    </div>
                    <div>
                        <a href="https://www.electsussman-nyag2018.com">Michael Sussman for Attorney General - Official Campaign Website</a>
                    </div>
                    <div>
                        <a href="https://sliwa4attorneygeneral.com">Nancy B. Sliwa for Attorney General - Official Campaign Website</a>
                    </div>
                    <div>
                        <a href="http://vote.nyc.ny.us">New York City Board of Elections</a>
                    </div>
                    <div>
                        <a href="https://www.elections.ny.gov">New York State Board of Elections</a>
                    </div>
                    <div>
                        <a href="http://whosontheballot.org">Who’s On The Ballot</a>
                    </div>
                    <div>
                        <a href="https://www.vote411.org">Vote411.org</a>
                    </div>
                    <div>
                        <a href="https://www.theskimm.com/noexcuses">The Skimm - No Excuses</a>
                    </div>
                    <div>
                        <a href="https://www.ballotready.org/">BallotReady</a>
                    </div>
                </div>
            </div>
        );
    }
}