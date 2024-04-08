const Error = () => {
  const errorEl = document.createElement("div");
  errorEl.innerHTML = `
  <p class="titleError"> Error: Page not found</p>
  <div class="taylor">
  <img src="https://i.pinimg.com/736x/91/1c/0a/911c0a29688c0619d58a33da634ecef2.jpg" alt="taylor decepcionada">
  </div>
  `;

  return errorEl;
};

export default Error;
