import { Box, TextField } from "@mui/material";
import { HeadLine, PaddedBox, Text } from "../Component";
import { getLocalStorageKeys, useLocalStorage } from "../Hooks/useLocalStorage";
import { IValue } from "./WhoWhenWhere";

export default function HowDoYouFeel() {
  const { theSituation, where, when, who } = getLocalStorageKeys("theSituation", "where", "when", "who");

  const [feeling, setFeeling] = useLocalStorage("feeling");
  const onFeelingChange = ({ target: { value } }: IValue) => setFeeling(value);

  const [targetPerson, setTargetPerson] = useLocalStorage("targetPerson");
  const onTargetPersonChange = ({ target: { value } }: IValue) => setTargetPerson(value);

  return (
    <Box>
      <HeadLine>Hur känns det? 🧘🏼‍♂️</HeadLine>
      <Text>
        Blunda och res tillbaka till {when} när du var {where} med {who}.<br />
      </Text>
      <Text italic>{theSituation}</Text>

      <PaddedBox>
        Jag är
        <TextField
          label="Vad känner du för något?"
          placeholder="arg/sur/ledsen/besviken"
          value={feeling}
          onChange={onFeelingChange}
          autoComplete="off"
          sx={{ width: "300px" }}
        />
      </PaddedBox>
      <PaddedBox>
        {feeling && (
          <TextField
            label={`Vem känner du dig ${feeling.toLowerCase()} för?`}
            value={targetPerson}
            onChange={onTargetPersonChange}
            autoComplete="off"
            sx={{ width: "300px" }}
          />
        )}
      </PaddedBox>
    </Box>
  );
}
