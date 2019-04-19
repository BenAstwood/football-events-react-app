function toggleDecimal() {

  switch (this.state.toggleDecimal) {

    case false:
      this.setState({toggleDecimal: true});
      break;

    case true:
      this.setState({toggleDecimal: false});
      break;

    default:
      this.setState({toggleDecimal: true});
  }

  this.setState({outcomes: []})
}

export default toggleDecimal;