import React, { useState, useEffect } from 'react';
import { fetchQuizQuestions } from './API'
import QuestionCard from './components/QuestionCard'
import { Difficulty } from './API'
import './App.css';

const TOTAL_QUESTIONS = 10

function App() {

  const [loading,setLoading]=useState(false)
  const [questions,setQuestions] = useState([])
  const [number,setNumber] = useState(0)
  const [userAnswers,setUserAnswers] = useState([])
  const [score,setScore]=useState(0)
  const [gameOver,setGameOver] = useState(true)


  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }
  const prevQuestion = () => {

  }
  ///comment

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
  
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ....... </p>
      {/* <QuestionCard 
        questionNr={ number + 1} 
        totalQuestions= {TOTAL_QUESTIONS} 
        question={ questions[number].question}
        answers={ questions[number].answers}
        userAnswer={ userAnswers ? userAnswers[number] : undefined } /> */}
    </div>
  );
}

export default App;
