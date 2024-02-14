import getPhrasalVerbs from "./getPhrasalVerbs.js";


document.addEventListener('DOMContentLoaded', () => {
    const phrasalVerbList = document.getElementById('phrasal-verb-shopping');
    getPhrasalVerbs(phrasalVerbList, 'shopping');

});