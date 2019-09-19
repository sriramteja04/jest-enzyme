import React from 'react';

export default (props) => {
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