import React from 'react';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

const setUp = () => {
  const wrapper = shallow(<App />);
  return wrapper;
}

const findByDataTest = (component,attr) => {
  const test = component.find(`[data-test='${attr}']`);
  return test
}

describe("Testing <APP />", () => {
  it('renders without error', () => {
    const component = setUp();
    const result = findByDataTest(component,'App-component');
    expect(result.length).toBe(1);
  });
  
  it('renders increment button', () => {

  });

  it('renders counter display', () => {

  })

  it('renders counter starts at 0', () => {

  });

  it('renders clicking button increments counter display', () => {

  });
});