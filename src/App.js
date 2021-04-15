import { Notifyer } from "./Notifyer.js";
import { AppError } from "./AppError.js";

const App = {
  async start() {
    try {
      await Notifyer.init();
      Notifyer.notify({
        title: "elias",
        body: "Alexandre",
        icon: "../assets/",
      });
    } catch (error) {
      if (error instanceof AppError) {
        return console.warn(error.message);
      }

      console.error("Internal Browser error - " + error.message);
    }
  },
};

export { App };
