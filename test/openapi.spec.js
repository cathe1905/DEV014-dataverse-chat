import { communicateWithOpenAI } from "../src/lib/openAIApi.js";

global.fetch = jest.fn();

describe("Probamos que la funcion communicateWithOpenAI devuelva lo esperado", () => {
  test("should return a message from OpenAI API", async () => {
    const messages = "cual es tu instrumento favorito";
    const id = "shakira";
    const expectedResponse = {
      choices: [
        { text: "Hola, soy Shakira. Mi instrumento favorito es la guitarra." },
      ],
    };

    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(expectedResponse),
    });

    const result = await communicateWithOpenAI(messages, id);

    expect(fetch).toHaveBeenCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: expect.any(String),
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content: messages },
            {
              role: "system",
              content: `Responde en primera persona como si fuera este cantante:${id}`,
            },
          ],
          temperature: 0.7,
        }),
      }
    );

    expect(result).toEqual([expectedResponse.choices]);
  });

  test("should handle an invalid response", async () => {
    const messages = "cual es tu instrumento favorito";
    const id = "shakira";

    fetch.mockRejectedValueOnce(new Error("404 Not Found"));

    await expect(communicateWithOpenAI(messages, id)).rejects.toThrow(
      "404 Not Found"
    );
  });
});
