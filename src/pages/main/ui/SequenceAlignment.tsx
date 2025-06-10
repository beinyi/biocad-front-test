import { Box, Typography } from "@mui/material";
import * as React from "react";
import { aminoColors } from "@/utils/aminoColors";
import AminoBox from "@/components/AminoBox";
import { useItemsPerRow } from "../hooks/useItemsPerRow";
import { useRef } from "react";
import { useTextSelect } from "../hooks/useTextSelect";

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const len = Math.min(seq1.length, seq2.length);
  const itemsPerRow = useItemsPerRow(len);
  const chunksCount = Math.ceil(len / itemsPerRow);
  useTextSelect(containerRef);

  return (
    <Box mt={4}>
      <Typography variant="h6" mb={2}>
        Результат выравнивания
      </Typography>

      <Box ref={containerRef}>
        {Array.from({ length: chunksCount }).map((_, idx) => {
          const start = idx * itemsPerRow;
          const end = start + itemsPerRow;
          const topChunk = seq1.slice(start, end).split("");
          const bottomChunk = seq2.slice(start, end).split("");

          return (
            <Box key={idx} mb={1}>
              <Box component="pre">
                {topChunk.map((char, i) => (
                  <AminoBox
                    key={`t-${idx}-${i}`}
                    color={getColor(char)}
                    char={char}
                  />
                ))}
              </Box>
              <Box component="pre">
                {bottomChunk.map((char, i) => (
                  <AminoBox
                    key={`b-${idx}-${i}`}
                    color={
                      isMatch(seq1[start + i], char)
                        ? "transparent"
                        : getColor(char)
                    }
                    char={char}
                  />
                ))}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SequenceAlignment;
