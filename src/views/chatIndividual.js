import { data } from "../data/dataset.js";
const ChatIndividual = (props) => {
  const singerId = props.id;
  const singer = data.find((singer) => singer.id === singerId);
  const chat = document.createElement("div");
  chat.classList.add("body")
  chat.innerHTML = `
    <section class="first-group-chat">
    <a href="#" id="back-home"> <img class="back-img" src="https://i.pinimg.com/564x/e5/3d/bb/e53dbbf853dd8e8532650034f30ad6ed.jpg" alt="back"></a>
    <div class="div-singer-img"><img class="singer-img" src="${singer.imageUrl}" alt=""></div>
    
    <div>
    <p class="singer-name">${singer.name}</p>
    <p class="singer-desc">${singer.shortDescription}</p>
    </div>
    </section>
    
    <section class="second-group-chat">
    <div class="botones-chatIn">
      <button id="api-key-chat">Api Key</button>
      <button id="goToChatGrupalBtn-chat">Chat Grupal</button>
    </div>
    
      <div class="conversation"></div>
      <div class="flex-input">
      <input class="input-msj" type="text" placeholder="Escribe aqui tu mensaje">
      <button type="submit"><img class="button-send" src="https://cdn-icons-png.freepik.com/512/8138/8138457.png" alt="boton enviar mensaje"></button>
      </div>
      
    </section>
  `;
  return chat;
};
export default ChatIndividual;
