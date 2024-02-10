// main.js
import searchPhrasalVerbs from './searchPhrasalVerbs.js';
import getPhrasalVerbs from './getPhrasalVerbs.js';
import displayPhrasalVerbs from './displayPhrasalVerbs.js';


document.addEventListener('DOMContentLoaded', () => {
    const phrasalVerbList = document.getElementById('phrasal-verb-list');

    // Chame a função para obter os phrasal verbs ao carregar a página
    getPhrasalVerbs(phrasalVerbList);

    // Adicione o evento de envio do formulário de pesquisa
    document.getElementById("search-form").addEventListener("submit", async function (event) {
        event.preventDefault();

        const searchTerm = document.getElementById("search-input").value.trim();

        try {
            const response = await fetch('http://localhost:3000/list');
            const phrasalVerbs = await response.json();

            const filteredPhrasalVerbs = searchPhrasalVerbs(phrasalVerbs, searchTerm);
            // Limpe a lista antes de exibir os resultados filtrados
            phrasalVerbList.innerHTML = '';
            displayPhrasalVerbs(phrasalVerbList, filteredPhrasalVerbs);
        } catch (error) {
            console.error('Erro ao obter dados dos phrasal verbs:', error);
        }
    });
});
