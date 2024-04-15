// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = (messages, id) => {
  const OPENAI_API_KEY = getApiKey();
  const data = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `${messages}` },{role:"system",content: `Responde en primera persona como si fuera este cantante:${id}` }],
    temperature: 0.7,
  };
  fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  //Aquí es donde debes implementar la petición con fetch o axios
};
