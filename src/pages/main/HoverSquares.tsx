import { useAppSelector } from "hooks/useTyped";
import { HoverSquaresItem } from "./HoverSquaresItem";
import { HoverSquaresContainer, HoverSquareTitle } from "./Main.styled";

export const HoverSquares = () => {
  const activeSquaresList = useAppSelector(
    (state) => state.gameSlice.activeSquares
  );

  return (
    <>
      {activeSquaresList.length > 0 ? (
        <HoverSquaresContainer>
          <HoverSquareTitle>Hovered squares</HoverSquareTitle>
          {activeSquaresList.map((square, index) => (
            <HoverSquaresItem key={index} square={square} />
          ))}
        </HoverSquaresContainer>
      ) : null}
    </>
  );
};
