import { data } from "../data/dataset.js";
import { filterData, sortData, computeStats } from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";
import { homeComponet } from "../components/homeInfo.js";
import { cards } from "../components/functions.js";

export default function Home() {
  const viewEl = document.createElement("div");
  const infohtml = document.createElement("body");
  infohtml.innerHTML = homeComponet();

  viewEl.appendChild(infohtml);

  cards(data, viewEl);

  //variables
  const mainGenre = viewEl.querySelector("#mainGenre");
  const compute = viewEl.querySelector("#compute");
  const changeCompute = viewEl.querySelector("#conteinerCompute");
  changeCompute.style.display = "none";
  const cleanButton = viewEl.querySelector("#buttonClear");
  const sort = viewEl.querySelector("#sort");
  let filteredData = [];
  let sortedData;

  //eventos
  mainGenre.addEventListener("change", (e) => {
    const optionValue = e.target.value;
    filteredData = filterData(data, "mainGenre", optionValue);
    cards(filteredData, viewEl);
    menuClose();
  });

  sort.addEventListener("change", (e) => {
    const optionSort = e.target.value;
    menuClose();
    if (filteredData.length > 0) {
      sortedData = sortData(filteredData, "yearOfBirth", optionSort);
      cards(sortedData, viewEl);
    } else {
      sortedData = sortData(data, "yearOfBirth", optionSort);
      cards(sortedData, viewEl);
    }
  });

  compute.addEventListener("click", function () {
    const cumputeResult = computeStats(data);
    menuClose();
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
    cards(data, viewEl);
    menuClose();
    mainGenre.options[0].selected = true;
    sort.options[0].selected = true;
    filteredData = [];
    changeCompute.style.display = "none";
  });

  const goToChatGrupalBtn = viewEl.querySelector("#goToChatGrupalBtn");
  goToChatGrupalBtn.addEventListener("click", () => {
    navigateTo("/ChatGrupal");
  });

  const goToApiKey = viewEl.querySelector("#api-key");
  goToApiKey.addEventListener("click", () => {
    navigateTo("/api-key");
  });

  //menu hamburguesa
  const menu = viewEl.querySelector("#menu");
  viewEl.querySelector("#menu-toggle").addEventListener("click", menuOpen);
  viewEl.querySelector("#close-menu").addEventListener("click", menuClose);

  function menuOpen() {
    menu.classList.add("menuOpen");
    menu.classList.remove("menuStart");
  }
  function menuClose() {
    menu.classList.add("menuStart");
  }

  return viewEl;
}
