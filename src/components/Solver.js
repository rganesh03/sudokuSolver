export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const isValid = (board, row, col, num) => {
    for(let i = 0; i < 9; i++) {
        if(board[row][i] == num|| board[i][col] == num) return false;
    }

    const boxRow = Math.floor(row/3) * 3;
    const boxCol = Math.floor(col/3) * 3;

    for(let i = boxRow; i < boxRow + 3; i++) {
        for(let j = boxCol; j < boxCol + 3; j++) {
            if (board[i][j] == num) return false;
        }
    }
    return true;
};

export const SudokuSolver = async (board, setBoard, delay) => {
    for(let row = 0; row < 9; row++) {
        for(let col = 0; col < 9; col++) {
            if(board[row][col] === "") {
                for(let i = 1; i <= 9; i++) {
                    if(isValid(board, row, col, i)) {
                        board[row][col] = i;
                        setBoard(board.map(r => [...r]));
                        await sleep(delay);

                        if (await SudokuSolver(board, setBoard, delay)) return true;

                        board[row][col] = "";
                        setBoard(board.map(r => [...r]));
                        await sleep(delay);
                    }
                }
                return false;
            }
        }
    }
    return true;
};