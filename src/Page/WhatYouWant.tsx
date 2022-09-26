import { Box } from "@mui/material";
import { HeadLine, Input } from "../Component";
import { getLocalStorageKeys, useLocalStorage } from "../Hooks/useLocalStorage";
import { change } from "./WhoWhenWhere";

export default function WhatYouWant() {
  const { target } = getLocalStorageKeys("target");

  const [want, setWant] = useLocalStorage("want");

  return (
    <Box>
      <HeadLine>Vad vill du av {target}?</HeadLine>
      <Input label={`Jag vill att ${target}`} value={want} onChange={change(setWant)}></Input>
    </Box>
  );
}
