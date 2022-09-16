import { Box, Card } from "@mui/material";
import { HeadLine, Text } from "../Component";
import { getLocalStorageKeys } from "../Hooks/useLocalStorage";

export default function HowDoYouFeel() {
  const { theSituation, where, when, who } = getLocalStorageKeys("theSituation", "where", "when", "who");
  return (
    <Box>
      <HeadLine>Hur känns det? 🧘🏼‍♂️</HeadLine>
      <Text>
        Blunda och res tillbaka till {when} när du var {where} med {who}.<br />
      </Text>
      <Card>{theSituation}</Card>
    </Box>
  );
}
