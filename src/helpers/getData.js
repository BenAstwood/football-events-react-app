const w = new WebSocket("ws://localhost:8889");

export function initWebSocket() {

  w.onopen = () => {
    w.addEventListener("message", e => {

      try {
        let result = JSON.parse(e.data);

        switch (result.type) {

          case 'LIVE_EVENTS_DATA':
            this.setState({data: result.data});
            break;

          case 'OUTCOME_DATA':
            this.setState({
              outcomes: [
                ...this.state.outcomes,
                result.data
              ]
            });
            break;

          case 'MARKET_DATA':
            result
              .data
              .outcomes
              .forEach(outcome => getData(w.send(JSON.stringify({type: "getOutcome", id: outcome}))));
            this.setState({marketData: result.data});
            break;

          default:
            return;
        }
      } catch (err) {
        throw Error(err);
      }

    });

    w.send(JSON.stringify({type: "getLiveEvents", primaryMarkets: true}))
  }
}

export function getData(options) {

  switch (w.readyState) {
    case 1:
      w.send(JSON.stringify(options));
      break;
    case 3:
      throw Error('Websocket is closed');
      break;
    default:
      const connectionCheck = setInterval(function () {

        if (w.readyState === 1) {
          clearInterval(connectionCheck);
          w.send(JSON.stringify(options));
        }
      }, 5);
  }
}