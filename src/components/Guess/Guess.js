// GuessResults equivalent
import React from "react";

function Guess({HandlePreviousGuesses}) {
  const [guess, setGuess] = React.useState("");

  // clear input field after submitting
  function handleSubmit(event) {
    event.preventDefault();
    
    HandlePreviousGuesses(guess)
    setGuess(""); // clear input field
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          setGuess((event.target.value).toUpperCase());
        }}
      />
    </form>
  );
}

export default Guess;
