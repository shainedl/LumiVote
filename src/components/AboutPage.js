import React, { Component } from 'react';

export default class AboutPage extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="logo-background">
                    <img className="img-logo" src={`../../../assets/images/logo2.jpg`}/>
                </div>
                <div className="home-titles">
                    <a>Our Story</a>
                </div>
                <div className="home-body">
                    <p>Over the course of many conversations with U.S. voters, we heard a common story: far too many people enter the voting booth and are surprised by some of the names on their ballots. Local races can be especially hard to find data on -- voters sometimes leave sections of their ballots blank or guess on candidates without knowing their platforms. Even for higher-profile races, reading through many different quotes on many different websites can take hours. We set out to build a tool that would make it fun and easy to spend time learning about candidate on your ballot.</p>
                </div>
                <div className="home-titles">
                    <a>Who We Are</a>
                </div>
                <div className="home-body">
                    <p>We are a group of Cornell Tech students who created LumiVote as part of Cornell Tech’s Fall 2018 Product Studio. LumiVote is not sponsored by or affiliated with any organizations or political parties. </p>
                </div>
                <div className="home-titles">
                    <a>FAQ</a>
                </div>
                <div className="home-body">
                    <p><i>Where does LumiVote get the candidate information?</i></p>
                    <p>LumiVote centralizes existing publicly available information on candidates. This information comes from candidates’ own campaign materials and from media interviews.</p>
                    <p><i>Why are some candidates quotes longer than others? Why do some candidates have no quote at all?</i></p>
                    <p>Some candidates have given more information on a certain topic than others. Some candidates have not made a public statement on certain topics. We’ve included every relevant quote we could find. We want to give you as much information as possible.</p>
                    <p><i>What is the goal of LumiVote?</i></p>
                    <p>LumiVote is an educational tool to help people learn about the candidates on their ballots, so that they can make a more informed choice on Election Day.</p>
                </div>
            </div>
        );
    }
}