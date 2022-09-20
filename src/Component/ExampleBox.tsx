import { Box, Card } from "@mui/material";
import s from "./Styles.module.sass";

export function ExampleBox({ children }: { children: React.ReactNode }) {
  return (
    <Card className={s.ExampleBox}>
      <Box p={3}>{children}</Box>
    </Card>
  );
}
