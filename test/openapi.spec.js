/* eslint-disable */

import { getApiKey } from "../src/lib/apiKey.js";
import { communicateWithOpenAI } from "../src/lib/openAIApi.js";
import { solicitude } from "../src/lib/openAIApi.js";

// const Shakira = {
//   id: "shakira",
//   name: "Shakira",
//   shortDescription:
//     "Cantante y bailarina colombiana, ícono internacional de la música pop y latina.",
//   description:
//     "Shakira, la icónica cantante y bailarina colombiana, ha dejado una marca imborrable en la música pop y latina. Nacida en Barranquilla en 1977, su energía vibrante y voz única la catapultaron a la fama internacional. Conocida por fusionar ritmos latinos con pop y rock, Shakira ha conquistado escenarios globales. Su carrera multifacética abarca décadas y ha sido galardonada con numerosos premios. Además de su éxito musical, es una filántropa comprometida. Desde su impactante debut con 'Pies Descalzos' hasta hits como 'Hips Don't Lie', Shakira continúa siendo una influencia destacada, trascendiendo fronteras con su autenticidad y carisma inigualables.",
//   imageUrl:
//     "https://www.shakiraperfumes.com/images/perfumes/rojo/extra-content/extra-2-v2.webp",
//   facts: {
//     yearOfBirth: 1977,
//     placeOfBirth: "Barranquilla, Colombia",
//     mainGenre: "Rock",
//   },
// };

// describe("test de comunicación con open Ai", () => {
//   it("hay una respuesta", () => {
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         ok: true,
//         json: () =>
//           Promise.resolve("la comunicación es establece correctamente"),
//       })
//     );
//     communicateWithOpenAI("cual es tu instrumento favorito", Shakira.id).then(
//       (res) => {
//         console.log(res);
//         expect(res).not.toBeNull();
//       }
//     );
//   });
// });

// describe("communicateWithOpenAI", () => {
//   it("should return example data", async () => {
//     jest.mock("../src/lib/openAIApi.js", () => ({
//       communicateWithOpenAI: jest.fn(() => Promise.resolve("example")),
//     }));

//     const { communicateWithOpenAI } = require("../src/lib/openAIApi.js");

//     const data = await communicateWithOpenAI();

//     expect(data).toBe("example");
//   });
// });
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

    // Mock de fetch para devolver la respuesta esperada
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(expectedResponse),
    });

    // Llamamos a la función y esperamos su respuesta
    const result = await communicateWithOpenAI(messages, id);

    // Verificamos que se haga una llamada fetch con los parámetros correctos
    expect(fetch).toHaveBeenCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: expect.any(String), // No comprobamos el valor real de la clave, solo que exista
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

    // Verificamos que la respuesta sea la esperada
    expect(result).toEqual([expectedResponse.choices]);
  });

  test("should handle an invalid response", async () => {
    const messages = "cual es tu instrumento favorito";
    const id = "shakira";

    // Mock de fetch para devolver un error
    fetch.mockRejectedValueOnce(new Error("404 Not Found"));

    // Verificamos que la función maneje correctamente el error
    await expect(communicateWithOpenAI(messages, id)).rejects.toThrow(
      "404 Not Found"
    );
  });
});
