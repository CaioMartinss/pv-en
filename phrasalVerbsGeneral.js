import getPhrasalVerbs from "./getPhrasalVerbs.js";


document.addEventListener('DOMContentLoaded', () => {
    const phrasalVerbList = document.getElementById('phrasal-verb-general');
    getPhrasalVerbs(phrasalVerbList, 'general');
});