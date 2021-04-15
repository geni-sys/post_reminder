const Emitter = {
  events: {},

  /**
   * @param event registre new function in events object
   * @param callback function to be called
   *
   * @returns function to be called
   */
  on(event, callback) {
    Emitter.events[event] = Emitter.events[event] || [];
    Emitter.events[event].push(callback);
  },

  emit(event, ...args) {
    if (event in Emitter.events === false) {
      return;
    }

    Emitter.events[event].map((callback) => {
      callback(...args);
    });
  },
};

export { Emitter };
