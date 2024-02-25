import displayPhrasalVerbs from './displayPhrasalVerbs.js';
import searchPhrsalVerbs from './search.js'; // Importe a função de pesquisa

document.getElementById("search-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const searchTerm = document.getElementById("search-input").value.trim();

    try {
        // Faça uma requisição para obter a lista de phrasal verbs (ou use uma lista pré-existente)
        const response = await fetch('http://localhost:3000/list');
        const phrasalVerbs = await response.json();

        // Use a função de pesquisa para filtrar os phrasal verbs com base no termo de pesquisa
        const filteredPhrasalVerbs = searchPhrsalVerbs(phrasalVerbs, searchTerm);

        // Defina a variável phrasalVerbList para o elemento onde você deseja exibir os resultados
        const phrasalVerbList = document.getElementById("phrasal-verb-list");

        // Limpe a lista de exibição antes de exibir os resultados filtrados
        phrasalVerbList.innerHTML = '';
        
        // Exiba os resultados filtrados na página
        displayPhrasalVerbs(phrasalVerbList, filteredPhrasalVerbs);
    } catch (error) {
        console.error('Erro ao obter dados dos phrasal verbs:', error);
    }
});
