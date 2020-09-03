import React from 'react';
import styles from './Card.module.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Card extends React.Component {
  
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
    else if (id !== this.props.first.id) {
      this.props.selectSecondCard(id, type);
      console.log('selected second card', id);
      
    } 
  }

  clickWrapper = () => {
    this.selectCard();
    this.props.flipCard(this.props.info.id);
  }

  render() {
    return (
    <div className={`${this.props.flip?null:styles.active} ${styles.card} ${this.props.match?styles.disable:null}`} onClick={this.clickWrapper}>
      <div className={`${styles.front}`}>
      </div>
      <div className={`
       ${styles.back}`}>
        {this.props.info.back}
      </div>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    first: state.selected.first,
    second: state.selected.second,
  }
}

export default connect(mapStateToProps, actions)(Card);
