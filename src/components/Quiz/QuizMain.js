import React, { useState } from 'react'
import './quiz.css'

const QuizMain = () => {
  const [isAnswer, setAnswer] = useState(null);

  const Questions = [
    {id: 1, 
    question: 'What is the first planet in the solar system ?',
    options: ['Mercury', 'Earth', 'Saturn', 'Mars'],
    correct: 'A'    
    }, 
{
    
}];

  return (
    <div>
      quiz main

    </div>
  )
}

export default QuizMain