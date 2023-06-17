import React, { useState } from 'react';
import './style.css'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: 'What is one source of space dust??',
      options: ['comets', 'stars', 'meteors', 'planets'],
      correctAnswer: 'comets',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
      question: 'When was Pluto removed from the list of planets?',
      options: ['2008', '2006', '2007', '2009'],
      correctAnswer: '2006',
    },
    {
      question: 'What is the dark center of a sunspot called?',
      options: ['umbra', 'dark spot', 'penumbra', 'filament'],
      correctAnswer: 'umbra',
    },
    {
      question: 'The atmosphere in Mars is mostly composed of?',
      options: ['oxygen', 'CO2', 'nitrogen', 'helium'],
      correctAnswer: 'CO2',
    },
    {
      question: 'Which planet has the largest rings?',
      options: ['saturn', 'jupiter', 'naptune', 'mars'],
      correctAnswer: 'saturn',
    },
    {
      question: 'What is the Milky Way?',
      options: [' galaxy', 'star', 'planet', 'nabulae'],
      correctAnswer: 'our galaxy',
    },
    {
      question: 'Which of the following planets in our solar system have no moon?',
      options: ['venus', 'mars', 'neptune', 'jupiter'],
      correctAnswer: 'venus',
    },
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Your Score: {score}</h2>
        </div>
      ) : (
        <div className='que' >
          <h2>Question {currentQuestion + 1}</h2>
          <h3>{questions[currentQuestion].question}</h3>
          <div>
            {questions[currentQuestion].options.map((option) => (
              <button className='opt' key={option} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
