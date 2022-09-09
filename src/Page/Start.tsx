import { HeadLine, NavButton, Text } from "../Component";

export function Start() {
  return (
    <>
      <HeadLine>Ibland är det svårt att gå vidare från något som hänt</HeadLine>

      <Text>
        The work är en form av meditation där man analyserar tankar och övertygelser. Metoden är enkel, den går ut på
        sätta sig i en specifik händelse och att svara på ett par frågor.
      </Text>

      <NavButton to="the-situation" txt="Sätt igång" />
    </>
  );
}
