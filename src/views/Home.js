import { data } from "../data/dataset.js";
import { filterData, sortData, computeStats } from "../lib/dataFunctions.js";

export default function Home() {
  const viewEl = document.createElement("div");
  const infohtml = document.createElement("body");
  infohtml.innerHTML = `
  <header>
      <h1>Tu artista favorito, ¡aquí!</h1>
    </header>
    <main>
      <h2>Encuentra la información más top de tus artistas favoritos</h2>
      <div class="flex-container">
        <div>
          <label for="mainGenre"></label>
          <select name="mainGenre" id="mainGenre" data-testid="select-filter" > 
            <option value="" disabled selected>Tipo de Música</option>
            <option value="Pop">Pop</option>
            <option value="Latino">Latino</option>
            <option value="Rock">Rock</option>
            <option value="R&B">R&B</option>
            <option value="Reggae">Reggae</option>
          </select>
        </div>
        <div>
          <label for="sort"></label>
          <select name="sort" id="sort" data-testid="select-sort">
            <option value="" disabled selected>Organizar por:</option>
            <option value="asc">Ascendente por año de nacimiento</option>
            <option value="desc">Descendente por año de nacimiento</option>
          </select>
        </div>
        <button id="compute">Dato Random</button>
        <div id="conteinerCompute"></div>
        <button data-testid="button-clear" id="buttonClear">
          Limpiar Filtros
        </button>
      </div>`;
  viewEl.appendChild(infohtml);

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

  //variables
  const mainGenre = viewEl.querySelector("#mainGenre");
  const compute = viewEl.querySelector("#compute");
  const changeCompute = viewEl.querySelector("#conteinerCompute");
  changeCompute.style.display = "none";
  const cleanButton = viewEl.querySelector("#buttonClear");
  const sort = viewEl.querySelector("#sort");
  let filteredData = [];
  //let sortedData;

  //eventos
  mainGenre.addEventListener("change", (e) => {
    const optionValue = e.target.value;
    filteredData = filterData(data, "mainGenre", optionValue);
    //renderItems(filteredData);
  });

  sort.addEventListener("change", (e) => {
    const optionSort = e.target.value;
    if (filteredData.length > 0) {
      sortedData = sortData(filteredData, "yearOfBirth", optionSort);
      // renderItems(sortedData);
    } else {
      sortedData = sortData(data, "yearOfBirth", optionSort);
      //renderItems(sortedData);
    }
  });

  compute.addEventListener("click", function () {
    const cumputeResult = computeStats(data);
    if (changeCompute.style.display === "none") {
      changeCompute.style.display = "block";
      changeCompute.innerHTML =
        "El  " +
        cumputeResult +
        "%" +
        "  de los cantantes en nuestra base de datos nacieron entre 1970 y 1990.";
    } else {
      changeCompute.style.display = "none";
    }
  });

  cleanButton.addEventListener("click", () => {
    // renderItems(data);
    changeCompute.innerHTML = "";
    mainGenre.options[0].selected = true;
    sort.options[0].selected = true;
    filteredData = [];
  });

  return viewEl;
  //   const viewEl = document.createElement("div");
  //   viewEl.textContent = "Welcome to the home page!";
  //   return viewEl;
}
