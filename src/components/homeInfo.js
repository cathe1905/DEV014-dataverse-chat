export const homeComponet = () => {
  const infoHome = `
<header>
<button id="menu-toggle" class="menu-toogle" aria-label="Abrir menú">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCDuObAFhBONAysts8pNQ3H2WJFb36z5A-w7W3Y_lWw&s" alt="logo hamburguesa">
</button>
    <h1>Tu artista favorito, ¡aquí!</h1>
  </header>
  <main>
    <h2>Encuentra la información más top de tus artistas favoritos</h2>
    <div class="grid menuStart" id="menu">
    <button id="close-menu" aria-label="Cerrar menú">×</button>
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
      </div>
      <div class="segundo-grupo">
        <button data-testid="button-clear" id="buttonClear">Limpiar Filtros</button>
        <button id="api-key">Api Key</button>
        <button id="goToChatGrupalBtn">Chat Grupal</button>
      </div>
    </div>
    <div id="conteinerCompute"></div>
  </main>
    `;
  return infoHome;
};
