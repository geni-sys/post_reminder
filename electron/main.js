const { app } = require("electron");

const controlWindow = require("./ControlWindow.js");

function App() {
  const win = require("./createWindow.js");
  const tray = require("./Tray.js");

  const { toggle } = controlWindow(win, tray);

  tray.on("click", toggle);
  win.on("ready-to-show", win.hide);
  win.on("blur", win.hide);
}

app.whenReady().then(App);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

if (process.platform === "darwin") {
  app.dock.hide();
}
