import createCards from './createCards.js';

const displayPhrasalVerbs = (phrasalVerbList, phrasalVerbs) => {
    phrasalVerbList.innerHTML = ''; // Limpa a lista antes de exibir os resultados
    phrasalVerbs.forEach((phrasalVerb) => {
        const card = createCards(phrasalVerb);
        phrasalVerbList.appendChild(card);
    });
};


export default displayPhrasalVerbs;
