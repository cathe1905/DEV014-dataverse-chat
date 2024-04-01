import { data } from "../data/dataset.js";
// import { filterData, sortData, computeStats } from "../lib/dataFunctions.js";

export default function Home() {
  const viewEl = document.createElement("div");
  const ulList = document.createElement("ul");
  ulList.classList.add("styleUl");
  data.forEach((singer) => {
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
    ulList.appendChild(liSinger);
    viewEl.appendChild(ulList);
  });
  return viewEl;
  //   const viewEl = document.createElement("div");
  //   viewEl.textContent = "Welcome to the home page!";
  //   return viewEl;
}
