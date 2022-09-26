import { Box } from "@mui/material";
import { ExampleBox, HeadLine, NavButton, PaddedBox, Text, Input } from "../Component";
import { getLocalStorageKeys, useLocalStorage } from "../Hooks/useLocalStorage";
import { change } from "./WhoWhenWhere";

export default function TheSituation() {
  const { who, where, when } = getLocalStorageKeys("who", "where", "when");

  const [theSituation, setTheSituation] = useLocalStorage("theSituation");

  const previewText = `Vad hände ${when} när du var ${where} med ${who}?`;
  const displayPreviewText = previewText[0].toUpperCase() + previewText.substring(1);

  return (
    <Box>
      <HeadLine>Berätta ✍🏽</HeadLine>
      <PaddedBox>
        <Text>
          {displayPreviewText} <br /> Skriv kortfattat. Var extremt ärlig, skriv helt utan filter!
        </Text>
      </PaddedBox>
      <Input big label="Vad var det som hände?" value={theSituation} onChange={change(setTheSituation)} />
      <PaddedBox>
        <ExampleBox>Exempel: Jag bråkade med Matilda och hon sa att jag var oförskämd.</ExampleBox>
      </PaddedBox>
      <PaddedBox>
        <NavButton to={"how-do-you-feel"} txt={"Berätta mer"} />
      </PaddedBox>
    </Box>
  );
}
