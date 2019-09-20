import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTest, checkProps } from '../../../../util/testing_util';
import GuessedWords from './GuessdWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

describe('Testing <GuessWords /> Prop-Types', () => {
  test('should not throw an error with expected props', () => {
    checkProps(GuessedWords, defaultProps);
  });
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      guessedWords: []
    };
    wrapper = setup({ ...props });
  });

  test('renders without error', () => {
    const guessedComponent = findByDataTest(wrapper, 'guessed-Component');
    expect(guessedComponent.length).toBe(1);
  });

  test('renders instructions for user to guess word', () => {
    const instructions = findByDataTest(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});
