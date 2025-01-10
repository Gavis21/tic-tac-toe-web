import { Typography } from "@mui/material";
import React from "react";
import { CellValue } from "../../types";

interface ResultMessageProps {
  winner: "Tie" | CellValue;
}
export const ResultMessage: React.FC<ResultMessageProps> = ({ winner }) => (
  <Typography variant="h6" gutterBottom>
    {winner === "Tie" ? "It's a tie!" : `Winner: ${winner}`}
  </Typography>
);
