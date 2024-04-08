//import ApiKey from "../views/apiKey";

export const getApiKey = () => {
  const valor = localStorage.getItem("ApiKey");
  return valor;
};
export const setApiKey = (key) => {
  localStorage.setItem("ApiKey", key);
};
