import React, { useState } from 'react';
import { SudokuSolver } from '../Solver';
import Cell from '../Cell/Cell';
import styles from './SudokuBoard.module.css';

const initialBoard = [
  [5, 3, '', '', 7, '', '', '', ''],
  [6, '', '', 1, 9, 5, '', '', ''],
  ['', 9, 8, '', '', '', '', 6, ''],
  [8, '', '', '', 6, '', '', '', 3],
  [4, '', '', 8, '', 3, '', '', 1],
  [7, '', '', '', 2, '', '', '', 6],
  ['', 6, '', '', '', '', 2, 8, ''],
  ['', '', '', 4, 1, 9, '', '', 5],
  ['', '', '', '', 8, '', '', 7, 9]
];

function SudokuBoard() {
    const [board, setBoard] = useState(initialBoard);

    const handleCellChange = (rowIndex, colIndex, value) => {
        const val = value === '' ? '' : parseInt(value);
        if(val === '' || (Number.isInteger(val) && val >= 1 && val <= 9)) {
            const updateBoard = board.map((row, r) =>
                row.map((cell, c) => (r === rowIndex && c === colIndex ? val : cell))
            );
            setBoard(updateBoard)
        }
    };

    const handleSolve = async () => {
        const boardCopy = board.map(row => [...row]);
        const solved = await SudokuSolver(boardCopy, setBoard, 5);
        // if (!solved) {
        //     alert("No solution found!");
        // }
    };

    const clearBoard = () => {
        const emptyBoard = Array.from( {length: 9}, () => Array(9).fill('') );
        setBoard(emptyBoard);
    }

    const resetBoard = () => {
        setBoard(initialBoard);
    }



    return (
        <div className={styles.wrapper}>
            <div className={styles.boardContainer}>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                {row.map((cell, colIndex) => (
                    <Cell
                    value={cell}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                    onChange={handleCellChange}
                    key={colIndex}
                    />
                ))}
                </div>
            ))}
            </div>
            <div className={styles.buttonGroup}>
                <button onClick={handleSolve}>Solve</button>
                <button onClick={clearBoard}>Clear</button>
                <button onClick={resetBoard}>Reset Board</button>
            </div>
        </div>
    );
}


export default SudokuBoard;