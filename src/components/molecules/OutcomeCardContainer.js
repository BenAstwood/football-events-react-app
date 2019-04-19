import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import {withStyles} from '@material-ui/core/styles';
import OutcomeCard from '../atoms/OutcomeCard';

class OutcomeCardContainer extends Component {

  render() {
    const {classes} = this.props;
    const outcomes = this.props.data;

    return (outcomes.map(outcome => <div key={outcome.outcomeId}><OutcomeCard props={outcome}/><Divider/></div>))
  }
}

const styles = theme => ({root: {}});

export default withStyles(styles)(OutcomeCardContainer);