import { TextField } from "@mui/material";

export function Input({
  label,
  value,
  onChange,
  placeholder,
  big
}: {
  label: string | undefined;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  big?: boolean;
}) {
  const multilineProps = big ? { multiline: true, minRows: 2, maxRows: 5 } : null;
  return (
    <TextField
      {...multilineProps}
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
      sx={{ width: `${big ? "4" : "2"}00px` }}
    />
  );
}
