import { data } from "../data/dataset.js";

const ChatGrupal = () => {
  const container = document.createElement("div");

  const images = document.createElement("img");

  images.src = data[6].imageUrl;

  container.appendChild(images);

  return container;
};

export default ChatGrupal;
