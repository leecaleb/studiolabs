import React, { useState, useEffect } from 'react'
import './Board.css'
import axios from 'axios'

const Board = ({ difficulty }) => {
	const [board, setBoard] = useState(null)
	const [boardMetadata, setBoardMetadata] = useState(null)

    useEffect (() => {
        axios.get(`/api`)
            .then((res) => {
                console.log('res: ', res)
            })
		axios.get(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`)
			.then((res) => {
				const newBoard = res.data.board
				processBoard(newBoard)
			})
	}, [difficulty])

    const processBoard = (newBoard) => {
		
		let metadata = newBoard.map((row) => {
			return row.map(cell => {
				return cell > 0
			})
		})
		setBoardMetadata(metadata)

		let processedBoard = newBoard.map((row) => {
			return row.map(cell => {
				return cell > 0 ? cell : ''
			})
		})
		setBoard(processedBoard)
	}

    const handleInput = (row,col,e) => {
		e.preventDefault()
		const { value } = e.target
		if (value !== '' && !/\b[1-9]\b/.test(e.target.value)) {
			alert('Input must be digit from 1-9')
			return
		}
		let copy = [...board]
		copy[row][col] = e.target.value
		setBoard(copy)
    }

    if (board === null) return null
    
    return (
        <div className="container">
            {[...Array(81).keys()].map((cell) => {
                let r = Math.floor(cell/9)
                let c = cell%9
                return (
                    <div 
                        className="element" 
                        key={cell}
                        data-row={r}
                        data-col={c}
                    >
                        {boardMetadata[r][c] ? 
                            <div
                                id="hint-cell"
                            >
                                {board[r][c]}
                            </div>
                            : <input
                                id="input-cell"
                                type="text"
                                value={board[r][c]}
                                pattern="[1-9]{0,1}"
                                onChange={e => handleInput(r, c, e)}
                            />
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Board