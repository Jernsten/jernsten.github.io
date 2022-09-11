import { Typography } from "@mui/material";

export function Text({ children }: { children: React.ReactNode }) {
  return <Typography mb={3}>{children}</Typography>;
}
