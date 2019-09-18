import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    counter: 0
  }

  render() {
    const {counter} = this.state
    return (
      <div className='App' data-test="App-component">
        <h1 data-test="increment-counter">The Counter is Currently {counter}</h1>
        <button 
        onClick={() => this.setState((prevState) => ({
          counter: prevState.counter+1
        }))}
        data-test="increment-button">
          Increment Counter
        </button>
      </div>
    );
  }
}

export default App;
