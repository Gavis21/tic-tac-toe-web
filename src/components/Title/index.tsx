import { Typography } from "@mui/material";
import React from "react";

interface TitleProps {
  text: string;
}
export const Title: React.FC<TitleProps> = ({ text }) => (
  <Typography variant="h3" gutterBottom>
    {text}
  </Typography>
);
