import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import { aminoColors } from "@/utils/aminoColors";
import AminoBox from "@/components/AminoBox";

interface ISequenceAlignmentProps {
  sequence1: string;
  sequence2: string;
}

const getColor = (char: string) => aminoColors[char.toUpperCase()] || "#ccc";

const isMatch = (char1: string, char2: string) =>
  char1.toUpperCase() === char2.toLocaleUpperCase();

const SequenceAlignment: React.FunctionComponent<ISequenceAlignmentProps> = ({
  sequence1: seq1,
  sequence2: seq2,
}) => {
  const len = Math.min(seq1.length, seq2.length);
  const chars = Array.from({ length: len }, (_, i) => i);

  return (
    <Box mt={4}>
      <Typography variant="h6" mb={2}>
        Результат выравнивания
      </Typography>

      <Grid container spacing={0.5} wrap="wrap">
        {chars.map((i) => (
          <Grid
            key={`top-${i}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Верхний символ */}
            <AminoBox color={getColor(seq1[i])} char={seq1[i]} />

            {/* Нижний символ */}
            <AminoBox
              color={
                isMatch(seq1[i], seq2[i]) ? "transparent" : getColor(seq2[i])
              }
              char={seq2[i]}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SequenceAlignment;
