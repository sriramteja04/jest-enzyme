import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
  return (
    <div data-test='guessed-Component'>
      {!props.guessedWords.length ? (
        <div data-test='guess-instructions'>Try to Guess the secret word!</div>
      ) : (
        <div data-test='guessed-words'>
          <h3>Guessed Words</h3>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {props.guessedWords.map((word, index) => (
                <tr data-test="guessed-word" key={index}>
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

GuessedWords.proptypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
