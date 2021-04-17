const { BrowserWindow } = require("electron");
const { resolve } = require("path");

const filePath = resolve(__dirname, "../", "index.html");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 250,
    height: 400,
    // show: false,
    frame: false,
    resizable: false,
    fullscreenable: false,
  });
  win.loadFile(filePath);

  return win;
};

module.exports = createWindow();
