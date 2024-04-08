let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  if (typeof routes !== "object") {
    throw new Error("This is not an object");
  }
  // optional Throw errors if routes doesn't define an /error route
  if (!routes["/error"]) {
    throw new Error(
      "Routes must define an /error route with a function handler"
    );
  }
  // assign ROUTES
  ROUTES = routes;
};
const renderView = (pathname, props = {}) => {
  // clear the root element
  rootEl.innerHTML = "";
  // find the correct view in ROUTES for the pathname
  const view = ROUTES[pathname] || ROUTES["/error"];
  // render the correct view passing the value of props
  const viewElement = view(props);
  // add the view element to the DOM root element
  rootEl.appendChild(viewElement);
};

const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  const obj = Object.fromEntries(params);
  return obj;
};
export const navigateTo = (pathname, props = {}) => {
  // Update window history with pushState
  const queryString = Object.keys(props).map(key => `${key}=${props[key]}`).join('&');
  // Concatenar la cadena de consulta al pathname
  const fullPath = `${pathname}?${queryString}`;
  // Actualizar la URL
  window.history.pushState({}, '', fullPath);
  // Renderizar la vista
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  const { pathname, search } = location;
  // convert the search params to an object
  const searchParams = queryStringToObject(search);
  // render the view with the pathname and object
  renderView(pathname, searchParams);
};
