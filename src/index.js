// const menuToggle = document.getElementById('menu-toggle');
// const menu = document.getElementById('menu');

// menuToggle.addEventListener('click', () => {
//   menu.classList.toggle('active');
// });

import Home from "./views/Home.js";
import Error from "./views/Error.js";
import ApiKey from "./views/apiKey.js";
import ChatGrupal from "./views/Chatgrupal.js";
import ChatIndividual from "./views/chatIndividual.js";

import { setRootEl, setRoutes, onURLChange } from "./router.js";

// Define your routes and their associated views
const routes = {
  "/": Home,
  "/error": Error,
  "/api-key": ApiKey,
  "/ChatGrupal": ChatGrupal,
  "/ChatIndividual": ChatIndividual,
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  setRootEl(root);
  onURLChange(window.location);
});

window.addEventListener("popstate", () => {
  onURLChange(window.location);
});
