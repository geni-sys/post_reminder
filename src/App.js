import { Notifyer } from "./Notifyer.js";
import { AppError } from "./AppError.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const notify = Notifyer.notify({
  title: "Hora do post",
  body: "Crie algum conteúdo para ajudar a comunidade!",
  icon: "../assets/instagram.png",
});

const App = {
  async start() {
    try {
      await Notifyer.init();

      Emitter.on("countdown-start", notify);
      Emitter.on("countdown-end", Timer.init);

      Timer.init();
    } catch (error) {
      if (error instanceof AppError) {
        return console.warn(error.message);
      }

      console.error("Internal Browser error - " + error.message);
    }
  },
};

export { App };
