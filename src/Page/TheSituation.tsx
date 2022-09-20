import { Box, TextField } from "@mui/material";
import { ExampleBox, HeadLine, NavButton, PaddedBox, Text } from "../Component";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { IValue } from "./WhoWhenWhere";

export default function TheSituation() {
  const [who] = useLocalStorage("who");
  const [where] = useLocalStorage("where");
  const [when] = useLocalStorage("when");

  const [theSituation, setTheSituation] = useLocalStorage("theSituation");

  const onTheSituationChange = ({ target: { value } }: IValue) => setTheSituation(value);

  const previewText = `${when} när jag var ${where} med ${who}...`;
  const displayPreviewText = previewText[0].toUpperCase() + previewText.substring(1);

  return (
    <Box>
      <HeadLine>Berätta ✍🏽</HeadLine>
      <PaddedBox>
        <Text>
          Skriv kortfattat och förenklat. <br />
          Var extremt ärlig, skriv barnsligt, var småsint. Skriv helt utan filter!
        </Text>
      </PaddedBox>
      <PaddedBox>
        <Text italic>{displayPreviewText}</Text>
      </PaddedBox>
      <PaddedBox>
        <TextField
          multiline
          minRows={5}
          label="Vad hände då?"
          value={theSituation}
          onChange={onTheSituationChange}
          autoComplete="off"
          sx={{ width: "350px" }}
        />
      </PaddedBox>
      <PaddedBox>
        <ExampleBox>
          Exempel: Matilda ville inte höra när jag försökte berätta varför jag var sen. Hon är en lögnaktig skit som
          utnuttjar Kristina. Hon försöker framställa mig som the bad guy.
        </ExampleBox>
      </PaddedBox>
      <PaddedBox>
        <NavButton to={"how-do-you-feel"} txt={"Gå vidare"} />
      </PaddedBox>
    </Box>
  );
}
