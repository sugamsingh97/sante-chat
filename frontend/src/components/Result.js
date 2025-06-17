import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="result-container">
      <h2>Résultats du Quiz</h2>
      <div className="answers-summary">
        {Object.entries(answers).map(([questionId, answer]) => (
          <div key={questionId} className="answer-item">
            <p><strong>Question {questionId}:</strong> {answer}</p>
          </div>
        ))}
      </div>
      <button onClick={handleRestart} className="restart-button">
        Recommencer le Quiz
      </button>
    </div>
  );
};

export default Result; 