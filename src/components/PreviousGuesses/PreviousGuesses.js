import React from 'react';

function PreviousGuesses({PreviousGuesses}) {
  return <div className="guess-results">
    {/* Loop through and display previous guesses */}
    {PreviousGuesses.map((guess, index) => (
      <p key={index} className="guess">{guess}</p>
    ))}
  </div>;
}

export default PreviousGuesses;
