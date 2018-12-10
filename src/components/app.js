import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Quiz from './quiz';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import PamphletPage from './PamphletPage';
import CandidatePage from './CandidatePage';
import ResourcePage from './ResourcePage';

function App() {
  return (
    <Router>
      <div>
        <div className='header'>
          <div>
            <Link to="/">HOME</Link>
          </div>
          <div>
            <Link to="/quiz">GET STARTED</Link>
          </div>
          <div>
            <Link to="/about">ABOUT</Link>
          </div>
          <div>
            <Link to="/resources">OTHER RESOURCES</Link>
          </div>
        </div>

        <hr />

        <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/candidates" component={PamphletPage} />
        <Route path="/candidate/:id" component={CandidatePage} />
        <Route path="/resources" component={ResourcePage} />
        <Route path="/" component={HomePage} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;