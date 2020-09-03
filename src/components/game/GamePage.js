import React from 'react';
import CardsContainer from './CardsContainer';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class GamePage extends React.Component {
  render (){
    if (this.props.matched.length === 6) {
      return <Redirect to='/result' />
    }
  return (
    <div >
      <CardsContainer />
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    matched: state.matched
  }
}


export default connect(mapStateToProps)(GamePage);
