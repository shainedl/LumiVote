import React, { Component } from 'react';

export default class HomePage extends Component {
    render() {
      return (
        <div className="home-container">
            <div className="logo-background">
                <img className="img-logo" src={`../../../assets/images/logo2.jpg`}/>
            </div>
            <div className="NYC-background">
                <img className="img-logo" src={`../../../assets/images/NYC_image.jpg`}/>
            </div>
            <div className="know-ballot">
                <p>Know your ballot.</p>
            </div>
            <div className="home-body">
                <p>Enter the voting booth with more knowledge than ever with LumiVote, a voter education tool. LumiVote helps you learn about the candidates on your ballot through easy-to-use candidate pages and quizzes. Mark the candidates you’ve learned about and plan to vote for, and save, email or print your data to keep track of it.</p>  
            </div> 
        </div>
      );
    }
  }