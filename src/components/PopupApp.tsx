import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadThemeFromStorage } from "../utils/storage";
import { setInitialTheme } from "../features/theme/themeSlice";
import ThemeToggle from "./ThemeToggle";
import ColorPicker from "./ColorPicker";

const PopupApp: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadThemeFromStorage().then((savedTheme) => {
      dispatch(setInitialTheme(savedTheme));
    });
  }, [dispatch]);

  return (
    <div className="popup-container">
      <h3>🎨 Theme Customizer</h3>
      <ThemeToggle />
      <ColorPicker />
    </div>
  );
};

export default PopupApp;
