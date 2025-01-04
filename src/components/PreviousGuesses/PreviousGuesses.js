import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import GuessRow from '../GuessRow';

function PreviousGuesses({PreviousGuesses, Answer}) {
  return <div className="guess-results">
    {/* Loop through and display previous guesses in wordle squares */}
    {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
      <GuessRow key={num} value={PreviousGuesses[num]} answer={Answer}/>
    ))}
  </div>;
}

export default PreviousGuesses;
