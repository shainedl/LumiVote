import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class QuestionOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
  }

  handleSelect(answer, id) {
    this.setState({ selectedOption: answer });
    this.props.addOption(id);
  }

  renderOptions() {
    const root = '/assets/images/';
    let { options, id } = this.props;

    return options.map(({ answer }) => {
      return (
        <div key={answer}>
          <div onClick={() => this.handleSelect(answer, id)} className={this.state.selectedOption === answer ? 'thumbnail chosen' : 'thumbnail'}>
            <i className={this.state.selectedOption === answer ? 'fa fa-check-square-o fa-lg' : 'fa fa-square-o fa-lg'}></i>
            {answer}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="option-row">
        {this.renderOptions()}
      </div>
    );
  }
}

export default connect(null, actions)(QuestionOptions);
