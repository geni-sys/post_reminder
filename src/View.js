const timerElement = document.querySelector("div.root");

const View = {
  render({ minutes, seconds }) {
    timerElement.innerHTML = `
      <p>Próxima aula em</p>
      <span>${minutes}:${seconds}</span>
    `;
  },
};

export { View };
