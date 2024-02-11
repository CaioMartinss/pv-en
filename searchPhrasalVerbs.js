function searchPhrasalVerbs(data, searchTerm) {
    const searchTermLower = searchTerm.toLowerCase();
    return (data || []).filter((item) => {
        // Verifique se item é um objeto antes de acessar suas propriedades
        if (typeof item === 'object' && item !== null) {
            return (
                (item.phrasalVerb || '').toLowerCase().includes(searchTermLower)
                || (item.meaning || '').toLowerCase().includes(searchTermLower)
                || (item.example || '').toLowerCase().includes(searchTermLower)
            );
        }
        return false;
    });
}

export default searchPhrasalVerbs;
