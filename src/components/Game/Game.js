import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess";
import PreviousGuesses from "../PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Track all guesses here to parse into PreviousGuesses component
  const [previousGuesses, setPrevGuesses] = React.useState([]);

  // this function takes a tentative guess and appends it to the previous guesses
  // It's called in the Guess component
  // the storage of previousGuesses array can then be used in the PreviousGuesses component
  function handlePreviousGuesses(tentativeGuess) {
    setPrevGuesses((prevGuesses) => [...prevGuesses, tentativeGuess]);
  }

  return (
    <>
      <PreviousGuesses PreviousGuesses={previousGuesses} Answer={answer}/>
      <Guess HandlePreviousGuesses={handlePreviousGuesses}/>
    </>
  );
}

export default Game;
