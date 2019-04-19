import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class OutcomeCard extends Component {

  render() {
    const {classes} = this.props;
    const outcome = this.props.props;
    const {price, name} = outcome;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" component="h2">{price.decimal}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View price as fraction</Button>
        </CardActions>
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
