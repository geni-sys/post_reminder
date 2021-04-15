import { Notifyer } from "./Notifyer.js";
import { AppError } from "./AppError.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const App = {
  async start() {
    try {
      const time = 25 * 60;
      Timer.init(0.6 * 60);
      await Notifyer.init();
      Notifyer.notify({
        title: "Hora do post",
        body: "Crie algum conteúdo para ajudar a comunidade!",
        icon: "../assets/instagram.png",
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
