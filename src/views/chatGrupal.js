import { data } from "../data/dataset.js";

const ChatGrupal = () => {
  // Crear el contenedor principal
  const container = document.createElement("div");
  container.classList.add("chat-container");

  const backButton = document.createElement("button");
  const backButtonImage = document.createElement("img");
  backButtonImage.src = "https://i.pinimg.com/564x/e5/3d/bb/e53dbbf853dd8e8532650034f30ad6ed.jpg";
  backButton.appendChild(backButtonImage);
  backButton.classList.add("back-button");
  
  container.appendChild(backButton);


  // Crear un div para las imágenes
  const imagesContainer = document.createElement("div");
  imagesContainer.classList.add("images-container");

  // Agregar las imágenes al div de imágenes
  for (let i = 0; i < 8; i++) {
    const image = document.createElement("img");
    image.src = data[i].imageUrl;
    imagesContainer.appendChild(image);
  }

  // Crear el input de texto
  const inputText = document.createElement("input");
  inputText.setAttribute("type", "text");
  inputText.setAttribute("placeholder", "Escribe aqui tu mensaje");
  inputText.classList.add("message-input");

  // Crear el botón con la imagen
  const button = document.createElement("button");
  const buttonImage = document.createElement("img");
  buttonImage.src = "https://cdn-icons-png.freepik.com/512/8138/8138457.png";
  button.appendChild(buttonImage);
  button.classList.add("send-button");

  // Agregar los elementos al contenedor principal
  container.appendChild(imagesContainer);
  container.appendChild(inputText);
  container.appendChild(button);

  return container;
};

export default ChatGrupal;

