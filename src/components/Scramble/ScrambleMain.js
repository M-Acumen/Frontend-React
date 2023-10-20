import React, { useState } from "react";
import posed from "react-pose";
import "./UnscrambleGame.css";
import { Button } from "reactstrap";
import LoaderPink from './LoaderPink'
import { Link } from "react-router-dom";

const Animation = posed.div({
  scramble: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1000 },
  },
  unscramble: {
    opacity: 0,
    scale: 1.2,
    transition: { duration: 1000 },
  },
});

const UnscrambleGame = () => {
  const scrambleWord = (word) => {
    return word
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
  };

  const wordList = ["unscramble", "gorgeous", "maroon", "development", "local"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrambled, setIsScrambled] = useState(true);
  const [userAnswer, setUserAnswer] = useState("");
  const [scrambledWord, setScrambledWord] = useState(scrambleWord(wordList[0]));

  const toggleScramble = () => {
    setIsScrambled((prevIsScrambled) => !prevIsScrambled);
  };

  const handleChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const checkAnswer = () => {
    const currentWord = wordList[currentIndex].toLowerCase();

    if (userAnswer.toLowerCase() === currentWord) {
      alert("Correct! You unscrambled the word.");
      goToNextWord();
    } else {
      alert("Try again. Your answer is incorrect.");
    }
    setUserAnswer("");
  };

  const goToNextWord = () => {
    if (currentIndex < wordList.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsScrambled(true);
      setUserAnswer("");
      setScrambledWord(scrambleWord(wordList[currentIndex + 1]));
    } else {
      alert("You have completed all words!");
    }
  };

  return (
    <div className="unscramble-container" style={{ paddingTop: "200px"}}>
    <div >
      <h2 className="title-scramble" style={{color: "#404040"}}>Unscramble The Word</h2>
      <Animation
        pose={isScrambled ? "scramble" : "unscramble"}
        className="word-animation"
        style={{ fontFamily: "cursive", fontSize: "2.2rem" }}
      >
        {isScrambled ? scrambledWord : wordList[currentIndex]}
      </Animation>
      <div className="answer-container">
        <input type="text" value={userAnswer} placeholder="Enter Word" onChange={handleChange} />
      </div>

      <div style={{display: "flex", gap: "50px", justifyContent: "center"}}>
        <Button color="primary" outline onClick={toggleScramble}>
          {isScrambled ? "Unscramble" : "Scramble"}
        </Button>
        <Button color="secondary" outline onClick={checkAnswer}>
          Submit
        </Button>
      </div>
      <br />
      <br />
      <LoaderPink />
      <Link to='/home'>
      <Button
    color="danger"
    outline
    style={{marginTop: "20px"}}
  >
    {'< '}Back
  </Button>
  </Link>
    </div>
    </div>
  );
};

export default UnscrambleGame;
