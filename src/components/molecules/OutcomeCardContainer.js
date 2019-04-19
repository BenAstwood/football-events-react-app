import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import OutcomeCard from '../atoms/OutcomeCard';

class OutcomeCardContainer extends Component {

  render() {
    const {classes, isDecimal} = this.props;
    const outcomes = this.props.data;

    return (
      <div className={classes.root}>{outcomes.map(outcome => <OutcomeCard key={outcome.outcomeId} isDecimal={isDecimal} props={outcome}/>)}</div>
    )
  }
}

const styles = {
  root: {
    'margin-top': '3rem'
  }
};

export default withStyles(styles)(OutcomeCardContainer);