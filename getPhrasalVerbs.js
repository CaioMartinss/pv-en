// getPhrasalVerbs.js
import displayPhrasalVerbs from './displayPhrasalVerbs.js';

const getPhrasalVerbs = async (phrasalVerbList) => {
    try {
        const response = await fetch('http://localhost:3000/list');
        const phrasalVerbs = await response.json();
        displayPhrasalVerbs(phrasalVerbList, phrasalVerbs);
    } catch (error) {
        console.error('Erro ao obter os Phrasal Verbs:', error);
    }
};

export default getPhrasalVerbs;
