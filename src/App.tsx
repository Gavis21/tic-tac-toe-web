import React, { useState } from "react";
import { Box } from "@mui/material";
import "./styles.css";
import { CellValue } from "./types";
import { Board } from "./components/Board";
import { calculateWinner } from "./utils";
import { Title } from "./components/Title";
import { ResultMessage } from "./components/ResultMessage";
import { ResetButton } from "./components/ResetButton";

const BOARD_CELLS_AMOUNT = 9;

const App: React.FC = () => {
  const [boardCells, setBoardCells] = useState<CellValue[]>(
    Array(BOARD_CELLS_AMOUNT).fill(null)
  );
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<CellValue | "Tie">(null);

  const handleCellClick = (index: number) => {
    if (boardCells[index] || winner) return;

    const newBoard = [...boardCells];
    newBoard[index] = isXNext ? "X" : "O";
    setBoardCells(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);

    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!newBoard.includes(null)) {
      setWinner("Tie");
    }
  };
  
  const resetGame = (): void => {
    setBoardCells(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Title text={"Tic Tac Toe"} />
      <Board boardCells={boardCells} onCellClick={handleCellClick} />
      {winner && <ResultMessage winner={winner} />}
      {(winner || !boardCells.includes(null)) && (
        <ResetButton onClick={resetGame} />
      )}
    </Box>
  );
};

export default App;
