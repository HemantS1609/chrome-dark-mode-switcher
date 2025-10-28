import type { ThemeState } from "../features/theme/themeTypes";

export const saveThemeToStorage = async (theme: ThemeState) => {
  await chrome.storage.sync.set(theme);
};

export const loadThemeFromStorage = async (): Promise<ThemeState> => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(["mode", "color"], (result) => {
      resolve({
        mode: result.mode || "light",
        color: result.color || "#4caf50",
      });
    });
  });
};
