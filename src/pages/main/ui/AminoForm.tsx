import { Box, Button, Stack, Typography } from "@mui/material";
import * as React from "react";
import AminoInput from "@/components/input/AminoInput";
import { useForm } from "react-hook-form";
import type { FormValues } from "./types";

interface IAminoFormProps {
  onSubmit: (data: FormValues) => void;
}

const AminoForm: React.FunctionComponent<IAminoFormProps> = ({
  onSubmit: indexOnSubmit,
}) => {
  const { control, handleSubmit, clearErrors, watch } = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: {
      sequence1: "",
      sequence2: "",
    },
  });
  const sequence1 = watch("sequence1");

  const onSubmit = (data: FormValues) => {
    clearErrors("sequence2");

    const len1 = data.sequence1.length;
    const len2 = data.sequence2.length;

    if (len1 !== len2) {
      if (len2 < len1) {
        data.sequence2 = data.sequence2 + "-".repeat(len1 - len2);
      } else {
        data.sequence2 = data.sequence2.slice(0, len1);
      }
    }

    indexOnSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          maxWidth: 500,
          mx: "auto",
          width: "100%",
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h6">
            Аминокислотные последовательности
          </Typography>
          <AminoInput<FormValues>
            name="sequence1"
            control={control}
            label="Последовательность 1"
          />
          <AminoInput<FormValues>
            name="sequence2"
            control={control}
            label="Последовательность 2"
            maxLength={sequence1.length}
          />
          <Button type="submit" variant="contained">
            Проверить
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default AminoForm;
