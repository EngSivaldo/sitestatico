// Seleciona os botões
const btnUp = document.getElementById("scroll-up");
const btnDown = document.getElementById("scroll-down");

// Evento para rolar suavemente para cima
btnUp.addEventListener("click", () => {
  window.scrollBy({
    top: -window.innerHeight, // sobe uma altura de tela
    behavior: "smooth",
  });
});

// Evento para rolar suavemente para baixo
btnDown.addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight, // desce uma altura de tela
    behavior: "smooth",
  });
});

// Mostra o botão de "subir" apenas quando rolar um pouco a página
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
});
