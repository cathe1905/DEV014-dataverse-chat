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

    
    <div class="flex-Input">
    <input  id="input-message" class="message-input" type="text" placeholder="Escribe aqui tu mensaje">
    <button id="send-message" class="button-Send" type="submit"><img  src="https://cdn-icons-png.freepik.com/512/8138/8138457.png" alt="boton enviar mensaje"></button>
    </div>
      

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



//   sendMessage.addEventListener("click", async () => {
//    const respuesta= await communicateWithOpenAI(inputMessage.value, singerId);
//    console.log(respuesta[0][0].message.content)
//     const divChat = chat.querySelector("#conversationI");
//     const parrafo = document.createElement("p");
//   });

  const chatContainer = chat.querySelector('#conversationI');
  const sendMessage = chat.querySelector("#send-message");
  const inputMessage = chat.querySelector("#input-message");

// Función para crear un nuevo mensaje del usuario
function createUserMessage(messageContent) {
  const userMessageDiv = document.createElement('div');
  userMessageDiv.classList.add('user-message');
  const messageBubble = document.createElement('div');
  messageBubble.classList.add('message-bubble');
  messageBubble.textContent = messageContent;
  userMessageDiv.appendChild(messageBubble);
  return userMessageDiv;
}

// Función para crear un nuevo mensaje de la IA
function createIAMessage(messageContent) {
  const IAMessageDiv = document.createElement('div');
  IAMessageDiv.classList.add('ia-message');
  const messageBubble = document.createElement('div');
  messageBubble.classList.add('message-bubble');
  messageBubble.textContent = messageContent;
  IAMessageDiv.appendChild(messageBubble);
  return IAMessageDiv;
}

// Función para enviar un mensaje
async function sendMessageHandler() {
  const respuesta = await communicateWithOpenAI(inputMessage.value, singerId);
  const messageContent = respuesta[0][0].message.content;

  // Crear y agregar el mensaje del usuario al contenedor
  const userMessageDiv = createUserMessage(inputMessage.value);
  chatContainer.appendChild(userMessageDiv);

  // Crear y agregar el mensaje de la IA al contenedor
  const IAMessageDiv = createIAMessage(messageContent);
  chatContainer.appendChild(IAMessageDiv);

  // Limpiar el input de mensaje
  inputMessage.value = '';
}

// Agregar el evento al botón de enviar mensaje
sendMessage.addEventListener('click', sendMessageHandler);

  return chat;
};

export default ChatIndividual;
