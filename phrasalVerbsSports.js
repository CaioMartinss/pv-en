import getPhrasalVerbs from "./getPhrasalVerbs.js";


document.addEventListener('DOMContentLoaded', () => {
    const phrasalVerbList = document.getElementById('phrasal-verb-sports');
    getPhrasalVerbs(phrasalVerbList, 'sports');
});