// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import CandidatePage from './components/CandidatePage';

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={IndexPage}/>
		<Route path="candidate:/id" component={CandidatePage}/>
	</Route>
);

export default routes;