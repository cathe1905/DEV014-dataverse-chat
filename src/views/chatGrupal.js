import { data } from "../data/dataset.js";
import { navigateTo } from "../router.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
const ChatGrupal = () => {
  const container = document.createElement("div");
  container.classList.add("container");

  const informationContainer = document.createElement("div");
  informationContainer.classList.add("information-container");
  container.appendChild(informationContainer);

  const backButton = document.createElement("button");
  const backButtonImage = document.createElement("img");
  backButtonImage.src =
    "https://i.pinimg.com/564x/e5/3d/bb/e53dbbf853dd8e8532650034f30ad6ed.jpg";
  backButton.appendChild(backButtonImage);
  backButton.classList.add("back-button");
  informationContainer.appendChild(backButton);

  backButton.addEventListener("click", () => {
    navigateTo("/");
  });

  const imagesandTextContainer = document.createElement("div");
  imagesandTextContainer.classList.add("imagesandtext-container");
  informationContainer.appendChild(imagesandTextContainer);

  const idSinger = [];

  for (let i = 0; i < data.length; i++) {
    idSinger.push(data[i].id);

    const imagesandTextContainersingle = document.createElement("a");
    imagesandTextContainersingle.classList.add("imagesandtextsingle-container");

    const image = document.createElement("img");
    image.src = data[i].imageUrl;
    imagesandTextContainersingle.appendChild(image);

    imagesandTextContainersingle.addEventListener("click", () => {
      navigateTo("/ChatIndividual", { id: `${data[i].id}` });
    });

    const nameandshortdescription = document.createElement("div");
    nameandshortdescription.classList.add("nameandshort-description");

    const name = document.createElement("p");
    name.textContent = data[i].name;
    name.classList.add("name-class");
    nameandshortdescription.appendChild(name);

    const shortDescription = document.createElement("p");
    shortDescription.textContent = data[i].shortDescription;
    nameandshortdescription.appendChild(shortDescription);

    imagesandTextContainersingle.appendChild(nameandshortdescription);

    imagesandTextContainer.appendChild(imagesandTextContainersingle);
  }

  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  container.appendChild(chatContainer);
  const apiKeyButton = document.createElement("button");
  apiKeyButton.classList.add("apiKey-button");
  apiKeyButton.textContent = "API Key";
  chatContainer.appendChild(apiKeyButton);

  apiKeyButton.addEventListener("click", () => {
    navigateTo("/api-key");
  });

  const inputContainer = document.createElement("form");
  inputContainer.classList.add("input-Container");
  container.appendChild(inputContainer);

  const inputText = document.createElement("input");
  inputText.setAttribute("type", "text");
  inputText.setAttribute("placeholder", "Escribe aqui tu mensaje");
  inputText.classList.add("message-input");
  inputContainer.appendChild(inputText);

  const buttonSend = document.createElement("button");
  const buttonImage = document.createElement("img");
  buttonImage.src = "https://cdn-icons-png.freepik.com/512/8138/8138457.png";
  buttonSend.appendChild(buttonImage);
  buttonSend.classList.add("button-Send");

  inputContainer.appendChild(buttonSend);
  buttonSend.addEventListener("click", async (e) => {
    e.preventDefault();
    const userMessageContainer = document.createElement("div");
    userMessageContainer.classList.add("user-message");
    const userMessageText = document.createElement("p");
    userMessageText.textContent = inputText.value;
    userMessageContainer.appendChild(userMessageText);
    chatContainer.appendChild(userMessageContainer);
    

    const writing = document.createElement("p");
    writing.classList.add("writing");
    writing.textContent = "24 personas estan escribiendo...";
    chatContainer.appendChild(writing);

    try {
      const respuesta = await communicateWithOpenAI(inputText.value, idSinger);
      inputText.value = "";

      chatContainer.removeChild(writing);

      respuesta.forEach((elemento, i) => {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("response-message");
        const messageText = document.createElement("p");
        messageText.innerHTML = `<span style="font-weight: bold;">${data[i].name}:</span> ${elemento[0].message.content}`;
        messageContainer.appendChild(messageText);
        chatContainer.appendChild(messageContainer);
      });
    } catch (error) {
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("error-message");
      const messageBubblep = document.createElement("p");
      messageBubblep.textContent =
        "Surgió un problema con tu Api Key, por favor revísala";
      errorDiv.appendChild(messageBubblep);
      chatContainer.appendChild(errorDiv);
      inputText.value = "";
    }

    chatContainer.style.overflowY = "auto";
  });

  return container;
};

export default ChatGrupal;
