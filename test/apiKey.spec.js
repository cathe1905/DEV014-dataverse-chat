// test/apiKey.spec.js

import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("getApiKey", () => {
  it("La API key se recupera correctamente del localStorage", () => {
    const apiKey = "miApiKey123456789012345678901234567890";
    localStorage.setItem("ApiKey", apiKey);
    expect(getApiKey()).toBe(apiKey);
  });
});

describe("setApiKey", () => {
  it("La API key es una cadena de caracteres", () => {
    const apiKey = "miApiKey123456789012345678901234567890";
    setApiKey(apiKey);
    const apiKeyFromLocalStorage = localStorage.getItem("ApiKey");
    expect(typeof apiKeyFromLocalStorage).toBe("string");
  });
});
