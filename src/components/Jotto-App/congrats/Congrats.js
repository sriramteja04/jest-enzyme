import React from 'react';
import PropTypes from 'prop-types'

const Congrats = (props) => {
        if(props.success) {
          return (
          <div data-test="congrats-component">
                <span data-test="congrats-message">
                        congratulations you guessed the word!
                </span>
            </div>
            )
        }
        else return(
            <div data-test="congrats-component">
            </div>
        )
}

Congrats.proptypes = {
    success: PropTypes.bool
}

export default Congrats