import React, {Component} from 'react';
import Header from './components/templates/Header';
import Main from './components/templates/Main';
import {withStyles} from '@material-ui/core/styles';
import {initWebSocket, getData} from './helpers/getData';
import toggleDecimal from './helpers/toggleDecimal';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  state = {
    data: null,
    marketData: null,
    outcomes: [],
    toggleDecimal: true
  };

  initWebSocket = initWebSocket.bind(this)
  getData = getData.bind(this)
  toggleDecimal = toggleDecimal.bind(this)

  componentDidMount() {
    this.initWebSocket();
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <Header
          toggleDecimal={this.toggleDecimal}
          isDecimal={this.state.toggleDecimal}/>
        <Main
          isDecimal={this.state.toggleDecimal}
          props={this.state.data}
          marketData={this.state.marketData}
          outcomes={this.state.outcomes}/>
      </div>
    );
  }
}

const styles = {
  root: {
    background: '#f5f5f5'
  }
};

export default withStyles(styles)(App);
