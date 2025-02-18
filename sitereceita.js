document.getElementById("toggleDarkMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

function searchReceitas() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let receitas = document.getElementsByClassName("receita");

    for (let receita of receitas) {
        let nome = receita.getElementsByTagName("h3")[0].innerText.toLowerCase();
        receita.style.display = nome.includes(input) ? "block" : "none";
    }
}

function filtrarReceitas() {
    let filtro = document.getElementById("filtroCategoria").value;
    let receitas = document.getElementsByClassName("receita");

    for (let receita of receitas) {
        let categoria = receita.dataset.categoria;
        receita.style.display = (filtro === "todas" || categoria === filtro) ? "block" : "none";
    }
}

function avaliarReceita() {
    alert("Obrigado por avaliar esta receita! ⭐");
}

function compartilharReceita(url) {
    let fullUrl = window.location.origin + "/" + url;
    navigator.clipboard.writeText(fullUrl);
    alert("Link copiado! Compartilhe com seus amigos.");
}

document.getElementById("formReceita").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Receita enviada com sucesso! ✅");
});

document.getElementById("newsletter").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Inscrição realizada com sucesso! 📩");
});