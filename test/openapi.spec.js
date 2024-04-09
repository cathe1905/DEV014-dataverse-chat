/* eslint-disable */

import { getApiKey } from "../src/lib/apiKey.js";
import { communicateWithOpenAI } from "../src/lib/openAIApi.js";

const Shakira = {
  id: "shakira",
  name: "Shakira",
  shortDescription:
    "Cantante y bailarina colombiana, ícono internacional de la música pop y latina.",
  description:
    "Shakira, la icónica cantante y bailarina colombiana, ha dejado una marca imborrable en la música pop y latina. Nacida en Barranquilla en 1977, su energía vibrante y voz única la catapultaron a la fama internacional. Conocida por fusionar ritmos latinos con pop y rock, Shakira ha conquistado escenarios globales. Su carrera multifacética abarca décadas y ha sido galardonada con numerosos premios. Además de su éxito musical, es una filántropa comprometida. Desde su impactante debut con 'Pies Descalzos' hasta hits como 'Hips Don't Lie', Shakira continúa siendo una influencia destacada, trascendiendo fronteras con su autenticidad y carisma inigualables.",
  imageUrl:
    "https://www.shakiraperfumes.com/images/perfumes/rojo/extra-content/extra-2-v2.webp",
  facts: {
    yearOfBirth: 1977,
    placeOfBirth: "Barranquilla, Colombia",
    mainGenre: "Rock",
  },
};

describe("test de comunicación con open Ai", () => {
  it("hay una respuesta", () => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: true, json:()=> Promise.resolve('A tipos como tuuuuuuuu') }));
    communicateWithOpenAI("cual es tu instrumento favorito", Shakira.id).then(
      (res) => {
        console.log(res);
        expect(res).not.toBeNull();
      }
    );
  });
});
