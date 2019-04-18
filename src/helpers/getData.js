const w = new WebSocket("ws://localhost:8889");

export function initWebSocket() {

  w.onopen = () => {
    w.addEventListener("message", e => {

      try {
        let result = JSON.parse(e.data);

        switch (result.type) {
          case 'INIT':
            return;
            break
          case 'MARKET_DATA':
            this.setState({marketData: result.data});
            break;
          default:
            this.setState({data: result.data})
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