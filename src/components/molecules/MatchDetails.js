import React, {Component} from 'react';
import Score from '../atoms/Score';
import Competitor from '../atoms/Competitor';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class MatchDetails extends Component {
  render() {
    const {classes} = this.props;
    const {competitors, linkedEventTypeName, scores, markets} = this.props.matchData;

    return (
      <div className={classes.column}>
        <Competitor prop={competitors[0]}/>
        <div className={classes.scores}>
          <Score newScore={scores['home']}/>
          <Typography className={classes.heading}>V</Typography>
          <Score newScore={scores['away']}/>
        </div>
        <Competitor prop={competitors[1]}/>
      </div>
    )
  }
}

const styles = {
  heading: {
    fontSize: '3rem',
    'font-weight': 'bold',
    color: '#d8d5d5'
  },
  column: {
    display: 'flex',
    'justify-content': 'space-between',
    width: '100%'
  },
  scores: {
    display: 'flex',
    'align-items': 'center'
  }
};

export default withStyles(styles)(MatchDetails);