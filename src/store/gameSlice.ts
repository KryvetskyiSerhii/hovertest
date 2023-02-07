import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Props } from "types/sliceProps";

const initialState: Props = {
  status: "",
  gameConditions: [],
  gameMode: 0,
  gameModeInputValue: "",
  squareParameters: {
    width: 100,
    height: 100,
  },
  activeSquares: [],
};

export const fetchGameConditions = createAsyncThunk(
  "gameConditions/fetchGameConditions",
  async () => {
    const response = await axios.get("http://demo7919674.mockable.io/");
    return response.data;
  }
);

const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    setGameConditions(state, action) {
      state.gameConditions = [...action.payload];
    },
    setActiveSquare(state, action) {
      state.activeSquares = [...state.activeSquares, action.payload];
    },
    removeActiveSquare(state, action) {
      state.activeSquares = state.activeSquares.filter(
        (square) => square !== action.payload
      );
    },
    setGameMode(state, action) {
      state.gameMode = action.payload;
      state.activeSquares = [];
    },
    setSquareParameters(state, action) {
      state.squareParameters.width = action.payload;
      state.squareParameters.height = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGameConditions.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchGameConditions.fulfilled, (state, action) => {
        state.status = "fulfilled";
        gameSlice.caseReducers.setGameConditions(state, action);
      })
      .addCase(fetchGameConditions.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default gameSlice.reducer;

export const {
  setActiveSquare,
  removeActiveSquare,
  setGameMode,
  setSquareParameters,
} = gameSlice.actions;
