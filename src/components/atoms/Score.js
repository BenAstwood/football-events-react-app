import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

class Score extends Component {
  render() {
    const newScore = this.props.newScore;
    const {classes} = this.props;

    return (
      <div className={classes.scoresBox}>
        <span>{newScore}</span>
      </div>
    );
  }
}

const styles = {
  scoresBox: {
    display: 'flex',
    'align-items': 'center',
    padding: '0.6rem 1rem',
    margin: '0.5rem',
    border: '1px solid #d2d2d2',
    'font-size': '1.2rem',
    'border-radius': '2px',
    'font-weight': 'bold'
  }
};

export default withStyles(styles)(Score);