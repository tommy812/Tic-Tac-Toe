import { Square } from './square';
import './board.style.scss';
import { useState } from 'react';



function CalculateWinner(squares) {
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < winningPatterns.length; i++) {
        const [a, b, c] = winningPatterns[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);


    const handleClick = (i) => {
        if (squares[i] || CalculateWinner(squares)) {
            return; // Ignore click if square is already filled or game is won
        }
        squares[i] = isX ? 'x' : 'o';
        setSquares(squares);
        setIsX(!isX);
    }

  

    const winner = CalculateWinner(squares);
    let gameStatus;
    if (winner) {
        gameStatus = `Winner: ${winner}`;
    }
    else if (squares.every(square => square)) {
        gameStatus = 'Draw!';
    }
    else {
        gameStatus = `next player:` + (isX ? 'X' : 'O');
    }

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsX(true);
    }

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    }


    return (
        <div className="board">
            <div className="row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div>
                {gameStatus}
            </div>
            <button onClick={resetGame}>Reset Game</button>

        </div>
    )
}



export default Board;