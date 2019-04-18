function getData(options = null) {

  const w = new WebSocket("ws://localhost:8889");

  w.onopen = () => {
    w.addEventListener("message", e => {
      let result = JSON.parse(e.data);

      console.log(result);

      if (result.type !== 'init') {

        this.setState({data: result.data});
      }
    });

    w.send(JSON.stringify(options
      ? options
      : {
        type: "getLiveEvents",
        primaryMarkets: true
      }))
  }
}

export default getData;