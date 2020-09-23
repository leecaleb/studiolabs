import React, { useState } from 'react'
import './App.css'
import { hot } from 'react-hot-loader/root'
import DifficultyPreference from './DifficultyPreference'
import Board from './Board'

function App () {
	const [difficulty, setDifficulty] = useState('easy')

	return (
		<div className='App' style={{ alignItems: 'center' }}>
			<h1>Sudoku: pick your level of difficulty to start the game!</h1>
			<DifficultyPreference 
				setDifficulty={(difficulty) => setDifficulty(difficulty)}
			/>
			<Board
				difficulty={difficulty}
			/>
		</div>
	);
}

export default hot(App)
