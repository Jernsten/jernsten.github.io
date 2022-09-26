import { Box } from "@mui/material";
import { HeadLine, Input, NavButton, PaddedBox, Text } from "../Component";
import { getLocalStorageKeys, useLocalStorage } from "../Hooks/useLocalStorage";
import { change } from "./WhoWhenWhere";

export default function HowDoYouFeel() {
  const { where, when, who } = getLocalStorageKeys("where", "when", "who");

  const [feeling, setFeeling] = useLocalStorage("feeling");
  const [target, setTarget] = useLocalStorage("target");
  const [because, setBecause] = useLocalStorage("because");

  return (
    <Box>
      <HeadLine>Hur känns det? 🤔</HeadLine>
      <Text>
        Blunda en stund, och res tillbaka i tiden till {when} när du var {where} med {who}.<br />
        Var där och då när du svarar.
      </Text>
      <PaddedBox>
        <Input
          label="Jag är..."
          placeholder="tex: arg/sur/ledsen/besviken"
          value={feeling}
          onChange={change(setFeeling)}
        />
      </PaddedBox>
      <PaddedBox>
        {feeling.length > 2 && (
          <Input label={`Vem är du ${feeling.toLowerCase()} på?`} value={target} onChange={change(setTarget)} />
        )}
      </PaddedBox>
      <PaddedBox>
        {target.length > 0 && (
          <Input
            big
            label={`Varför är du ${feeling} på ${target}?`}
            placeholder="Håll inte tillbaka! Var riktigt småsint, var inte snäll eller ''spirituell''."
            value={because}
            onChange={change(setBecause)}
          />
        )}
      </PaddedBox>
      <PaddedBox>
        <NavButton to={"what-you-want"} txt={"Berätta mer"} />
      </PaddedBox>
    </Box>
  );
}
