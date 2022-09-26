import { Box } from "@mui/material";
import { HeadLine, NavButton, Text } from "../Component";

export default function Start() {
  return (
    <Box>
      <HeadLine>Du tänker för mycket</HeadLine>
      <Text>
        Den vänstra hjärnhalvans uppgift är att berätta vad som händer inom och utanför dig. Det är den rösten du hör
        tänka, analysera, resonera, kritsera.
      </Text>
      <Text>
        Bakom jiddret finns det en tystnad som lyssnar och hör. Men tystnaden kan tala, dock måste du bli stilla en
        stund för att höra sanningen.
      </Text>
      <Text>
        Du kan använda detta verktyg för att bearbeta dina tankar och känslor. Se det som en förhöjd meditation, eller
        självterapi.
      </Text>

      <NavButton to="who-whew-where" txt="Sätt igång" />
    </Box>
  );
}
