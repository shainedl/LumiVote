import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Quiz from './quiz';
import HomePage from './HomePage';
import PamphletPage from './PamphletPage';
import CandidatePage from './CandidatePage';

function App() {
  return (
    <Router>
      <div>
        <div className='header'>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/quiz">Quiz</Link>
          </div>
          <div>
            <Link to="/pamphlet">Pamphlet</Link>
          </div>
        </div>

        <hr />

        <Switch>
        <Route path="/quiz" component={Quiz} />
        <Route path="/pamphlet" component={PamphletPage} />
        <Route path="/candidate/:id" component={CandidatePage} />
        <Route path="/" component={HomePage} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;