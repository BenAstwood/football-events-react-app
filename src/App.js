import React, {Component} from 'react';
import getData from './helpers/getData.js';

class App extends Component {
  state = {
    data: null
  };

  getData = getData.bind(this)

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default App;
