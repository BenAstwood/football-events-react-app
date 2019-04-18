function getData() {

  const w = new WebSocket("ws://localhost:8889");

  w.onopen = () => {
    w.addEventListener("message", e => {
      let result = JSON.parse(e.data);

      if (result.type === 'LIVE_EVENTS_DATA') {

        this.setState({data: result});
      }
    });

    w.send(JSON.stringify({type: "getLiveEvents", primaryMarkets: false}))
  }
}

export default getData;