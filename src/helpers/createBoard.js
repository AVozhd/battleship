import genCharArray from "./genCharArray.js";

const createBoard = () => {
  const board = {};
  const char_array = genCharArray();
  for (let i = 1; i <= char_array.length; i++) {
    board[char_array[i - 1]] = [];
    for (let j = 1; j <= char_array.length; j++) {
      board[char_array[i - 1]].push({
        index: `${char_array[i - 1]}${j}`,
        state: "empty"
      });
    }
  }
  return board;
};

export default createBoard;
