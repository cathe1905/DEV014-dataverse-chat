import { data } from "../data/dataset.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import { navigateTo } from "../router.js";

const ChatIndividual = (props) => {
  const singerId = props.id;
  const singer = data.find((singer) => singer.id === singerId);
  const chat = document.createElement("div");
  chat.classList.add("body");
  chat.innerHTML = `
    <section class="first-chat">
    <a href="#" id="back-home"> <img class="back-img" src="https://i.pinimg.com/564x/e5/3d/bb/e53dbbf853dd8e8532650034f30ad6ed.jpg" alt="back"></a>
    <div class="div-singer-img"><img class="singer-img" src="${singer.imageUrl}" alt=""></div>

    <div>
    <p class="singer-name">${singer.name}</p>
    <p class="singer-desc">${singer.shortDescription}</p>
    <p class="singer-descL">${singer.description}</p>
    </div>

    </section>
    
    
    <div id="conversationI" class="conversationI">
      <div class="botones-chatIn">
        <button id="api-key-chat">Api Key</button>
        <button id="goToChatGrupalBtn-chat">Chat Grupal</button>
      </div>
    </div>

    
    <form class="flex-Input">
    <input  id="input-message" class="message-input" type="text" placeholder="Escribe aqui tu mensaje">
    <button id="send-message" class="button-Send" type="submit"><img  src="https://cdn-icons-png.freepik.com/512/8138/8138457.png" alt="boton enviar mensaje"></button>
    </form>
      

  `;

  const backButton = chat.querySelector("#back-home");
  backButton.addEventListener("click", () => {
    navigateTo("/");
  });

  const apiKeyButton = chat.querySelector("#api-key-chat");
  apiKeyButton.addEventListener("click", () => {
    navigateTo("/api-key");
  });

  const groupChatButton = chat.querySelector("#goToChatGrupalBtn-chat");
  groupChatButton.addEventListener("click", () => {
    navigateTo("/ChatGrupal");
  });

  const chatContainer = chat.querySelector("#conversationI");
  const sendMessage = chat.querySelector("#send-message");
  const inputMessage = chat.querySelector("#input-message");

  function createUserMessage(messageContent) {
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("user-message");
    const messageBubble = document.createElement("div");
    messageBubble.classList.add("message-bubble");
    messageBubble.textContent = messageContent;
    userMessageDiv.appendChild(messageBubble);
    return userMessageDiv;
  }

  function createIAMessage(messageContent) {
    const IAMessageDiv = document.createElement("div");
    IAMessageDiv.classList.add("ia-message");
    const messageBubble = document.createElement("div");
    messageBubble.classList.add("message-bubble");
    messageBubble.textContent = messageContent;
    IAMessageDiv.appendChild(messageBubble);
    return IAMessageDiv;
  }

  async function sendMessageHandler() {
    try {
      const respuesta = await communicateWithOpenAI(inputMessage.value, singerId);
      const messageContent = respuesta[0][0].message.content;

  
      const userMessageDiv = createUserMessage(inputMessage.value);
      chatContainer.appendChild(userMessageDiv);


      const IAMessageDiv = createIAMessage(messageContent);
      chatContainer.appendChild(IAMessageDiv);


      inputMessage.value = "";
    } catch (error) {
      const userMessageDiv = createUserMessage(inputMessage.value);
      chatContainer.appendChild(userMessageDiv);
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("error-message");
      const messageBubble = document.createElement("div");
      messageBubble.classList.add("message-bubble");
      messageBubble.textContent =
        "Surgió un problema con tu Api Key, por favor revísala";
      errorDiv.appendChild(messageBubble);
      chatContainer.appendChild(errorDiv);
      inputMessage.value = "";
    }
  }


  sendMessage.addEventListener("click", (e) => {
    e.preventDefault();
    sendMessageHandler();
  });

  return chat;
};

export default ChatIndividual;
