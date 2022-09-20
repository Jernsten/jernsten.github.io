import { Typography } from "@mui/material";

export function Text({ italic, children }: { italic?: boolean; children: React.ReactNode }) {
  const sx = italic ? { fontStyle: "italic" } : null;

  return (
    <Typography mb={3} {...sx}>
      {children}
    </Typography>
  );
}
