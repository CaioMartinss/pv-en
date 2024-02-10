// displayPhrasalVerbs.js
import createCard from './createCard.js';

const displayPhrasalVerbs = (phrasalVerbList, phrasalVerbs) => {
    phrasalVerbList.innerHTML = ''; // Limpa a lista antes de exibir os resultados
    phrasalVerbs.forEach((phrasalVerb) => {
        const card = createCard(phrasalVerb);
        phrasalVerbList.appendChild(card);
    });
};

export default displayPhrasalVerbs;
