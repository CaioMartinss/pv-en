const createCardsRoutines = (phrasalVerb) => {
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

    return card;
};

const displayPhrasalVerbsRoutines = (phrasalVerbList, phrasalVerbs) => {
    phrasalVerbList.innerHTML = ''; // Limpa a lista antes de exibir os resultados
    phrasalVerbs.forEach((phrasalVerb) => {
        const card = createCardsRoutines(phrasalVerb);
        phrasalVerbList.appendChild(card);
    });
};

const getPhrasalVerbsRoutines = async (phrasalVerbList, category) => {
    try {
        const response = await fetch(`http://localhost:3000/general?type=${category}`);
        const phrasalVerbs = await response.json();
        displayPhrasalVerbsRoutines(phrasalVerbList, phrasalVerbs);
    } catch (error) {
        console.error('Erro ao obter os Phrasal Verbs:', error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const phrasalVerbList = document.getElementById('phrasal-verb-routines');
    getPhrasalVerbsRoutines(phrasalVerbList, 'routines');
});