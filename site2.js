Aqui está o código comentado, linha por linha, explicando o que cada trecho faz:

// Adiciona um evento de clique ao botão de alternância do modo escuro
document.getElementById("toggleDarkMode").addEventListener("click", function() {
    // Alterna a classe "dark-mode" no corpo do documento para ativar/desativar o modo escuro
    document.body.classList.toggle("dark-mode");
});

// Função para buscar receitas com base no texto digitado na barra de pesquisa
function searchReceitas() {
    // Obtém o valor digitado na barra de pesquisa e converte para minúsculas
    let input = document.getElementById("searchBar").value.toLowerCase();
    // Obtém todos os elementos com a classe "receita"
    let receitas = document.getElementsByClassName("receita");

    // Itera sobre todas as receitas
    for (let receita of receitas) {
        // Obtém o texto do título (h3) da receita e converte para minúsculas
        let nome = receita.getElementsByTagName("h3")[0].innerText.toLowerCase();
        // Exibe a receita se o nome contiver o texto digitado na pesquisa, caso contrário, oculta
        receita.style.display = nome.includes(input) ? "block" : "none";
    }
}

// Função para filtrar receitas por categoria
function filtrarReceitas() {
    // Obtém o valor selecionado no filtro de categoria
    let filtro = document.getElementById("filtroCategoria").value;
    // Obtém todos os elementos com a classe "receita"
    let receitas = document.getElementsByClassName("receita");

    // Itera sobre todas as receitas
    for (let receita of receitas) {
        // Obtém a categoria da receita a partir do atributo 'data-categoria'
        let categoria = receita.dataset.categoria;
        // Exibe a receita se a categoria for igual ao filtro selecionado ou se "todas" estiver selecionado
        receita.style.display = (filtro === "todas" || categoria === filtro) ? "block" : "none";
    }
}

// Função para exibir um alerta ao avaliar uma receita
function avaliarReceita() {
    alert("Obrigado por avaliar esta receita! ⭐");
}

// Função para copiar o link da receita para a área de transferência
function compartilharReceita(url) {
    // Cria a URL completa combinando a origem do site com o caminho fornecido
    let fullUrl = window.location.origin + "/" + url;
    // Copia a URL gerada para a área de transferência
    navigator.clipboard.writeText(fullUrl);
    // Exibe um alerta informando que o link foi copiado
    alert("Link copiado! Compartilhe com seus amigos.");
}

// Adiciona um evento ao formulário de envio de receita
document.getElementById("formReceita").addEventListener("submit", function(event) {
    // Impede o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
    // Exibe um alerta informando que a receita foi enviada com sucesso
    alert("Receita enviada com sucesso! ✅");
});

// Adiciona um evento ao formulário da newsletter
document.getElementById("newsletter").addEventListener("submit", function(event) {
    // Impede o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
    // Exibe um alerta informando que a inscrição foi realizada com sucesso
    alert("Inscrição realizada com sucesso! 📩");
});

Esse código implementa funcionalidades essenciais para o site Sabor Raiz, permitindo busca, filtragem, compartilhamento e interação com receitas. Se precisar de melhorias ou novas funcionalidades, é só falar!