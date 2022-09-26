import { Box, Button, Card, TextField } from "@mui/material";

import { ExampleBox, HeadLine, NavButton, PaddedBox, Text } from "../Component";
import { useLocalStorage } from "../Hooks/useLocalStorage";

export interface IValue {
  target: { value: string };
}

export const change = (setter: (key: string) => void) => {
  return ({ target: { value } }: IValue) => setter(value);
};

export default function WhoWhenWhere() {
  const [when, setWhen] = useLocalStorage("when");
  const [where, setWhere] = useLocalStorage("where");
  const [who, setWho] = useLocalStorage("who");

  const readyToComplete = who && where && when;

  const onWhenChange = change(setWhen);
  const onWhereChange = change(setWhere);
  const onWhoChange = change(setWho);

  const previewText = `${when || "Då"} när jag var ${where || "någonstans"} med ${who || "någon"}.`;
  const displayPreviwText = previewText[0].toUpperCase() + previewText.substring(1);

  const clearAllKeys = () => {
    let key: string | null;
    const keysToRemove = [];

    for (let i = 0; i < localStorage.length; i++) {
      key = localStorage.key(i);
      key?.includes("the-work") && keysToRemove.push(key);
    }

    keysToRemove.forEach((key) => localStorage.removeItem(key));
    setWhen("");
    setWhere("");
    setWho("");
  };

  return (
    <Box>
      <HeadLine>Känn efter 🧘🏼‍♂️</HeadLine>
      <Text>
        Slappna av, blunda om du behöver, och dröm tillbaka till minnena av en situation som du har svårt att släppa.
      </Text>
      <Text>
        Kanske var det den gången din dejt blocka ditt nummer. Eller den gången då din kollega sa att du var rolig, men
        det kändes som att hen skrattade åt, inte med dig.
      </Text>
      <ExampleBox>Exempel: Igår när jag var i bilen med Matilda, Kristina och Misse.</ExampleBox>
      <PaddedBox>
        <TextField label="När hände det?" value={when} onChange={onWhenChange} autoComplete="off" />
      </PaddedBox>

      <PaddedBox>
        <TextField label="Vem/vilka var du med?" value={who} onChange={onWhoChange} autoComplete="off" />
      </PaddedBox>

      <PaddedBox>
        <TextField label="Vart hände det?" value={where} onChange={onWhereChange} autoComplete="off" />
      </PaddedBox>

      <PaddedBox>
        <Text>{displayPreviwText}</Text>
      </PaddedBox>

      {readyToComplete && (
        <>
          <PaddedBox>
            <NavButton to="the-situation" txt="Berätta vad som hände" />
          </PaddedBox>
          <PaddedBox>
            <Button onClick={clearAllKeys} color="warning">
              Rensa
            </Button>
          </PaddedBox>
        </>
      )}
    </Box>
  );
}
