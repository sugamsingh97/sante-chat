import React from 'react';
import '../styles/Question.css';

const Question = ({ number, title, description, label, options, selectedOption, onSelect }) => (
    <div className="question-row">
        <div className="question-content">
            <h2>
                <span className="question-number">{number}.</span> {title}
            </h2>
            {description && <div className="question-desc">{description}</div>}
            {label && <div className="question-label">{label}</div>}
            <div className="question-options">
                {options.map((option, idx) => (
                    <button
                        key={idx}
                        className={`option-btn${selectedOption === option.value ? ' selected' : ''}`}
                        onClick={() => onSelect(option.value)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    </div>
);

export default Question; 