import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = (messages, id) => {
  const promises = [];
  if (Array.isArray(id)) {
    for (let i = 0; i < id.length; i++) {
      const result = solicitude(id[i]);
      promises.push(result);
    }
  } else {
    const result = solicitude(id);
    promises.push(result);
  }
  function solicitude(id) {
    const OPENAI_API_KEY = getApiKey();
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: `${messages}` },
        {
          role: "system",
          content: `Responde en primera persona como si fuera este cantante:${id}, si la pregunta es en plural de igual forma responde en primera persona y no te despidas a menos que el mensaje sea de despedida`,
        },
      ],
      temperature: 0.7,
    };
    return fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        return data.choices;
      })
      .catch((error) => {
        throw error;
      });
  }
  return Promise.all(promises)
    .then((results) => {
      return results;
    })
    .catch((error) => {
      throw error;
    });
};
