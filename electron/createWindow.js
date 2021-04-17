const { BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 250,
    height: 400,
    // show: false,
    frame: false,
    resizable: false,
    fullscreenable: false,
  });
  win.loadFile("index.html");

  return win;
};

module.exports = createWindow();
