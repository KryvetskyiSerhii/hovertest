import { useAppDispatch, useAppSelector } from "hooks/useTyped";
import { useCallback, useEffect, useState, useRef } from "react";
import { setSquareParameters } from "store/gameSlice";
import { GameFieldRow, GameFieldStyled } from "./Main.styled";
import { Square } from "./Square";

export const GameField = () => {
  const dispatch = useAppDispatch();
  const gameMode = useAppSelector((state) => state.gameSlice.gameMode);
  const fieldRef = useRef<HTMLDivElement>(null);

  const activeSquaresList = useAppSelector(
    (state) => state.gameSlice.activeSquares
  );

  const squareParameters = useAppSelector(
    (state) => state.gameSlice.squareParameters
  );

  const [gameField, setGameField] = useState<React.ReactElement[][]>([]);

  const handleSquareParameters = () => {
    if (fieldRef.current !== null) {
      const blockWidth = fieldRef.current.getBoundingClientRect();
      const squareWidth = Math.floor(blockWidth.width / gameMode);
      dispatch(setSquareParameters(squareWidth));
    }
  };

  const handleGameFieldDraw = useCallback(() => {
    const squares: React.ReactElement[][] = [];
    for (let i = 0; i < gameMode; i++) {
      const row: React.ReactElement[] = [];
      for (let j = 0; j < gameMode; j++) {
        row.push(
          <Square
            key={`${i}${j}`}
            squareParameters={squareParameters}
            itemId={`${i} r ${j} c`}
          />
        );
      }
      squares.push(row);
    }
    setGameField(squares);
  }, [activeSquaresList, gameMode, squareParameters]);

  useEffect(() => {
    handleGameFieldDraw();
  }, [gameMode, squareParameters]);

  useEffect(() => {
    handleSquareParameters();
  }, [gameMode]);
  return (
    <GameFieldStyled ref={fieldRef}>
      {gameField.length > 0 &&
        gameField.map((row, index) => (
          <GameFieldRow key={index}>{row.map((item) => item)}</GameFieldRow>
        ))}
    </GameFieldStyled>
  );
};
