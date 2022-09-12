import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { HeadLine, PaddedBox, Text } from "../Component";
import { whoWhenWhereSelector } from "../Redux/selectors";

export default function TheSituation() {
  const { who, when, where } = useSelector(whoWhenWhereSelector);
  const previewText = `${when || "Då"} när jag var ${where || "någonstans"} med ${who || "någon."}`;
  const displayPreviewText = previewText[0].toUpperCase() + previewText.substring(1);
  return (
    <Box>
      <HeadLine>Berätta ✍🏽</HeadLine>
      <PaddedBox>
        <Text>{displayPreviewText}</Text>
        <Text>
          Skriv kortfattat och förenklat. Var dömande, barnslig, småsint. Skriv utan filter! Detta är en möjlighet för
          dig att upptäcka varför du känner som du gör.
        </Text>
      </PaddedBox>
    </Box>
  );
}
