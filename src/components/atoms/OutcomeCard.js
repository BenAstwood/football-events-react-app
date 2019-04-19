import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class OutcomeCard extends Component {

  render() {
    const {classes, isDecimal} = this.props;
    const outcome = this.props.props;
    const {price, name} = outcome;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" component="h2">{isDecimal
              ? price.decimal
              : `${price.num}/${price.den}`}</Typography>
        </CardContent>
      </Card>
    )
  }
}

const styles = theme => ({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default withStyles(styles)(OutcomeCard);
