import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "../../actions";

const PlayButton = (props) => {
  return (
    <Link to='game'>
    <div onClick={props.fetchCards}>
      {/*Illustration of petri dish*/}
      <p className="fetch-cards" style={{fontWeight: 'bold'}}>Play</p>
    </div>
    </Link>
  )
}

export default connect(null, actions)(PlayButton);
