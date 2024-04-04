import { data } from "../data/dataset.js";
const ChatIndividual = (props) => {
  const singerId = props.id;
  const singer = data.find((singer) => singer.id === singerId);
  const chat = document.createElement("div");
  chat.innerHTML = `
    <section>
      <p><</p>
      <img src="${singer.imageUrl}" alt="">
      <p>${singer.name}</p>
    </section>
    <section>
      <input type="text" placeholder="Escribe aqui tu mensaje">
      <button type="button">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fes%2Fpng-zfmqo&psig=AOvVaw0M0kzPOBhsSfZl10wn54TC&ust=1712267207345000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiTpcyCp4UDFQAAAAAdAAAAABAE" alt="boton enviar mensaje">
      </button>
    </section>
  `;
  return chat;
};
export default ChatIndividual;
