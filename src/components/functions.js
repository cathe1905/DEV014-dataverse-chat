import { navigateTo } from "../router.js";

export function limpiarHTML(elemento) {
  while (elemento.children[1]) {
    elemento.removeChild(elemento.children[1]);
  }
}
export function cards(data, variable) {
  limpiarHTML(variable);
  const ulList = document.createElement("ul");
  ulList.classList.add("styleUl", "contenedorCards");

  data.forEach((singer) => {
    const enlace = document.createElement("a");
    enlace.id = `${singer.id}`;
    enlace.addEventListener("click", () => {
      navigateTo("/ChatIndividual", { id: `${singer.id}` });
    });
    const liSinger = document.createElement("li");
    liSinger.classList.add("styleLi");
    const dlSinger = document.createElement("dl");
    liSinger.setAttribute("itemtype", "singers");
    liSinger.setAttribute("itemscope", "");
    dlSinger.innerHTML = `
            <dt class="nameSinger">${singer.name}</dt>
            <img src="${singer.imageUrl}">
            <dt itemprop="shortDescription" class="shortDescription" >${singer.shortDescription}</dt>
            <dt itemprop="sort" class="yearOfBirth"> <span>Año de Nacimiento:</span> ${singer.facts.yearOfBirth}</dt>
            <dt itemprop="placeOfBirth" class="placeOfBirth"> <span>Lugar de Nacimiento:</span> ${singer.facts.placeOfBirth}</dt>
            <dt itemprop="mainGenre" class="mainGenre"> <span>Género:</span>${singer.facts.mainGenre}</dt>
          `;
    liSinger.appendChild(dlSinger);
    enlace.appendChild(liSinger);
    ulList.appendChild(enlace);
    variable.appendChild(ulList);
  });
}
