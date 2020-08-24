import React from 'react';
import styles from './Card.module.css';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flip: false,
      matched: false
    }
  }

  flipCard = () => {
    this.setState({flip: !this.state.flip})
  }

  selectCard = () => {
    //selects the card
    //passes the selected card to the action creator
    //if two cards are selected reset the cards
    const id = this.props.info.id;
    const type = this.props.info.type;
    if(!this.props.second && !this.props.first) {
      this.props.selectFirstCard(id, type);
      console.log('selected first card', id);
    }
    else {
      this.props.selectSecondCard(id, type);
      console.log('selected second card', id);
      
    }  
  }



  clickWrapper = () => {
    this.flipCard();
    this.selectCard();
  }

  render() {
    return (
    <div className={styles.card} onClick={this.clickWrapper}>
      <div className={`${this.state.flip?styles.hidden:styles.active} ${styles.front}`}>
      </div>
      <div className={this.state.flip?styles.active:styles.hidden}>
        {this.props.info.back}
      </div>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    first: state.selected.first,
    second: state.selected.second
  }
}

export default connect(mapStateToProps, actions)(Card);
