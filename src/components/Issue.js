// src/components/Issue.js
"use strict";

import React from 'react';

export default class Issue extends React.Component {
	render() {
		return ( 
			<li className="issue">
				<span className="topic">{this.props.topic}</span>
                <span className="statement">{this.props.statement}</span>
            </li>
		);
	}
}
