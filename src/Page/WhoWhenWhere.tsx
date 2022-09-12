import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Box, Button, Fade, Popper, TextField } from "@mui/material";

import { HeadLine, PaddedBox, Text } from "../Component";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../Hooks/useLocalStorage";

interface IValue {
  target: { value: string };
}
const tooltipText = `If you want to know yourself, I suggest that you write about someone else. Point
The Work outward in the beginning, and you may come to see that everything outside you is a direct reflection of your
own thinking. It’s all about you. Most of us have been pointing criticism and judgments at ourselves
for years, and it hasn’t solved anything yet. Judging someone else, questioning those judgments, and
turning them around is the fast path to understanding and self-realization.`;

export default function WhoWhenWhere() {
  const [when, setWhen] = useLocalStorage("when");
  const [where, setWhere] = useState("");
  const [who, setWho] = useState("");
  const onWhenChange = ({ target: { value } }: IValue) => setWhen(value.toLowerCase());
  const onWhereChange = ({ target: { value } }: IValue) => setWhere(value.toLowerCase());
  const onWhoChange = ({ target: { value } }: IValue) => setWho(value.toLowerCase());

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const previewText = `${when || "Då"} när jag var ${where || "någonstans"} med ${who || "någon."}`;
  const displayPreviwText = previewText[0].toUpperCase() + previewText.substring(1);

  const tooltip = (
    <PaddedBox>
      <Button onClick={handleClick}>Kan jag välja mig själv?</Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: "black" }}>
              <Text>{tooltipText}</Text>
            </Box>
          </Fade>
        )}
      </Popper>
    </PaddedBox>
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const complete = () => {
    if (readyToComplete) {
      dispatch({ type: "", item: { who, when, where } });
      navigate("/the-situation", { replace: true });
    }
  };

  const [readyToComplete, setReadyToComplete] = useState(false);
  
  useEffect(() => {
    if (who && when && where) setReadyToComplete(true);
    else setReadyToComplete(false);
  }, [who, when, where]);

  return (
    <Box>
      <HeadLine>Notice 🧘🏼‍♂️</HeadLine>
      <Text>Who or what upsets you? Why? Recall a specific situation.</Text>
      <Text>
        To begin, relax and be still. Travel in your mind to a specific situation where you were angry, hurt, sad, or
        disappointed with someone. Witness the situation. Be there now. Notice, name, and feel the emotion you were
        experiencing at the time. Find the reason you were upset.
      </Text>
      <PaddedBox>
        <TextField label="Vem gäller det?" onChange={onWhoChange} />
        {tooltip}
      </PaddedBox>
      <PaddedBox>
        <TextField label="När hände det?" onChange={onWhenChange} />
      </PaddedBox>
      <PaddedBox>
        <TextField label="Vart hände det?" onChange={onWhereChange} />
      </PaddedBox>
      <PaddedBox>
        <Text>{displayPreviwText}</Text>
      </PaddedBox>
      <PaddedBox>
        {readyToComplete && (
          <Button onClick={complete} variant="contained">
            Berätta vad som hände
          </Button>
        )}
      </PaddedBox>
    </Box>
  );
}
