# post reminder

> remember to post

## Emitter

- Publisher subscriber - Emitter

  - padrão de projeto para entrega de mensagens

    - ex: compra em um e-commerce
      - Envolvidos: ambos se comunicam no processo
      - [x] Sistema de entrega
      - [x] Sistema de estoque
      - [x] Sistema de nota fiscal

  - O que segnifica?

    - [x] Publisher
    - [x] Subscriber
    - [x] Topic - channel

    - Camo acontece?
      - 1: os **Subscriber** se inscrevem no _canal/Topic_
      - 2: **O Publisher** publica um tópico, que é enviado a todos no **channel**
      - 3: O **Channel** dispara um evento para todos inscritos no **Topic**

  exemplo prático:

  ```js
  const Emitter = {
    events: {},

    on(event, callback) {
      Emitter.events[event] = Emitter.events[event] || [];
      Emitter.events[event].push(callback);
    },
  };
  ```

  - No exemplo acima a função _ON_ cria um objeto **events** com a seguinte estrutura:

    ```ts
    Emitter.on("click", () => {});
    Emitter.on("click", () => {});
    Emitter.on("click", () => {});

    const events = {
      // array com todas as funções registradas do *event*
      click: [() => {}, () => {}, () => {}],
    };
    ```
