import { HoverSquareItemStyled } from "./Main.styled";

interface Props {
  square: string;
}

export const HoverSquaresItem: React.FC<Props> = ({ square }) => {
  return (
    <HoverSquareItemStyled>{`row ${parseInt(square.split(" ")[0]) + 1} col ${
      parseInt(square.split(" ")[2]) + 1
    }`}</HoverSquareItemStyled>
  );
};
