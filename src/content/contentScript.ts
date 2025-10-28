chrome.storage.sync.get(["mode", "color"], (result) => {
  if (result.mode === "dark") {
    document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
  } else {
    document.documentElement.style.filter = "";
  }

  document.documentElement.style.setProperty(
    "--accent-color",
    result.color || "#4caf50"
  );
});
