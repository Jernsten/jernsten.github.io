import { Box } from "@mui/material";

export function PaddedBox({ children }: { children?: React.ReactNode }) {
  return (
    <Box pt={1} pb={1} mb={1} mt={1}>
      {children}
    </Box>
  );
}
