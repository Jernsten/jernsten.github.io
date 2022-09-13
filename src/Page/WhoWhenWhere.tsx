import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Box, Button, TextField } from "@mui/material";

import { HeadLine, PaddedBox, Text } from "../Component";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../Hooks/useLocalStorage";

export interface IValue {
  target: { value: string };
}

export default function WhoWhenWhere() {
  const [when, setWhen] = useLocalStorage("when");
  const [where, setWhere] = useLocalStorage("where");
  const [who, setWho] = useLocalStorage("who");

  const readyToComplete = who && where && when;

  const onWhenChange = ({ target: { value } }: IValue) => setWhen(value.toLowerCase());
  const onWhereChange = ({ target: { value } }: IValue) => setWhere(value.toLowerCase());
  const onWhoChange = ({ target: { value } }: IValue) => setWho(value);

  const previewText = `${when || "Då"} när jag var ${where || "någonstans"} med ${who || "någon."}`;
  const displayPreviwText = previewText[0].toUpperCase() + previewText.substring(1);

  const navigate = useNavigate();

  const complete = () => navigate("/the-situation", { replace: true });

  const clear = () => {
    let key: string | null;
    const keysToRemove = [];

    for (let i = 0; i < localStorage.length; i++) {
      key = localStorage.key(i);
      if (key?.includes("the-work")) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    setWhen("");
    setWhere("");
    setWho("");
  };

  return (
    <Box>
      <HeadLine>Notice 🧘🏼‍♂️</HeadLine>
      <Text>Who upsets you? Why? Recall a specific situation.</Text>
      <Text>
        To begin, relax and be still. Travel in your mind to a specific situation where you were angry, hurt, sad, or
        disappointed with someone. Witness the situation. Be there now. Notice, name, and feel the emotion you were
        experiencing at the time. Find the reason you were upset.
      </Text>

      <PaddedBox>
        <TextField label="När hände det?" value={when} onChange={onWhenChange} autoComplete="off" />
      </PaddedBox>

      <PaddedBox>
        <TextField label="Vem var det?" value={who} onChange={onWhoChange} autoComplete="off" />
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
            <Button onClick={complete} variant="contained">
              Berätta vad som hände
            </Button>
          </PaddedBox>
          <PaddedBox>
            <Button onClick={clear}>Rensa</Button>
          </PaddedBox>
        </>
      )}
    </Box>
  );
}
