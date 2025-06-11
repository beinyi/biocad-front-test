import { Box } from "@mui/material";
import * as React from "react";

interface IAminoBoxProps {
  color: string;
  char: string;
}

const AminoBox: React.FunctionComponent<IAminoBoxProps> = ({ color, char }) => {
  return (
    <Box
      component="span"
      display="inline-block"
      px={1}
      mx={0.2}
      py={0.5}
      bgcolor={color}
      borderRadius={1}
      textAlign="center"
      minWidth="3.5ch"
    >
      {char.toLocaleUpperCase()}
    </Box>
  );
};

const PreBox: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </Box>
  );
};

const AminoBoxWithPre = Object.assign(AminoBox, {
  Pre: PreBox,
});

export { AminoBoxWithPre as AminoBox };
