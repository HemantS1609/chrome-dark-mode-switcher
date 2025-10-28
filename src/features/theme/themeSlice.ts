import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ThemeState } from "./themeTypes";
import { saveThemeToStorage } from "../../utils/storage";

const initialState: ThemeState = {
  mode: "light",
  color: "#4caf50",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      saveThemeToStorage(state);
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
      saveThemeToStorage(state);
    },
    setInitialTheme: (state, action: PayloadAction<ThemeState>) => {
      state.mode = action.payload.mode;
      state.color = action.payload.color;
    },
  },
});

export const { toggleTheme, setColor, setInitialTheme } = themeSlice.actions;
export default themeSlice.reducer;
