// createCard.js
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

export default createCard;
