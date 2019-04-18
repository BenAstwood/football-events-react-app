import React, {Component} from 'react';

class Score extends Component {

  render() {
    const newScore = this.props.newScore;

    return (
      <div className="score-box">
        <span>{newScore}</span>
      </div>
    );
  }
}

export default Score;
