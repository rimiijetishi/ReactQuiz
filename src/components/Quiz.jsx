import { useState, useCallback } from "react"
import QUESTIONS from '../questions'
import Question from "./Question"
import Summary from "./Summary"
import '../style/Quiz.css'

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([])

  const activeQuestionIndex = userAnswers.length
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length


  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer]
    })
  }, [])


  const handleSkiptAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])



  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers}/>
    )
  }

  

  return (
    <div id="quiz">
      <Question 
      key={activeQuestionIndex}
      index={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
      onSkipAnswer={handleSkiptAnswer}
      />
    </div>
  )
}

