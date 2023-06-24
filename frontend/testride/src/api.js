export const fetchBeers = async(currentPage, beersPerPage) => {
    try {
        const response = await fetch(
            `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${beersPerPage}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données des bières :', error);
        throw error;
    }
};

export const fetchSearchedBeers = async(searchField, searchText) => {
    try {
        const url = searchText ?
            `https://api.punkapi.com/v2/beers?${searchField}=${searchText}` :
            'https://api.punkapi.com/v2/beers';

        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la recherche des bières :', error);
        throw error;
    }
};