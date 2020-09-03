import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions'

const ResultPage = (props) => {
    return (
        <div>
            <p>Congratulations!</p>
            <p> You've finished the game.</p>
            <Link to='/'>
                <button onClick={props.resetMatchedCards}>
                    Restart
                </button>
            </Link>
        </div>
        )
}

export default connect(null, actions)(ResultPage);