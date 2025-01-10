import { Box, Button } from "@mui/material";
import React from "react";
import { CellValue } from "../../types";
import xImage from "../../assets/X.jpg";
import oImage from "../../assets/O.png";

interface BoardProps {  
    boardCells: CellValue[],
    onCellClick: (index: number) => void
}
export const Board: React.FC<BoardProps> = ({boardCells, onCellClick}) => {
    const renderCellContent = (cellValue: CellValue) => {
        if (cellValue === "X")
          return (
            <Box
              component="img"
              src={xImage}
              alt="X"
              sx={{ width: "50px", height: "50px" }}
            />
          );

        if (cellValue === "O")
          return (
            <Box
              component="img"
              src={oImage}
              alt="O"
              sx={{ width: "50px", height: "50px" }}
            />
          );

        return null;
      };

    return <Box
    display="grid"
    gridTemplateColumns="repeat(3, 100px)"
    gap={1}
    mb={2}
  >
    {boardCells.map((value, index) => (
      <Button
        key={index}
        variant="outlined"
        onClick={() => onCellClick(index)}
        sx={{
          width: 100,
          height: 100,
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {renderCellContent(value)}
      </Button>
    ))}
  </Box>
}