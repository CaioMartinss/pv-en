import searchPhrasalVerbs from './search.js';

document.addEventListener('DOMContentLoaded', () => {
    const phrasalVerbList = document.getElementById('phrasal-verb-list');

    // Função para obter os dados dos phrasal verbs
    const getPhrasalVerbs = async () => {
        try {
            const response = await fetch('http://localhost:3000/list');
            const phrasalVerbs = await response.json();
            displayPhrasalVerbs(phrasalVerbs);
        } catch (error) {
            console.error('Erro ao obter os Phrasal Verbs:', error);
        }
    };

    // Função para exibir os phrasal verbs na lista
    const displayPhrasalVerbs = (phrasalVerbs) => {
        phrasalVerbs.forEach((phrasalVerb) => {
            const card = createCard(phrasalVerb);
            phrasalVerbList.appendChild(card);
        });
    };

    // Função para criar um card de phrasal verb
    const createCard = (phrasalVerb) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const phrasalVerbHeader = document.createElement('h2');
        phrasalVerbHeader.textContent = phrasalVerb.phrasalVerb;
        card.appendChild(phrasalVerbHeader);

        const meaningParagraph = document.createElement('p');
        meaningParagraph.textContent = `Meaning: ${phrasalVerb.meaning}`;
        card.appendChild(meaningParagraph);

        const exampleParagraph = document.createElement('p');
        exampleParagraph.textContent = `Example: ${phrasalVerb.example}`;
        card.appendChild(exampleParagraph);

        const typePhrasalVerb = document.createElement('p');
        typePhrasalVerb.textContent = `Type: ${phrasalVerb.type}`;
        card.appendChild(typePhrasalVerb);


        return card;
    };

    // Chame a função para obter os phrasal verbs ao carregar a página
    getPhrasalVerbs();

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
            displayPhrasalVerbs(filteredPhrasalVerbs);
        } catch (error) {
            console.error('Erro ao obter dados dos phrasal verbs:', error);
        }
    });
});
