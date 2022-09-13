import { Box, TextField } from "@mui/material";
import { HeadLine, NavButton, PaddedBox, Text } from "../Component";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { IValue } from "./WhoWhenWhere";

export default function TheSituation() {
  const [who] = useLocalStorage("who");
  const [where] = useLocalStorage("where");
  const [when] = useLocalStorage("when");

  const [theSituation, setTheSituation] = useLocalStorage("theSituation");

  const onTheSituationChange = ({ target: { value } }: IValue) => setTheSituation(value.toLowerCase());

  const previewText = `${when} när jag var ${where} med ${who}`;
  const displayPreviewText = previewText[0].toUpperCase() + previewText.substring(1);

  return (
    <Box>
      <HeadLine>Berätta ✍🏽</HeadLine>
      <PaddedBox>
        <Text>{displayPreviewText}</Text>
        <Text>
          Skriv kortfattat och förenklat. Var väldigt ärlig, var dömande, barnslig, småsint. Skriv utan filter!
        </Text>
      </PaddedBox>
      <PaddedBox>
        <TextField
          multiline
          minRows={5}
          label="Vad har hänt?"
          value={theSituation}
          onChange={onTheSituationChange}
          autoComplete="off"
        />
      </PaddedBox>
      <PaddedBox>
        <NavButton to={"how-do-you-feel"} txt={"Gå vidare"} />
      </PaddedBox>
    </Box>
  );
}
