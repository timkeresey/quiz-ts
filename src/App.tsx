import React from 'react';
//Components
import QuestionCard from './components/QuestionCard';

const App = () => {

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button classname="start" onclick={startTrivia}>
        start
      </button>
      <p classname="score">Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard />
      <button classname="next" onClick={nextQuestion}>
        Next Question
      </button>  
    </div>
  );
}

export default App;
