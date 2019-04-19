import React, {Component} from 'react';
import ListItem from '../molecules/ListItem';
import {withStyles} from '@material-ui/core/styles';

class List extends Component {
  render() {
    const {props, classes} = this.props;
    const listItems = props.props;

    if (props !== null && Array.isArray(listItems)) {
      return <ul className={classes.root}>
        {listItems.map((item, index) => {
          const {marketData, outcomes} = this.props.props;

          if (marketData !== null && item.eventId === marketData.eventId && outcomes.length > 0) {
            return <ListItem props={item} marketData={marketData} outcomes={outcomes} key={index}/>
          } else {
            return <ListItem props={item} key={index}/>
          }
        })
}
      </ul>
    } else {
      return <ul className={classes.root}>
        <li className="loading">Loading live football events</li>
      </ul>
    }
  }
}

const styles = {
  root: {
    'list-style-type': 'none',
    'padding': '2rem',
    'max-width': '1000px',
    'margin': 'auto'
  }
};

export default withStyles(styles)(List);