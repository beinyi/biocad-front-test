import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { TextField, type TextFieldProps } from "@mui/material";
import { allowedChars, filterAminoInput } from "@/utils/aminoValidator";

interface AminoInputProps<T extends FieldValues>
  extends Omit<TextFieldProps, "name"> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  required?: boolean;
  maxLength?: number;
}

const AminoInput = <T extends FieldValues>({
  name,
  control,
  label = "Аминокислотная последовательность",
  required = true,
  maxLength,
  ...textFieldProps
}: AminoInputProps<T>) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    onChange: (val: string) => void
  ) => {
    let cleaned = filterAminoInput(e.target.value);
    if (maxLength) {
      cleaned = cleaned.slice(0, maxLength);
    }
    onChange(cleaned);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required && "Обязательное поле",
        validate: (value) =>
          allowedChars.test(value) ||
          "Недопустимые символы в последовательности",
      }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          onChange={(e) => handleChange(e, field.onChange)}
          label={label}
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
          fullWidth
          autoComplete="off"
          {...textFieldProps}
        />
      )}
    />
  );
};

export default AminoInput;
