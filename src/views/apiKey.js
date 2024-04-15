import { setApiKey } from "../lib/apiKey.js";
import { navigateTo } from "../router.js";

const ApiKey = () => {
  const containerApikey = document.createElement("div");
  containerApikey.classList.add("containerapikey");

  const backButton = document.createElement("button");
  const backButtonImage = document.createElement("img");
  backButtonImage.src =
    "https://i.pinimg.com/564x/e5/3d/bb/e53dbbf853dd8e8532650034f30ad6ed.jpg";
  backButton.appendChild(backButtonImage);
  backButton.classList.add("back-button");
  containerApikey.appendChild(backButton);

  backButton.addEventListener("click", () => {
    navigateTo("/");
  });

  const formContainer = document.createElement("div");
  formContainer.classList.add("form-Container");
  containerApikey.appendChild(formContainer);

  const titleApikey = document.createElement("h1");
  titleApikey.classList.add("title-apikey");
  titleApikey.textContent = "Api Key";
  formContainer.appendChild(titleApikey);

  const inputApiKeyText = document.createElement("input");
  inputApiKeyText.setAttribute("type", "text");
  inputApiKeyText.setAttribute("placeholder", "Escribe aqui tu mensaje");
  inputApiKeyText.classList.add("message-api-key-input");
  formContainer.appendChild(inputApiKeyText);

  const saveButton = document.createElement("button");
  saveButton.classList.add("apiKey-save-button");
  saveButton.textContent = "Guardar";
  formContainer.appendChild(saveButton);

  saveButton.addEventListener("click", () => {
    if (inputApiKeyText.value === "") {
      alert("Debes ingresar una ApiKey valida");
      saveButton.disabled = true;
    } else {
      saveButton.disabled = false;
      setApiKey(inputApiKeyText.value);
    }
  });
  return containerApikey;
};

export default ApiKey;
