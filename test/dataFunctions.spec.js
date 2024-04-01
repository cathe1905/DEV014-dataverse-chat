import { filterData, sortData, computeStats } from "../src/dataFunctions.js";

import { data as fakeData } from "./data.js";
//test
describe("Check that filter function works", () => {
  it("returns All of singer who main genre is Pop", () => {
    const dataPop = [
      {
        id: "lady-gaga",
        name: "Lady Gaga",
        shortDescription:
          "Cantante, actriz y activista estadounidense, reconocida por su estilo innovador y voz potente.",
        description:
          "Stefani Joanne Angelina Germanotta, conocida como Lady Gaga, ha dejado una marca imborrable en la música, el cine y la moda. Nacida en Nueva York en 1986, su carrera artística se caracteriza por su innovación y autenticidad. Gaga es una fuerza creativa que ha desafiado convenciones con su estilo único y provocador. Su música, que abarca géneros como pop, dance y electrónica, ha conquistado audiencias globales. Además de su talento musical, Lady Gaga ha destacado en la actuación, ganando reconocimiento por su papel en 'A Star is Born'.",
        imageUrl: "https://img2.rtve.es/im/6195119/?w=900.jpg",
        facts: {
          yearOfBirth: 1986,
          placeOfBirth: "Nueva York, Estados Unidos",
          mainGenre: "Pop",
        },
      },
      {
        id: "justin-bieber",
        name: "Justin Bieber",
        shortDescription:
          "Cantante y compositor canadiense, descubierto a temprana edad en YouTube.",
        description:
          "Justin Bieber, el fenómeno pop canadiense, saltó a la fama a temprana edad gracias a su talento vocal y carisma magnético. Nacido en Stratford, Ontario, en 1994, Bieber ha evolucionado constantemente en su carrera musical, explorando diversos estilos y madurando como artista. Su impacto en la cultura pop va más allá de la música, siendo una figura icónica en la era digital. Desde éxitos adolescentes hasta su incursión en géneros como el R&B, Bieber ha mantenido su relevancia en la escena musical internacional.",
        imageUrl: "https://i.blogs.es/2f3455/justin-bieber-3-/650_1200.jpg",
        facts: {
          yearOfBirth: 1994,
          placeOfBirth: "Stratford, Ontario, Canadá",
          mainGenre: "Pop",
        },
      },
      {
        id: "taylor-swift",
        name: "Taylor Swift",
        shortDescription:
          "Cantante y compositora estadounidense, icónica en la música country y pop.",
        description:
          "Taylor Swift, nacida el 13 de diciembre de 1989 en Reading, Pennsylvania, Estados Unidos, es una cantante y compositora icónica con una carrera que abarca diversos géneros musicales, desde el country hasta el pop. Su narrativa lírica distintiva y su habilidad para conectar con la audiencia la han convertido en una de las artistas más influyentes de la música contemporánea. Con múltiples álbumes aclamados y numerosos éxitos, Swift ha trascendido las fronteras del country, explorando nuevos sonidos y estilos a lo largo de su evolución artística. ",
        imageUrl:
          "https://images.hola.com/us/imagenes/moda/2023032247198/looks-the-eras-tour-taylor-swift-2023-rd/0-219-993/roberto-cavalli-dos-piezas-verde-a.jpg",
        facts: {
          yearOfBirth: 1989,
          placeOfBirth: "Reading, Pennsylvania, Estados Unidos",
          mainGenre: "Pop",
        },
      },
    ];
    expect(filterData(fakeData, "mainGenre", "Pop")).toEqual(dataPop);
  });
  it("returns All of singer who main genre is Rock", () => {
    const dataRock = [
      {
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
      },
    ];
    expect(filterData(fakeData, "mainGenre", "Rock")).toEqual(dataRock);
  });
  it("returns All of singer who main genre is Latino", () => {
    const dataLatino = [
      {
        id: "enrique-iglesias",
        name: "Enrique Iglesias",
        shortDescription:
          "Cantante español, referente del pop latino y baladas románticas.",
        description:
          "Enrique Iglesias, conocido como el 'Rey del Pop Latino', ha dejado huella en la música con su voz cautivadora y éxitos que han conquistado corazones alrededor del mundo. Nació en Madrid, España, en 1975, y su nacionalidad española lo conecta profundamente con sus raíces. Su carrera, marcada por la pasión y la autenticidad, abarca décadas y ha evolucionado con el tiempo, consolidándolo como un referente en el pop latino y las baladas románticas. A lo largo de su trayectoria, Enrique ha logrado numerosos premios y reconocimientos, destacando su impacto duradero en la escena musical internacional.",
        imageUrl:
          "https://srrsyko.weebly.com/uploads/4/3/3/8/43386459/5346368_orig.jpg",
        facts: {
          yearOfBirth: 1975,
          placeOfBirth: "Madrid, España",
          mainGenre: "Latino",
        },
      },
    ];
    expect(filterData(fakeData, "mainGenre", "Latino")).toEqual(dataLatino);
  });
});
describe("Check that SortData function works", () => {
  it("Return All singer Sorted from filter function increasingly", () => {
    const dataAsc = [
      {
        id: "enrique-iglesias",
        name: "Enrique Iglesias",
        shortDescription:
          "Cantante español, referente del pop latino y baladas románticas.",
        description:
          "Enrique Iglesias, conocido como el 'Rey del Pop Latino', ha dejado huella en la música con su voz cautivadora y éxitos que han conquistado corazones alrededor del mundo. Nació en Madrid, España, en 1975, y su nacionalidad española lo conecta profundamente con sus raíces. Su carrera, marcada por la pasión y la autenticidad, abarca décadas y ha evolucionado con el tiempo, consolidándolo como un referente en el pop latino y las baladas románticas. A lo largo de su trayectoria, Enrique ha logrado numerosos premios y reconocimientos, destacando su impacto duradero en la escena musical internacional.",
        imageUrl:
          "https://srrsyko.weebly.com/uploads/4/3/3/8/43386459/5346368_orig.jpg",
        facts: {
          yearOfBirth: 1975,
          placeOfBirth: "Madrid, España",
          mainGenre: "Latino",
        },
      },
      {
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
      },
      {
        id: "lady-gaga",
        name: "Lady Gaga",
        shortDescription:
          "Cantante, actriz y activista estadounidense, reconocida por su estilo innovador y voz potente.",
        description:
          "Stefani Joanne Angelina Germanotta, conocida como Lady Gaga, ha dejado una marca imborrable en la música, el cine y la moda. Nacida en Nueva York en 1986, su carrera artística se caracteriza por su innovación y autenticidad. Gaga es una fuerza creativa que ha desafiado convenciones con su estilo único y provocador. Su música, que abarca géneros como pop, dance y electrónica, ha conquistado audiencias globales. Además de su talento musical, Lady Gaga ha destacado en la actuación, ganando reconocimiento por su papel en 'A Star is Born'.",
        imageUrl: "https://img2.rtve.es/im/6195119/?w=900.jpg",
        facts: {
          yearOfBirth: 1986,
          placeOfBirth: "Nueva York, Estados Unidos",
          mainGenre: "Pop",
        },
      },
      {
        id: "taylor-swift",
        name: "Taylor Swift",
        shortDescription:
          "Cantante y compositora estadounidense, icónica en la música country y pop.",
        description:
          "Taylor Swift, nacida el 13 de diciembre de 1989 en Reading, Pennsylvania, Estados Unidos, es una cantante y compositora icónica con una carrera que abarca diversos géneros musicales, desde el country hasta el pop. Su narrativa lírica distintiva y su habilidad para conectar con la audiencia la han convertido en una de las artistas más influyentes de la música contemporánea. Con múltiples álbumes aclamados y numerosos éxitos, Swift ha trascendido las fronteras del country, explorando nuevos sonidos y estilos a lo largo de su evolución artística. ",
        imageUrl:
          "https://images.hola.com/us/imagenes/moda/2023032247198/looks-the-eras-tour-taylor-swift-2023-rd/0-219-993/roberto-cavalli-dos-piezas-verde-a.jpg",
        facts: {
          yearOfBirth: 1989,
          placeOfBirth: "Reading, Pennsylvania, Estados Unidos",
          mainGenre: "Pop",
        },
      },
      {
        id: "justin-bieber",
        name: "Justin Bieber",
        shortDescription:
          "Cantante y compositor canadiense, descubierto a temprana edad en YouTube.",
        description:
          "Justin Bieber, el fenómeno pop canadiense, saltó a la fama a temprana edad gracias a su talento vocal y carisma magnético. Nacido en Stratford, Ontario, en 1994, Bieber ha evolucionado constantemente en su carrera musical, explorando diversos estilos y madurando como artista. Su impacto en la cultura pop va más allá de la música, siendo una figura icónica en la era digital. Desde éxitos adolescentes hasta su incursión en géneros como el R&B, Bieber ha mantenido su relevancia en la escena musical internacional.",
        imageUrl: "https://i.blogs.es/2f3455/justin-bieber-3-/650_1200.jpg",
        facts: {
          yearOfBirth: 1994,
          placeOfBirth: "Stratford, Ontario, Canadá",
          mainGenre: "Pop",
        },
      },
    ];
    expect(sortData(fakeData, "yearOfBirth", "asc")).toEqual(dataAsc);
  });
  it("Return All singer Sorted from filter function descendently", () => {
    const dataDes = [
      {
        id: "justin-bieber",
        name: "Justin Bieber",
        shortDescription:
          "Cantante y compositor canadiense, descubierto a temprana edad en YouTube.",
        description:
          "Justin Bieber, el fenómeno pop canadiense, saltó a la fama a temprana edad gracias a su talento vocal y carisma magnético. Nacido en Stratford, Ontario, en 1994, Bieber ha evolucionado constantemente en su carrera musical, explorando diversos estilos y madurando como artista. Su impacto en la cultura pop va más allá de la música, siendo una figura icónica en la era digital. Desde éxitos adolescentes hasta su incursión en géneros como el R&B, Bieber ha mantenido su relevancia en la escena musical internacional.",
        imageUrl: "https://i.blogs.es/2f3455/justin-bieber-3-/650_1200.jpg",
        facts: {
          yearOfBirth: 1994,
          placeOfBirth: "Stratford, Ontario, Canadá",
          mainGenre: "Pop",
        },
      },
      {
        id: "taylor-swift",
        name: "Taylor Swift",
        shortDescription:
          "Cantante y compositora estadounidense, icónica en la música country y pop.",
        description:
          "Taylor Swift, nacida el 13 de diciembre de 1989 en Reading, Pennsylvania, Estados Unidos, es una cantante y compositora icónica con una carrera que abarca diversos géneros musicales, desde el country hasta el pop. Su narrativa lírica distintiva y su habilidad para conectar con la audiencia la han convertido en una de las artistas más influyentes de la música contemporánea. Con múltiples álbumes aclamados y numerosos éxitos, Swift ha trascendido las fronteras del country, explorando nuevos sonidos y estilos a lo largo de su evolución artística. ",
        imageUrl:
          "https://images.hola.com/us/imagenes/moda/2023032247198/looks-the-eras-tour-taylor-swift-2023-rd/0-219-993/roberto-cavalli-dos-piezas-verde-a.jpg",
        facts: {
          yearOfBirth: 1989,
          placeOfBirth: "Reading, Pennsylvania, Estados Unidos",
          mainGenre: "Pop",
        },
      },
      {
        id: "lady-gaga",
        name: "Lady Gaga",
        shortDescription:
          "Cantante, actriz y activista estadounidense, reconocida por su estilo innovador y voz potente.",
        description:
          "Stefani Joanne Angelina Germanotta, conocida como Lady Gaga, ha dejado una marca imborrable en la música, el cine y la moda. Nacida en Nueva York en 1986, su carrera artística se caracteriza por su innovación y autenticidad. Gaga es una fuerza creativa que ha desafiado convenciones con su estilo único y provocador. Su música, que abarca géneros como pop, dance y electrónica, ha conquistado audiencias globales. Además de su talento musical, Lady Gaga ha destacado en la actuación, ganando reconocimiento por su papel en 'A Star is Born'.",
        imageUrl: "https://img2.rtve.es/im/6195119/?w=900.jpg",
        facts: {
          yearOfBirth: 1986,
          placeOfBirth: "Nueva York, Estados Unidos",
          mainGenre: "Pop",
        },
      },
      {
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
      },
      {
        id: "enrique-iglesias",
        name: "Enrique Iglesias",
        shortDescription:
          "Cantante español, referente del pop latino y baladas románticas.",
        description:
          "Enrique Iglesias, conocido como el 'Rey del Pop Latino', ha dejado huella en la música con su voz cautivadora y éxitos que han conquistado corazones alrededor del mundo. Nació en Madrid, España, en 1975, y su nacionalidad española lo conecta profundamente con sus raíces. Su carrera, marcada por la pasión y la autenticidad, abarca décadas y ha evolucionado con el tiempo, consolidándolo como un referente en el pop latino y las baladas románticas. A lo largo de su trayectoria, Enrique ha logrado numerosos premios y reconocimientos, destacando su impacto duradero en la escena musical internacional.",
        imageUrl:
          "https://srrsyko.weebly.com/uploads/4/3/3/8/43386459/5346368_orig.jpg",
        facts: {
          yearOfBirth: 1975,
          placeOfBirth: "Madrid, España",
          mainGenre: "Latino",
        },
      },
    ]; 
    expect(sortData(fakeData, "yearOfBirth", "des")).toEqual(dataDes);
  });
});
describe("Check that computeStats function works", () => {
  it("Return the statistics on singers born between 1970 and 1990.", () => {
    expect(computeStats(fakeData)).toBe("80.00");
  });
});