import Home from "./views/Home.js";
import Error from "./views/Error.js";
import ApiKey from "./views/apiKey.js";
import ChatGrupal from "./views/chatGrupal.js";
import ChatIndividual from "./views/chatIndividual.js";

import { setRootEl, setRoutes, onURLChange } from "./router.js";

const routes = {
  "/": Home,
  "/error": Error,
  "/api-key": ApiKey,
  "/ChatGrupal": ChatGrupal,
  "/ChatIndividual": ChatIndividual,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  setRootEl(root);
  onURLChange(window.location);
});

window.addEventListener("popstate", () => {
  onURLChange(window.location);
});
