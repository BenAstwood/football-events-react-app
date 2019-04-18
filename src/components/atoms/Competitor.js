import React, {Component} from 'react';

class Competitor extends Component {

  render() {
    const {position, name} = this.props.prop;

    return (
      <div key={position}>
        <h2>{name}</h2>
        <span>
          {position}
        </span>
      </div>
    );
  }
}

export default Competitor;
