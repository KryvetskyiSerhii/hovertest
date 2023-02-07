interface GameConditions {
  name: string;
  field: number;
}

export interface SqaureParameters {
  width: number;
  height: number;
}
export interface Props {
  status: string;
  gameConditions: GameConditions[];
  gameMode: number;
  gameModeInputValue: string;
  squareParameters: SqaureParameters;
  activeSquares: string[];
}
