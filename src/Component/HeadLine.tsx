import { Typography } from "@mui/material";

export function HeadLine({ children }: { children: string }) {
  return (
    <Typography variant="h4" mb={5}>
      {children}
    </Typography>
  );
}
