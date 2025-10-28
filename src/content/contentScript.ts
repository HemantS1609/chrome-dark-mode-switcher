chrome.storage.sync.get(["mode", "color"], (result) => {
  const mode = result.mode ?? "light";
  const color = result.color ?? "#4caf50";

  if (mode === "dark") {
    document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
  } else {
    document.documentElement.style.filter = "";
  }

  document.documentElement.style.setProperty("--accent-color", color);
});
