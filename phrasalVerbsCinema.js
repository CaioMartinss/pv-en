import getPhrasalVerbs from "./getPhrasalVerbs.js";


document.addEventListener('DOMContentLoaded', () => {
    const phrasalVerbList = document.getElementById('phrasal-verb-cinema');
    getPhrasalVerbs(phrasalVerbList, 'cinema');
});