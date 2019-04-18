import React, {Component} from 'react';
import ListItem from '../molecules/ListItem';

class List extends Component {
  render() {
    const {props} = this.props;
    const listItems = props.props;

    if (props !== null && Array.isArray(listItems)) {
      return listItems.map((item, index) => <ListItem props={item} key={index}/>)
    } else {
      return <li className="loading">Loading live football events</li>
    }
  }
}

export default List;