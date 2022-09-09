import { Button } from "@mui/material";

export function NavButton({ to, txt }: { to: string; txt: string }) {
  return (
    <Button href={to} variant="contained">
      {txt}
    </Button>
  );
}
