import { GameField } from "./GameField";
import { HeaderForm } from "./HeaderForm";
import { HoverSquares } from "./HoverSquares";
import { MainContainer, MainFieldBlock } from "./Main.styled";

export const Main = () => {
  return (
    <MainContainer>
      <MainFieldBlock>
        <HeaderForm />
        <GameField />
      </MainFieldBlock>
      <HoverSquares />
    </MainContainer>
  );
};
