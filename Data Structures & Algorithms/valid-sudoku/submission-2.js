class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const set = new Set();


        // check rows

        for (let i = 0; i < 9; i++) {
            set.clear();
            for (let j = 0; j < 9; j++) {
                if (set.has(board[i][j])) return false;
                if (board[i][j] !== '.') set.add(board[i][j])
            }
        }

        // check columns

        for (let i = 0; i < 9; i++) {
            set.clear();
            for (let j = 0; j < 9; j++) {
                if (set.has(board[j][i])) return false;
                if (board[j][i] !== '.') set.add(board[j][i])
            }
        }

        // check square
        let row = 0;
        let col = 0 
        while (row < 9 && col < 9) {
            set.clear();
            // let initalRow = row;
            // let initalCol = col;
            for (let i = row; i < row + 3; i ++ ) {
                for (let j = col; j < col + 3; j++) {
                    if (set.has(board[j][i])) return false;
                    if (board[j][i] !== '.') set.add(board[j][i])
                }
            }
            col = col + 3;
            if (col === 9 && row < 9) {
                row = row+3;
                col = 0;
            }
        }
        return true;
    }
}
