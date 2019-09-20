import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import {findByDataTest} from '../util/testing_util';

/** 
 * Function to create ShallowWrapper copy for an App component
 * @function setUp
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
*/
const setUp = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if(state) wrapper.setState(state)
  return wrapper
}

describe("Testing <APP />", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = setUp();
  })

  it('renders without error', () => {
    const component = findByDataTest(wrapper,'App-component');
    expect(component.length).toBe(1);
  });
  
  it('renders increment button', () => {
    const button = findByDataTest(wrapper,'increment-button');
    expect(button.length).toBe(1);
  });

  it('renders counter display', () => {
    const counter = findByDataTest(wrapper,'increment-counter');
    expect(counter.length).toBe(1);
  })

  it('renders counter starts at 0', () => {
    expect(wrapper.state('counter')).toEqual(0);
  });

  it('renders clicking button increments counter display', () => {
    let counter = 7;
    wrapper = setUp(null, {counter});

    //Render Button and simulate
    const button = findByDataTest(wrapper, 'increment-button');
    button.simulate('click');

    const counterDisplay = findByDataTest(wrapper, 'increment-counter');
    expect(counterDisplay.text()).toContain(8);
  });

  it('renders decrement counter', () => {
    let counter = 7;
    wrapper = setUp(null, {counter});

    //Render Button and simulate
    const button = findByDataTest(wrapper, 'decrement-button');
    button.simulate('click');

    const counterDisplay = findByDataTest(wrapper, 'increment-counter');    
    expect(counterDisplay.text()).toContain(6)
  });

  it('display an error message', () => {
    let counter = 0;
    wrapper = setUp(null, {counter});

    //Render Button and simulate
    const button = findByDataTest(wrapper, 'decrement-button');
    button.simulate('click');

    //Error-Message
    const errorMessage = findByDataTest(wrapper, 'error-message');
    expect(errorMessage.length).toBe(1);

    //Never displays less than 0
    const counterDisplay = findByDataTest(wrapper, 'increment-counter');  
    expect(counterDisplay.text()).toContain(0);
  })

});