import { AppError } from "./AppError.js";

const Notifyer = {
  /**
   * Get user permission for send notification
   */
  async init() {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      throw new AppError("Permission denied");
    }
  },

  /**
   * send notification to User
   *
   * @param title title of notification
   * @param body body text of notification
   * @param icon image of notification menu
   */
  notify({ title, body, icon }) {
    new Notification(title, {
      body,
      icon,
    });
  },
};

export { Notifyer };
