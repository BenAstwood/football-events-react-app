import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class MarketsButton extends Component {
  render() {
    const {classes} = this.props;
    return <Button variant="contained" color="primary" className={classes.button}>
      View market
    </Button>
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

export default withStyles(styles)(MarketsButton);