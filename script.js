document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("graceHopper").addEventListener("click", function () {
        window.location.href = "grace.html";
    });

    document.getElementById("hedyLamarr").addEventListener("click", function () {
        window.location.href = "hedy.html";
    });

    document.getElementById("katherineJohnson").addEventListener("click", function () {
        window.location.href = "katherine.html";
    });

    console.log("JavaScript carregado e eventos adicionados!");
});

function toggleCard(card) {
  card.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("side-menu");
  const currentPage = window.location.pathname.split("/").pop();

  menu.innerHTML = ""; 

  const paginasInternas = ["dados.html", "historia.html", "katherine.html", "hedy.html", "grace.html"];

  if (currentPage === "" || currentPage === "index.html") {

    menu.innerHTML = `
      <a href="#introducao">Introdução</a>
      <a href="#exemplos">Exemplos</a>
      <a href="#personalidades">Personalidades</a>
      <a href="#equipe">Equipe</a>
    `;
  } else if (paginasInternas.includes(currentPage.toLowerCase())) {
    menu.innerHTML = `
      <a href="index.html#introducao">Introdução</a>
      <a href="index.html#exemplos">Exemplos</a>
      <a href="index.html#personalidades">Personalidades</a>
      <a href="index.html#equipe">Equipe</a>
    `;
  } else {
    menu.innerHTML = `
      <a href="index.html">Página Inicial</a>
    `;
  }
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
});

function toggleMenu() {
  const menu = document.getElementById("side-menu");
  menu.classList.toggle("open");
}
