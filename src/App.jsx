import React from "react";
import SudokuBoard from "./components/Board/SudokuBoard";
import "./App.css"

function App() {
  return (
    <div className="main"> 
      <h1> Sudoku Solver</h1>
      <SudokuBoard />
    </div>
  );
}

export default App;
