const timerElement = document.querySelector("div.root");

const View = {
  render({ minutes, seconds }) {
    timerElement.innerHTML = `
      <p>Próximo poste em</p>
      <span>${minutes}:${seconds}</span>
    `;
  },
};

export { View };
