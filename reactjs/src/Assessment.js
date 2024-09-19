// src/Assessment.js
import React, { useState, useEffect } from 'react';

const Assessment = () => {
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  // Fetch the questions when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/api/assessment')
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);

  // Handle option selection
  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  // Handle form submission and calculate result
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let attentionScore = 0;
    let hyperactivityScore = 0;
    let impulsivityScore = 0;

    // Loop through each question and tally correct answers
    questions.attention.forEach((q) => {
      if (answers[q.question_id] === q.correct_option) {
        attentionScore++;
      }
    });

    questions.hyperactivity.forEach((q) => {
      if (answers[q.question_id] === q.correct_option) {
        hyperactivityScore++;
      }
    });

    questions.impulsivity.forEach((q) => {
      if (answers[q.question_id] === q.correct_option) {
        impulsivityScore++;
      }
    });

    // Determine result based on score
    let resultMessage = 'Your kid is doing fine in all categories.';
    if (attentionScore >= 2) resultMessage = 'Your kid may have Attention problems.';
    if (hyperactivityScore >= 2) resultMessage = 'Your kid may have Hyperactivity problems.';
    if (impulsivityScore >= 2) resultMessage = 'Your kid may have Impulsivity problems.';

    setResult(resultMessage);
  };

  return (
    <div className="assessment">
      <h1>Assessment</h1>
      {questions ? (
        <form onSubmit={handleSubmit}>
          {['attention', 'hyperactivity', 'impulsivity'].map((category) => (
            <div key={category}>
              <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              {questions[category].map((question) => (
                <div key={question.question_id} className="question-block">
                  <p>{question.question_text}</p>
                  {[question.option1, question.option2, question.option3, question.option4].map((option, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name={`question-${question.question_id}`}
                        value={option}
                        onChange={() => handleOptionChange(question.question_id, option)}
                        required
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ))}
            </div>
          ))}
          <button type="submit">Submit Assessment</button>
        </form>
      ) : (
        <p>Loading questions...</p>
      )}
      {result && <p>{result}</p>}
    </div>
  );
};

export default Assessment;
