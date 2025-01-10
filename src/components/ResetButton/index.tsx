import { Button } from "@mui/material";
import React from "react";

interface ResetButtonProps {
  onClick: () => void;
}
export const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => (
  <Button variant="contained" onClick={onClick}>
    Play Again
  </Button>
);
