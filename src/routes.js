'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import CandidatePage from './components/CandidatePage';
import NotFoundPage from './components/NotFoundPage';
import Questions from './components/questions'
//import Result from './components/result';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="candidate/:id" component={CandidatePage}/>
    <Route path="*" component={Questions}/>
  </Route>
);

export default routes;