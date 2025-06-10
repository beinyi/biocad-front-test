import { Box } from "@mui/material";
import * as React from "react";

interface IAminoBoxProps {
  color: string;
  char: string;
}

const AminoBox: React.FunctionComponent<IAminoBoxProps> = ({ color, char }) => {
  return (
    <Box
      px={1}
      py={0.5}
      bgcolor={color}
      borderRadius={1}
      textAlign="center"
      minWidth="1.5ch"
    >
      {char.toLocaleUpperCase()}
    </Box>
  );
};

export default AminoBox;
