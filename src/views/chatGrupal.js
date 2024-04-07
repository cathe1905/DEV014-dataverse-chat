import { data } from "../data/dataset.js";
const ChatGrupal = () => {
  // Crear el contenedor principal
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

  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  container.appendChild(chatContainer);

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-Container");
  container.appendChild(inputContainer);



 



  //   // Crear un div para las imágenes
  //   const imagesContainer = document.createElement("div");
  //   imagesContainer.classList.add("images-container");

  //   // Agregar las imágenes al div de imágenes
  //   for (let i = 0; i < data.length; i++) {
  //     const image = document.createElement("img");
  //     image.src = data[i].imageUrl;
  //     imagesContainer.appendChild(image);
  //   }

  //   // Crear un div para el contenedor de Name
  //   const nameContainer = document.createElement("div");
  //   nameContainer.classList.add("name-Container");

  //   // Agregar los nombres al div de Name
  //   for (let i = 0; i < data.length; i++) {
  //     const name = document.createElement("p");
  //     name.textContent = data[i].name;
  //     nameContainer.appendChild(name);
  //   }

  // // Crear un div para el contenedor de shortDescription
  // const shortDescriptionContainer = document.createElement("div");
  // shortDescriptionContainer.classList.add("shortDescription-Container");

  // // Agregar los nombres al div de shortDescription
  // for (let i = 0; i < data.length; i++) {
  //   const shortDescription = document.createElement("p");
  //   shortDescription.textContent = data[i].shortDescription;
  //   shortDescriptionContainer.appendChild(shortDescription);
  // }

  //   // Crear el input de texto
  //   const inputText = document.createElement("input");
  //   inputText.setAttribute("type", "text");
  //   inputText.setAttribute("placeholder", "Escribe aqui tu mensaje");
  //   inputText.classList.add("message-input");

  //   // Crear el botón con la imagen
  //   const button = document.createElement("button");
  //   const buttonImage = document.createElement("img");
  //   buttonImage.src = "https://cdn-icons-png.freepik.com/512/8138/8138457.png";
  //   button.appendChild(buttonImage);
  //   button.classList.add("send-button");
  
  // informationContainer.appendChild(button);


  //   // Agregar los elementos al contenedor principal
  //   container.appendChild(imagesContainer);
  //   container.appendChild(inputText);
  
  //   container.appendChild(nameContainer);
  //   container.appendChild(shortDescriptionContainer);
     return container;
};

export default ChatGrupal;
