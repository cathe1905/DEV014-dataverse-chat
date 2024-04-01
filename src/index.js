// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/
/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

// const menuToggle = document.getElementById('menu-toggle');
// const menu = document.getElementById('menu');

// menuToggle.addEventListener('click', () => {
//   menu.classList.toggle('active');
// });

import Home from './views/Home.js';

// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/error': () => {
    const errorEl = document.createElement("div");
    errorEl.textContent = "Error: Page not found";
    return errorEl;
  }
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")
  setRootEl(root);
  onURLChange(window.location)
});
