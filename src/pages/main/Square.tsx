import { useAppSelector, useAppDispatch } from "hooks/useTyped";
import { useCallback, useEffect, useState } from "react";
import { SqaureParameters } from "types/sliceProps";
import { SquareStyled } from "./Main.styled";
import { removeActiveSquare, setActiveSquare } from "store/gameSlice";

interface Props {
  squareParameters: SqaureParameters;
  itemId: string;
}

export const Square: React.FC<Props> = ({ squareParameters, itemId }) => {
  const dispatch = useAppDispatch();
  const [isSquareActive, setIsSquareActive] = useState<boolean>(false);

  const activeSquareList = useAppSelector(
    (state) => state.gameSlice.activeSquares
  );

  const handleMouseOver = useCallback(
    (itemId: string) => {
      if (activeSquareList.find((square) => square === itemId))
        dispatch(removeActiveSquare(itemId));
      else dispatch(setActiveSquare(itemId));
    },
    [activeSquareList]
  );

  useEffect(() => {
    if (activeSquareList.filter((square) => square === itemId).length > 0)
      setIsSquareActive(true);
    else setIsSquareActive(false);
  }, [activeSquareList]);
  return (
    <>
      <SquareStyled
        width={`${squareParameters.width}px`}
        height={`${squareParameters.height}px`}
        onMouseOver={() => handleMouseOver(itemId)}
        isSquareActive={isSquareActive}
      ></SquareStyled>
    </>
  );
};
