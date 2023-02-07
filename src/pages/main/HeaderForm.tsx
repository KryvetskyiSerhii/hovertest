import { useFormik, FormikProps } from "formik";
import { useAppDispatch, useAppSelector } from "hooks/useTyped";
import { setGameMode } from "store/gameSlice";
import {
  HeaderFormButton,
  HeaderFormOption,
  HeaderFormSelect,
  HeaderFormStyled,
} from "./Main.styled";

interface Formik {
  mode: string;
}

export const HeaderForm = () => {
  const dispatch = useAppDispatch();
  const gameModes = useAppSelector((state) => state.gameSlice.gameConditions);

  const initialValues: Formik = {
    mode: "",
  };

  const handleModeOptions = (values: Formik) => {
    dispatch(setGameMode(values.mode));
  };

  const formik: FormikProps<Formik> = useFormik<Formik>({
    initialValues: initialValues,
    onSubmit: (values: Formik) => {
      handleModeOptions(values);
    },
  });

  return (
    <HeaderFormStyled onSubmit={formik.handleSubmit}>
      <HeaderFormSelect name="mode" onChange={formik.handleChange}>
        <HeaderFormOption>Pick mode</HeaderFormOption>
        {gameModes.length > 0 &&
          gameModes.map((mode) => (
            <HeaderFormOption key={mode.name} value={mode.field}>
              {mode.name}
            </HeaderFormOption>
          ))}
      </HeaderFormSelect>
      <HeaderFormButton type="submit">START</HeaderFormButton>
    </HeaderFormStyled>
  );
};
