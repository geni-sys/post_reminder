import { AppError } from "./AppError.js";

const Notifyer = {
  async init() {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      throw new AppError("Permission denied");
    }
  },

  notify({ title, body, icon }) {
    new Notification(title, {
      body,
      icon,
    });
  },
};

export { Notifyer };
