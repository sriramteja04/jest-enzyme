import React from 'react';
import './App_CSS/App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Congrats from './components/Jotto-App/congrats/Congrats';

class App extends React.Component {

  state = {
    counter: 0
  }

  incrementHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
      error: false
    }))
  }
  
  decrementHandler = () => {
    this.state.counter >= 0 && this.setState({
      counter: this.state.counter - 1
    }, () => {
      if(this.state.counter - 1 < 0) {
        this.setState({
          error: true
        })
      }
    })
  }

  render() {
    const {counter, error} = this.state;
    // console.log(counter);
    return (
      
        <div className='App' data-test="App-component">
          <h1 data-test="increment-counter">The Counter is Currently {counter < 0 ? 0 : counter}</h1>
          {error && <h4 className="error-message" data-test="error-message">Counter Should be greater than 0</h4> }
          <button
            className="btn increment-button" 
            onClick={this.incrementHandler}
            data-test="increment-button">
              Increment Counter
          </button>

          <button
            name="dec" 
            className="btn decrement-button"
            onClick={this.decrementHandler}
            data-test='decrement-button'>
              Decrement Counter
          </button>

          <BrowserRouter>
              <div className="link">
                <Link className="btn link" to='/jotto-app'>
                  Congrats Component
                </Link>
              </div>
            <Route exact path="/jotto-app" component={Congrats}/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
