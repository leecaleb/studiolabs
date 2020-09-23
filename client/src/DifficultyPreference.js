import React from 'react'
import './DifficultyPreference.css'

const DifficultyPreference = ({ setDifficulty }) => {
    return (
        <div className="difficulty-preference-container">
            <div className="difficulty-option">
                <button type="button" className="button" onClick={() => setDifficulty('easy')}>Easy</button>
            </div>
            <div className="difficulty-option">
                <button type="button" className="button" onClick={() => setDifficulty('medium')}>Medium</button>
            </div>
            <div className="difficulty-option">
                <button type="button" className="button" onClick={() => setDifficulty('hard')}>Hard</button>
            </div>
            <div className="difficulty-option">
                <button type="button" className="button" onClick={() => setDifficulty('random')}>Random</button>
            </div>
        </div>
    )
}

export default DifficultyPreference