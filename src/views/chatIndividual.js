import { data } from "../data/dataset.js";
const ChatIndividual = (props) => {
  const singerId = props.id;
  const singer = data.find((singer) => singer.id === singerId);
  const chat = document.createElement("div");
  chat.innerHTML = `
    <section>
    <a href="#"> <img src="/pics/turn-back_12410927.png" alt="back"></a>
      <img src="${singer.imageUrl}" alt="">
      <p>${singer.name}</p>
    </section>
    <section>
      <input type="text" placeholder="Escribe aqui tu mensaje">
      <button type="button">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Gato_%282%29_REFON.jpg" alt="boton enviar mensaje">
      </button>
    </section>
  `;
  return chat;
};
export default ChatIndividual;
