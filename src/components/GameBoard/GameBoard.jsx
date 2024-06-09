import React from 'react';
import Square from '../Square/Square';

export default function GameBoard(){
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>

            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>

            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
}