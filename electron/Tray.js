const { Tray } = require("electron");
const { resolve } = require("path");

const iconPath = resolve(__dirname, "../", "assets", "instagram.png");

function createTray() {
  const tray = new Tray(iconPath);
  tray.setToolTip("reminder to do anything!");

  return tray;
}

module.exports = createTray();
