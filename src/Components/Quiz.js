import React, { useState, useContext } from 'react';
import { QuizContext } from '../helpers/context';
import { Questions } from "../helpers/Questionbank";

function Quiz() {

  const { score , setScore , setGameState } = useContext(QuizContext);
  
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].answer == optionChosen){
      setScore(score+1);
    }
    setCurrQuestion(currQuestion + 1);
  };
const finishQuiz = () => {
  if (Questions[currQuestion].answer == optionChosen){
    setScore(score+1);
}
setGameState("endScreen");
}
  return (
    <div className='Quiz'> 
    <h1>{Questions[currQuestion].prompt}</h1>
    <div className='options'>
      <button onClick={() => setOptionChosen("A")}>
        { Questions[currQuestion].OptionA }
        </button>
      <button onClick={() => setOptionChosen("B")}>{ Questions[currQuestion].OptionB }</button>
      <button onClick={() => setOptionChosen("C")}>{ Questions[currQuestion].OptionC }</button>
      <button onClick={() => setOptionChosen("D")}>{ Questions[currQuestion].OptionD }</button>
      </div>

      {currQuestion == Questions.length -1 ? (
       <button onClick={finishQuiz}> Finish Quiz </button>
      ) : (<button onClick={nextQuestion}>Next Question</button>
      )}
       
      </div>
  );
  
  
}

export default Quiz;