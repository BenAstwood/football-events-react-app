import React, {Component} from 'react';
import Score from '../atoms/Score';
import Competitor from '../atoms/Competitor';

class ListItem extends Component {
  render() {
    const {competitors, linkedEventTypeName, status, scores} = this.props.props;
    const {
      active,
      cashoutable,
      displayable,
      finished,
      live,
      requestabet,
      resulted,
      started,
      suspended,
      superBoostCount
    } = status;

    return (
      <li className="list-item">
        {linkedEventTypeName
          ? <div>
              <h4>{linkedEventTypeName}</h4>
            </div>
          : ''}
        <Competitor prop={competitors[0]}/>
        <div>
          <Score newScore={scores['home']}/>
          <span>
            V
          </span>
          <Score newScore={scores['away']}/>
        </div>
        <Competitor prop={competitors[1]}/>
      </li>
    )
  }
}

export default ListItem;