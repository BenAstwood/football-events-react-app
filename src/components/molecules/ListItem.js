import React, {Component} from 'react';
import MarketsModal from '../organisms/Modal';
import MatchDetails from './MatchDetails'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import {withStyles} from '@material-ui/core/styles';

class ListItem extends Component {
  render() {
    const {classes} = this.props;
    const {competitors, linkedEventTypeName, scores, markets} = this.props.props;

    return (
      <li className={classes.root}>
        <ExpansionPanel >
          <ExpansionPanelSummary expandIcon={< ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>{`${competitors[0].name}
                v ${competitors[1].name}`}</Typography>
            </div>
            {linkedEventTypeName
              ? <div className={classes.column}>
                  <Typography className={classes.secondaryHeading}>{linkedEventTypeName}</Typography>
                </div>
              : ''}
          </ExpansionPanelSummary>
          <Divider/>
          <ExpansionPanelDetails className={classes.details}>
            <MatchDetails matchData={this.props.props}/>
          </ExpansionPanelDetails>
          <Divider/>
          <ExpansionPanelActions>
            <div >
              <Typography variant="caption">
                Checkout the top bets
                <MarketsModal
                  isDecimal={this.props.isDecimal}
                  props={this.props}
                  marketId={markets}/>
              </Typography>
            </div>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </li>
    )
  }
}

const styles = {
  root: {
    width: '100%',
    'margin-bottom': '0.5rem'
  },
  heading: {
    fontSize: '1rem'
  },
  secondaryHeading: {
    fontSize: '1rem',
    color: 'grey'
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20
  },
  details: {
    alignItems: 'center'
  },
  column: {
    flexBasis: '33.33%'
  }
};

export default withStyles(styles)(ListItem);