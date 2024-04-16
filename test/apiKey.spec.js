// test/apiKey.spec.js

import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("getApiKey", () => {
  it("LocalStorage get the ApiKey properly", () => {
    const apiKey = "miApiKey123456789012345678901234567890";
    localStorage.setItem("ApiKey", apiKey);
    expect(getApiKey()).toBe(apiKey);
  });
});

describe("setApiKey", () => {
  it("the ApiKey is a string", () => {
    const apiKey = "miApiKey123456789012345678901234567890";
    setApiKey(apiKey);
    const apiKeyFromLocalStorage = localStorage.getItem("ApiKey");
    expect(typeof apiKeyFromLocalStorage).toBe("string");
  });
});
