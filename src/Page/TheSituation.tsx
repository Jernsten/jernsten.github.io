import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { HeadLine, Text } from "../Component";

interface IValue {
  target: { value: string };
}
const suggestions = {
  where: [
    { label: "Hemma" },
    { label: "På jobbet" },
    { label: "I telefonsamtal" },
    { label: "På sms" },
    { label: "Hemma hos Malin" },
    { label: "I Berlin" },
    { label: "På tunnelbanan" }
  ],
  who: [{ label: "Mamma" }, { label: "Stefan" }, { label: "Busschauffören" }]
};

export function TheSituation() {
  const [where, setWhere] = useState("");
  const onWhereChange = ({ target: { value } }: IValue) => setWhere(value);
  const [who, setWho] = useState("");
  const onWhoChange = ({ target: { value } }: IValue) => setWho(value);
  const [happened, setHappened] = useState("");
  const onHappenedChange = ({ target: { value } }: IValue) => setHappened(value);
  return (
    <>
      <HeadLine>Vad har hänt?</HeadLine>
      <Text>
        Välj ett minne, tänk tillbaka till en person, en plats. Det kan tex ha hänt igår, hemma, när din sambo skrek på
        dig, eller 12 år sedan när du blev borttappad av ditt syskon.
      </Text>

      <Autocomplete
        freeSolo
        id="where"
        options={suggestions.where}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Jag var" onChange={onWhereChange} />}
      />
      <Autocomplete
        freeSolo
        id="who"
        options={suggestions.who}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="med" onChange={onWhoChange} />}
      />
      <TextField label="Beskriv vad som hände" sx={{ width: 300 }} onChange={onHappenedChange} />
    </>
  );
}
