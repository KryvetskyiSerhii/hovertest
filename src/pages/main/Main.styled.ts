import styled from "styled-components";

interface Props {
  width: string;
  height: string;
  isSquareActive: boolean;
}

export const SquareStyled = styled.div<Props>`
  border: 1px solid #000;
  min-width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  max-height: ${({ height }) => height};
  background-color: ${({ isSquareActive }) =>
    isSquareActive ? "blue" : "#fff"};
`;

export const GameFieldRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const MainContainer = styled.div`
  height: 40vh;
  width: 80vw;
  margin: 5vh auto;
  display: flex;
  justify-content: space-between;
`;

export const MainFieldBlock = styled.div`
  width: 80%;
  height: 100%;
`;

export const HoverSquaresContainer = styled.div`
  width: 40%;
  max-height: 100%;
  padding: 2px;
  margin-left: 20px;
`;

export const HoverSquareTitle = styled.h3`
  margin-bottom: 10px;
`;

export const HoverSquareItemStyled = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: rgba(147, 121, 84, 0.2);
  border-radius: 10px;
  color: rgba(183, 112, 75, 1);
  padding-left: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const GameFieldStyled = styled.div`
  width: 100%;
`;

export const HeaderFormStyled = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

export const HeaderFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 30px;
  padding: 0 10px;
  width: 10vw;
  background-color: rgba(3, 138, 255, 1);
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const HeaderFormSelect = styled.select`
  width: 10vw;
  height: 30px;
`;

export const HeaderFormOption = styled.option``;
