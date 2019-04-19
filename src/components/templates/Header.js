import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Header = props => {
  const {classes} = props;

  return (
    <AppBar className={classes.root} position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Live football
        </Typography>
        <Button onClick={props.toggleDecimal}>
          View prices as {props.isDecimal
            ? 'Fraction'
            : 'Decimal'}
        </Button>
      </Toolbar>
    </AppBar>
  )
};

const styles = {
  root: {
    flexGrow: 1,
    background: '#f44336',
    color: 'white'
  }
};

export default withStyles(styles)(Header);