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

document.addEventListener("DOMContentLoaded", function () {   //só Deus sabe o que aconteceu aqui
  const menu = document.getElementById("side-menu");
  const currentPage = window.location.pathname.split("/").pop();

  menu.innerHTML = ""; 

  const paginasInternas = ["dados.html", "historia.html", "katherine.html", "hedy.html", "grace.html", "amanda.html"];

  if (currentPage === "" || currentPage === "index.html") {

    menu.innerHTML = `
      <a href="#introducao">Página Inicial</a>
    `;
  } else if (paginasInternas.includes(currentPage.toLowerCase())) { 
    menu.innerHTML = `
      <a href="index.html#introducao">Página Inicial</a>
    `;
  } else {
    menu.innerHTML = `
      <a href="index.html">Página Inicial</a>
    `;
  }
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => { //??????????
      menu.classList.remove('open');
    });
  });
});

function toggleMenu() {
  const menu = document.getElementById("side-menu");
  menu.classList.toggle("open");
}
