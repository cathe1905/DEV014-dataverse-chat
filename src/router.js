let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  if (typeof routes !== "object") {
    throw new Error("This is not an object");
  }
  if (!routes["/error"]) {
    throw new Error(
      "Routes must define an /error route with a function handler"
    );
  }
  ROUTES = routes;
};
const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = "";

  const view = ROUTES[pathname] || ROUTES["/error"];

  const viewElement = view(props);

  rootEl.appendChild(viewElement);
};

const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  const obj = Object.fromEntries(params);
  return obj;
};
export const navigateTo = (pathname, props = {}) => {
  const queryString = Object.keys(props)
    .map((key) => `${key}=${props[key]}`)
    .join("&");

  const fullPath = `${pathname}?${queryString}`;

  window.history.pushState({}, "", fullPath);

  renderView(pathname, props);
};

export const onURLChange = (location) => {
  const { pathname, search } = location;
  const searchParams = queryStringToObject(search);

  renderView(pathname, searchParams);
};
