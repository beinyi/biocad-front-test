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
  const { control, handleSubmit, setError, clearErrors, watch } =
    useForm<FormValues>({
      mode: "onSubmit",
      defaultValues: {
        sequence1: "",
        sequence2: "",
      },
    });
  const sequence1 = watch("sequence1");

  const onSubmit = (data: FormValues) => {
    clearErrors("sequence2");
    if (data.sequence1.length !== data.sequence2.length) {
      setError("sequence2", {
        type: "manual",
        message: "Последовательности должны быть одинаковой длины",
      });
      return;
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
