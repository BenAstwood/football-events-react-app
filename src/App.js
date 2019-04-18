import React, {Component} from 'react';
import Header from './components/templates/Header';
import Main from './components/templates/Main';
import {initWebSocket, getData} from './helpers/getData';

class App extends Component {
  state = {
    data: null
  };

  initWebSocket = initWebSocket.bind(this)
  getData = getData.bind(this)

  componentDidMount() {
    this.initWebSocket()
  }

  render() {
    return (
      <div>
        <Header/>
        <Main props={this.state.data}/>
      </div>
    );
  }
}

export default App;
