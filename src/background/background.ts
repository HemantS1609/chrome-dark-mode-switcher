// src/background/background.ts

// Listen for changes in Chrome storage (theme or color)
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync") {
    const { mode, color } = changes;

    // Apply updates to all active tabs
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        if (tab.id) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (newMode: string, newColor: string) => {
              // Apply dark or light theme
              if (newMode === "dark") {
                document.documentElement.style.filter =
                  "invert(1) hue-rotate(180deg)";
              } else {
                document.documentElement.style.filter = "";
              }

              // Apply accent color globally
              document.documentElement.style.setProperty(
                "--accent-color",
                newColor
              );
            },
            args: [mode?.newValue ?? "light", color?.newValue ?? "#4caf50"],
          });
        }
      });
    });
  }
});

// Optional: Initialize theme on browser start
chrome.runtime.onInstalled.addListener(() => {
  console.log("Theme Extension with Redux Toolkit installed!");
});
