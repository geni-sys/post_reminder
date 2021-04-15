const Emitter = {
  events: {},

  /**
   * @param event registre new function in events object
   *
   * @returns function to be called
   */
  on(event, callback) {
    Emitter.events[event] = Emitter.events[event] || [];
    Emitter.events[event].push(callback);
  },

  emit(event, ...args) {
    Emitter.events[event].push(...args);
  },
};

export { Emitter };
