import React from 'react';
import { useState } from 'react';
import Square from '../Square/Square';
import './GameBoard.css';

export default function GameBoard(){
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleClick(i, xIsNext){
        if(squares[i] || calculateWinner(squares)){
            return;
        }
    
        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i] = "X";
        }else{
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext); 
   
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner){
        status = "Winner: " + winner;
    } else{
        status = "Next player: " + (xIsNext ? "X" : "O")
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0, xIsNext)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1, xIsNext)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2, xIsNext)} />
            </div>

            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3, xIsNext)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4, xIsNext)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5, xIsNext)} />
            </div>

            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6, xIsNext)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7, xIsNext)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8, xIsNext)} />
            </div>
        </>
    )
}


function calculateWinner(squares){
    const winScenariosPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i = 0; i < winScenariosPositions.length; i++){
        const [a, b, c] = winScenariosPositions[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}