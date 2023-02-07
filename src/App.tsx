import { GlobalStyle } from "App.styled";
import { useAppDispatch } from "hooks/useTyped";
import { Main } from "pages/main/Main";
import { useEffect } from "react";
import { fetchGameConditions } from "store/gameSlice";

export const App = () => {
  const dispatch = useAppDispatch();

  const handleGameConditionsData = () => {
    dispatch(fetchGameConditions());
  };

  useEffect(() => {
    handleGameConditionsData();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Main />
    </div>
  );
};
