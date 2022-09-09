import { Typography } from "@mui/material";

export function Text({ children }: { children: React.ReactNode }) {
  return (
    <Typography style={{ whiteSpace: "pre-line" }} mb={3}>
      {children}
    </Typography>
  );
}
