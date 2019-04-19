import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import OutcomeCardContainer from '../molecules/OutcomeCardContainer';
import {getData} from '../../helpers/getData';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '50%',
    backgroundColor: 'white',
    boxShadow: theme.shadows[5],
    padding: '2rem',
    outline: 'none',
    'overflow-y': 'scroll',
    'max-height': '90%'
  }
});

class MarketsModal extends React.Component {
  state = {
    open: false
  };

  getData = getData.bind(this)

  handleOpen = () => {
    getData({type: "getMarket", id: this.props.marketId[0]})
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const {classes} = this.props;
    const {marketData} = this.props.props;

    return (
      <div>
        <Button
          onClick={this.handleOpen}
          variant="contained"
          color="primary"
          className={classes.button}>
          View market
        </Button>
        <Modal
          aria-labelledby="markets-modal"
          open={this.state.open}
          onClose={this.handleClose}>
          <div className={classes.paper}>
            {this.props.props.marketData
              ? <div>
                  <Typography variant="h6" id="modal-title">{this.props.props.marketData.name}</Typography>
                  <OutcomeCardContainer data={this.props.props.outcomes}/>
                </div>
              : <Typography variant="h6" id="modal-title">Loading market...</Typography>}
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(MarketsModal);